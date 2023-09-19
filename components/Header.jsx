import { useState } from "react";


export default function Header() {

  const mappedNav = [ 'home', 'quote', 'market', 'news', 'support' ];

  const [ open, setOpen ] = useState(false);

  const toggleButton = () => {
    setOpen( !open )
  }
  const toggleLinks = () => {
    if( open ) {
      toggleButton();
    }
  }

  return (
    <header className="lg:p-10 p-5 flex justify-between items-center w-full top-0 left-0 fixed z-40">

      <div>
        <h1 className="text-4xl font-bold text-orange-200 md:p-0 py-2">cryptoapp.</h1>
      </div>

      <button
        type="button"
        className={`text-orange-200 ${ open ? 'hidden' : 'block md:hidden' }`}
        onClick={ toggleButton }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </button>

      <nav className={ `fixed ${ open 
        ? 'opacity-100 visible top-0 right-0 bottom-0 z-50 bg-black/80 backdrop-blur-sm sidebar w-3/4 ease-in duration-200'
        : 'opacity-0 invisible md:opacity-100 md:visible md:relative'}` }>

        <button
          type="button"
          onClick={ toggleButton }
          className={`text-orange-200 ${ open ? 'block' : 'hidden' } absolute top-8 right-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <ul className={`flex gap-5 ${ open ? 'flex-col items-center pt-20' : 'flex-row' }`}>

          { mappedNav.map(( section ) => (
          <li
            key={ section }
            className="py-3 md:py-0">
            <a
              href={`#${section}`}
              onClick={() => toggleLinks()}
              className="text-lg font-medium text-orange-200  hover:text-orange-400 duration-200 ease-linear">
                { section }.
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
