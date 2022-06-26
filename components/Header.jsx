import Image from "next/image";
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from  'next-auth/react'

function Header() {
  const { data: session } = useSession()
  console.log(session)
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px] justify-between">

      <h1 className="cursor-pointer font-extrabold text-2xl pr-8 " onClick={() => router.push("/")}>MOOVIE</h1>

      {session && (
      <div className="hidden md:flex items-center space-x-6">

        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>

        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>

        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>

        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>

        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>

        <a className="header-link group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>

      </div>
    )}
    
    {!session ? (

      <button
        onClick={signIn}
        className="uppercase border px-4 py-1.5 text-white rounded font-medium hover:bg-white hover:text-black transition duration-200"
      >
        Login
      </button>
      
      ) :
        
        (

      <div className='ml-auto cursor-pointer flex'>

        <img
          src={session.user.image}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />
      </div>

      )}
      
    </header>
  );
}

export default Header;
