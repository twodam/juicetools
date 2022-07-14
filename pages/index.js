import Image from 'next/image'
import Link from 'next/link'
import TopNav from '../components/TopNav.js'

export default function Home() {
  return (
    <div className="px-8">
      <TopNav home/>

      <main className="min-h-screen py-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-medium">
          Juicebox Center
        </h1>
        <br/>

        <div className="flex items-center justify-center flex-wrap max-w-fit text-inherit">
          <div className="m-4 p-6 text-left no-underline rounded-xl border-solid border-slate-100 border-2 max-w-xl transition-colors hover:border-blue-400 hover:text-blue-400">
            <Link href="metric">
              <h2 className="text-2xl">DAO Health Metrics &rarr;</h2>
            </Link>
          </div>

          <div className="m-4 p-6 text-left no-underline rounded-xl border-solid border-slate-100 border-2 max-w-xl transition-colors hover:border-blue-400 hover:text-blue-400">
            <Link href="history">
              <h2 className="text-2xl">History &rarr;</h2>
            </Link>
          </div>
        </div>
      </main>

      <footer className="flex flex-1 py-16 rounded-t-sm border-solid border-black justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center grow"
        >
          Powered by{' '}
          <span className="ml-2 h-4">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
