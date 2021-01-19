import Head from 'next/head'
import Link from 'next/link'

import { MdMail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Renato Hideki Osaka</title>
      </Head>

      <main className="flex justify-center items-center h-screen antialiased">
        <div className="flex flex-col justify-center items-center p-4">
          <img src='https://github.com/renatoosaka.png'  width={150} height={150} alt='Renato Hideki Osaka' className="rounded-full" />
          <h1 className="font-medium text-2xl text-gray-900 dark:text-gray-400 self-center mt-4">Renato Hideki Osaka</h1>
          <p className="dark:text-gray-400 mt-4 leading-6 text-center">Sou dev, faço umas paradas maneiras com Node.js ReactJS e React Native</p>
          <p className="dark:text-gray-400 leading-6 text-center">Ahh estou aprendendo Go, muito massinha!</p>
          <div className="flex flex-row mt-4">
            <Link href="https://github.com/renatoosaka/">
              <a className="dark:text-gray-400 ml-4 dark:hover:text-gray-200 transition">
                <FaGithub size={20} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/renato-hideki-osaka/">
              <a className="dark:text-gray-400 ml-4 dark:hover:text-gray-200 transition">
                <FaLinkedin size={20} />
              </a>
            </Link>
            <Link href="https://twitter.com/renato_osaka">
              <a className="dark:text-gray-400 ml-4 dark:hover:text-gray-200 transition">
                <FaTwitter size={20} />
              </a>
            </Link>
            <Link href="mailto:oi@renatohidekiosaka.com.br">
              <a className="dark:text-gray-400 ml-4 dark:hover:text-gray-200 transition">
                <MdMail size={20} />
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
