import Image from "next/image";
import Link from "next/link";
import { Courier_Prime } from "next/font/google";
import Logo from "../../public/logo-phanto.svg";
import BurgerIcon from "../../public/burger-icon.svg";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const courier = Courier_Prime({ subsets: ["latin"], variable: "--font-courier", weight: "400" });

export default function Home() {
  return (
    <main className="bg-zinc-800 min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center text-white mr-6">
          <Image src={Logo} className="mr-2" alt="Logo"></Image>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center py-2">
            <Image src={BurgerIcon} alt="Logo"></Image>
          </button>
        </div>
        <div className="hidden w-full flex-grow lg:flex lg:items-center lg:justify-between lg:w-auto">
          <div className="text-xl font-bold lg:flex lg:flex-row lg:gap-8">
            <Link href="/" className={`text-white  ${courier.className}`}>
              home
            </Link>
            <Link href="/" className={`text-white ${courier.className}`}>
              experience
            </Link>
            <Link href="/" className={`text-white ${courier.className}`}>
              portfolio
            </Link>
            <Link href="/" className={`text-white ${courier.className}`}>
              blog
            </Link>
          </div>
          <div className="text-xl font-bold lg:flex lg:flex-row lg:gap-8">
            <Link href="/" className={`text-white flex flex-row  ${courier.className}`}>
              <Image src={GithubIcon} alt="Logo"></Image> github
            </Link>
            <Link href="/" className={`text-white flex flex-row ${courier.className}`}>
              <Image src={LinkedinIcon} alt="Logo"></Image> linkedin
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
