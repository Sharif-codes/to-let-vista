
import Container from '../Container'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm mx-auto'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            {/* <Logo></Logo> */}
           <Link to="/"> <div className="flex-1 flex items-center">
                <img className="w-10" src="/logo-casa.svg" alt="" />
                <p className="ml-2 hidden md:block
                 text-lg md:text-xl font-semibold">To-let<span className="text-info ml-1">Hub</span></p>
            </div></Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
