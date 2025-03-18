"use client";

import { createContext, useContext, ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getLatestPosts } from "@/service/api.posts";

export interface Post {
  id: string;
  photo_url: string;
  title: string;
  content: string;
  published_date: string;
  view_count: number;
  route: string;
}

interface PostsContextType {
  posts: Post[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

export function PostsProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsFetcher>{children}</PostsFetcher>
    </QueryClientProvider>
  );
}

function PostsFetcher({ children }: { children: ReactNode }) {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await getLatestPosts();
      return response.data;
    },
  });

  const value = {
    posts,
    isLoading,
    isError,
    error: error as Error | null,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}
