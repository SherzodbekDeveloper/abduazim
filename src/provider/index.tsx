"use client";

import { PostsProvider } from "@/store/postsStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>
    <PostsProvider>
      {children}
    </PostsProvider>
  </QueryClientProvider>;
}
