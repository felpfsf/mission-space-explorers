import { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => { setClick(!click) }

  return (
    <header className='w-full z-10 p-6 sm:p-0 xl:pt-10 absolute flex items-center justify-between'>
      <Link to='/'>
        <img className='sm:ml-10' src='../assets/shared/logo.svg' alt="" />
      </Link>

      <nav className='hidden sm:w-[450px] xl:w-[832px] py-10 px-12 bg-white/[0.04] backdrop-blur-[80px] sm:flex xl:justify-center'>

        <ul className='uppercase flex sm:gap-[37px] xl:gap-[50px]'>

          <li className='nav--text text-sm xl:nav--text xl:text-base'>
            <Link className='hover:border-b-2 pb-[39px] hover:border-white/25' to='/'>
              <strong className='sm:hidden xl:inline-flex mr-3'>00</strong>
              Home
            </Link>
          </li>
          <li className='nav--text text-sm xl:nav--text xl:text-base'>
            <Link className='hover:border-b-2 pb-[39px] hover:border-white/25' to='/destination'>
              <strong className='sm:hidden xl:inline-flex mr-3'>01</strong>
              Destination
            </Link>
          </li>
          <li className='nav--text text-sm xl:nav--text xl:text-base'>
            <Link className='hover:border-b-2 pb-[39px] hover:border-white/25' to='/crew'>
              <strong className='sm:hidden xl:inline-flex mr-3'>02</strong>
              Crew
            </Link>
          </li>
          <li className='nav--text text-sm xl:nav--text xl:text-base'>
            <Link className='hover:border-b-2 pb-[39px] hover:border-white/25' to='/technology'>
              <strong className='sm:hidden xl:inline-flex mr-3'>03</strong>
              Technology
            </Link>
          </li>
        </ul>
      </nav>

      <div onClick={handleClick} className="sm:hidden z-10 cursor-pointer">
        {click ?
          <img src="../src/assets/shared/icon-close.svg" alt="" />
          :
          <img src="../src/assets/shared/icon-hamburger.svg" alt="" />
        }
      </div>
      <nav
        className=
        {click ?
          ('fixed top-0 right-0 h-screen w-[70%] pl-8 pt-28 bg-white/25 backdrop-blur-lg ease-in duration-300')
          :
          ('fixed top-0 right-[-100%] h-screen w-[70%] pl-8 pt-28 bg-white/25 backdrop-blur-[80px] ease-in duration-300')
        }
      >
        <ul className='uppercase'>
          <li className='nav--text text-base pb-8'>
            <Link onClick={() => setClick(false)} to='/'><strong className='mr-[11px]'>00</strong>Home</Link>
          </li>
          <li className='nav--text text-base pb-8'>
            <Link onClick={() => setClick(false)} to='/destination'><strong className='mr-[11px]'>01</strong>Destination</Link>
          </li>
          <li className='nav--text text-base pb-8'>
            <Link onClick={() => setClick(false)} to='/crew'><strong className='mr-[11px]'>02</strong>Crew</Link>
          </li>
          <li className='nav--text text-base pb-8'>
            <Link onClick={() => setClick(false)} to='/technology'><strong className='mr-[11px]'>03</strong>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar