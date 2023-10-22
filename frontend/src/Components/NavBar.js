import { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { ReactComponent as Hamburger } from '../icons/hamburger.svg'
import  Brand  from './images/hillwoodsmainlogo.png'
import '../styles/navbar.css'
import HomeScreen from '../Screens/HomeScreen'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="nb-navbar">
      <div className="nb-container">
        <div className="logo">
        {/* <img src="https://o.remove.bg/downloads/b45113a0-0857-4224-b32c-d451afed8c85/logo-removebg-preview.png" alt="" /> */}
          <img src={Brand} alt="logo" onClick={()=>navigate('/')}/>
          {/* <h2>Hillwoods Acadmy</h2> */}
        </div>
        <div className="nb-menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nb-nav-elements  ${showNavbar && 'active'}`}>
          <ul className='nb-upper-ul'>
            <li className="nb-navbar-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >
            <NavLink to='/'>Home</NavLink>
              {showDropdown && (
                <div className="nb-dropdown">
                    <ul className='nb-lower-ul'>
                    <li><NavLink to='/legacy'>Legacy</NavLink></li>
                    <li> <NavLink to='/aims'>Aims & Objectives</NavLink></li>
                    <li> <NavLink to='/mission'>Mission & Vision</NavLink></li>
                    {/* <li><NavLink to='/vistas'>Vistas</NavLink></li> */}
                    <li><NavLink to='/schoolcommunity'>School Community</NavLink></li>
                    <li><NavLink to='/words'>Word For Parent</NavLink></li>
                   
                    </ul>
                </div>
                )}

            </li>
            {/* <li className='nb-navbar-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              Admission
              {showDropdown && (
                <div className="nb-dropdown">
                    <ul>
                    <li><NavLink to ='/admissionjr'>Admission Procedure-Jr.</NavLink></li>
                    <li><NavLink to ='/admissionsr'>Admission Procedure-Sr.</NavLink></li>
                    </ul>
                </div>
                )}
            </li> */}
           
            <li className='nb-navbar-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink to='/infrastructure'>Academics</NavLink>
            {showDropdown && (
                <div className="nb-dropdown">
                    <ul className='nb-lower-ul'>
                    <li><NavLink to='/infrastructure'>Infrastructure</NavLink></li>
                    <li> <NavLink to='/facility'>Facilities</NavLink></li>
                    <li><NavLink to='/curriculum'>Curriculum</NavLink></li>
                   
                    </ul>
                </div>
                )}

            </li>
            <li className='nb-navbar-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink to='/arts'>Activities</NavLink>
            {showDropdown && (
                <div className="nb-dropdown">
                    <ul className='nb-lower-ul'>
                    <li><NavLink to='/arts'>Creative Arts</NavLink></li>
                    <li> <NavLink to='/club'>Resource Centers</NavLink></li>
                    <li><NavLink to='/coactivities'>Co-Scholastic Activities</NavLink></li>
                    <li> <NavLink to='/house'>House System</NavLink></li>
                    </ul>
                </div>
                )}
            </li>
            {/* <li className='nb-navbar-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <NavLink to='school-tour'>Campus Life</NavLink>
              {showDropdown && (
                <div className="nb-dropdown">
                    <ul className='nb-lower-ul'>
                      <li><NavLink to ='/school-tour'>Tour of the School</NavLink></li>
                      <li><NavLink to ='/gallery'>Gallery</NavLink></li>
                      <li><NavLink to ='/campus-location'>Campus Location</NavLink></li>
                      <li><NavLink to ='/school-uniform'>School Uniform</NavLink></li>
                    </ul>
                </div>
                )}
            </li> */}
            <li className='nb-navbar-item'><NavLink to='about'>About Us</NavLink></li>
            <li className='nb-navbar-item'><NavLink to='contact'>Contact Us</NavLink></li>
            <li className='nb-navbar-item' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
             <button className='nb-button'>Login</button> 
              {showDropdown && (
                <div className="nb-dropdown">
                    <ul className='nb-lower-ul'>
                    <a href="https://www.microsoft.com/en-in/microsoft-teams/log-in"><li>School Login</li></a>
                    <a href="https://hillwoodsgreaternoida.smscare.in/home"> <li >Parent Login</li></a>
                    </ul>
                </div>
                )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar