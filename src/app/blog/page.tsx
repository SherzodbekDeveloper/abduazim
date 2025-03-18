"use client";

import Banner from "@/components/banner/banner";
import { usePosts } from "@/store/postsStore";
import Link from "next/link";

// Post interfeysi
interface Post {
  id: number;
  title: string;
  createdAt: string | Date;
  excerpt: string;
  slug: string;
}

// Postlarni yil va oy bo'yicha guruhlash
const groupPostsByMonth = (posts: Post[]) => {
  const currentYear = new Date().getFullYear();

  const filteredPosts = posts
    .map((post) => ({
      ...post,
      createdAt: new Date(post.createdAt),
    }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .filter((post) => post.createdAt.getFullYear() <= currentYear)
    .reverse();

  return filteredPosts.reduce((acc, post) => {
    const year = post.createdAt.getFullYear();
    const month = post.createdAt.toLocaleString("en-US", { month: "long" });

    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];

    acc[year][month].push(post);
    return acc;
  }, {} as Record<number, Record<string, Post[]>>);
};

export default function BlogPage() {
  // ✅ Hookni komponent ichida chaqiramiz!
  const { posts, isLoading } = usePosts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const groupedPosts = groupPostsByMonth(posts || []); // Agar posts undefined bo‘lsa, bo‘sh array yuboramiz

  return (
    <div className="flex flex-col min-h-screen">
      <Banner title="Blog" />
      <main className="flex-grow special-container py-12">
        <div className="special-container">
          {Object.entries(groupedPosts)
            .reverse()
            .map(([year, months]) => (
              <div key={year} className="mb-8">
                <h2 className="text-2xl sticky top-22 font-semibold bg-gray-200 px-6 py-1 rounded-4xl inline-block">
                  {year}
                </h2>

                {Object.entries(months).map(([month, posts]) => (
                  <div key={month} className="mt-4">
                    <h3 className="text-xl font-medium">{month}</h3>
                    <ul className="list-none pl-4 border-l-2 border-gray-300 mt-2">
                      {posts.map((post) => (
                        <li key={post.id} className="mt-3">
                          <div className="text-sm text-zinc-500">
                            {post.createdAt.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <h4 className="text-lg font-semibold">
                            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-zinc-700">{post.excerpt}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </main>

      <footer className="py-6 text-center text-zinc-500 text-sm">© 2025 azimjon.com</footer>
    </div>
  );
}
