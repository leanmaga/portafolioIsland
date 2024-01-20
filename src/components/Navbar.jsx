import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      
      <nav className='flex text-lg gap-7 font-medium'>
        
        <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Sobre mi
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Proyectos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;