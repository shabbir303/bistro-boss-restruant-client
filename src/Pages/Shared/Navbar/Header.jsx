// import Dropdown from "./Dropdown";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='max-w-7xl left-0 right-0 font-cinzel mx-auto fixed z-10'>
      <Navbar fluid rounded className='bg-opacity-80 lg:bg-opacity-50 bg-slate-900 text-cyan-500'>
      <Navbar.Brand href="">
        
        <span className="self-center whitespace-nowrap text-xl font-bold ">BISTRO BOSS <br />Restaurant</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='text-slate-400'>
        <Link to='/'>
        <Navbar.Link href="#" className='text-white'>
          Home
        </Navbar.Link>
        </Link>
        <Navbar.Link href="#" className='text-white'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-white'>Services</Navbar.Link>
        <Navbar.Link href="#" className='text-white'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='text-white'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
