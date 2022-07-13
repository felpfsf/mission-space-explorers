import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full mt-10 z-[100] absolute pt-10 flex items-center justify-between'>
      <img className='ml-[55px]' src="../src/assets/shared/logo.svg" alt="" />

      <nav className='w-[832px] bg-white/25 backdrop-blur-sm py-10 flex justify-center'>
        <ul className='flex gap-[50px]'>
          <li className='nav--text'>
            <Link to='/' className='hover:border-b-2 pb-[39px] hover:border-white/25 active:border-white transition-transform'>
              <strong className='mr-[11px]'>00</strong>
              Home
            </Link>
          </li>
          <li className='nav--text'>
            <Link to='/destination' className='hover:border-b-2 pb-[39px] hover:border-white/25 active:border-white transition-transform'>
              <strong className='mr-[11px]'>01</strong>
              Destination
            </Link>
          </li>
          <li className='nav--text'>
            <Link to='/crew' className='hover:border-b-2 pb-[39px] hover:border-white/25 active:border-white transition-transform'>
              <strong className='mr-[11px]'>02</strong>
              Crew
            </Link>
          </li>
          <li className='nav--text'>
            <Link to='/technology' className='hover:border-b-2 pb-[39px] hover:border-white/25 active:border-white transition-transform'>
              <strong className='mr-[11px]'>03</strong>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar