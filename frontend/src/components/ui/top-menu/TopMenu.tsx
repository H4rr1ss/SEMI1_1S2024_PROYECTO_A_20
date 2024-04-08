import Link from "next/link"

const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div className="">
        <Link
          href="/"
        >
          <span className="font-bold">Teslo</span>
        </Link>
      </div>
    </nav>
  )
}

export default TopMenu
