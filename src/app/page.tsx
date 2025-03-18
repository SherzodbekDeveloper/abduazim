import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Youtube } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4 mt-20">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
                alt="Profile Picture"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2">Abduazim Usmon</h1>
          <p className="text-xl text-zinc-500 mb-4">Software Engineer at <a href="https://www.cod3.uz" className="text-blue-400">Cod3 Lab</a></p>

          <div className="flex justify-center space-x-4 mb-6">
            <Link href="https://youtube.com" aria-label="YouTube" className="text-zinc-700 hover:text-zinc-900">
              <Youtube size={24} />
            </Link>
            <Link href="https://github.com" aria-label="GitHub" className="text-zinc-700 hover:text-zinc-900">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-zinc-700 hover:text-zinc-900">
              <Linkedin size={24} />
            </Link>
            <Link href="https://t.me" aria-label="Telegram" className="text-zinc-700 hover:text-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
              </svg>
            </Link>
          </div>

          <p className="text-zinc-700 mb-8">I write about non-technical stuff in the technical world.</p>

          <div className="flex justify-center space-x-4">
            <Link href="/blog" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Read Blog
            </Link>
            <Link href="/about" className="px-6 py-2 border border-zinc-300 rounded hover:bg-zinc-50 transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-zinc-500 text-sm">© 2025 abduazim.com</footer>
    </div>
  )
}

