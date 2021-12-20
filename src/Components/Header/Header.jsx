import { Link } from 'react-router-dom'
import { MdNotifications, MdAccountBox } from 'react-icons/md'
import './Header.scss'

const Header = () => {
   return ( 
      <header >
         <nav>
            <ul className='menu-list'>
               <li><Link to="/">Picture</Link></li>
               <li><Link to="/">My lvl</Link></li>
               <li><Link to="/new">What's new</Link></li>
               <li><Link to="/movies">Movies</Link>
                  <div className="dropdown-menu">
                     <div className="dropdown-menu__body">
                        
                     </div>
                  </div>
               </li>
               <li><Link to="/serials">Serials</Link>
                  <div className="dropdown-menu">
                     
                  </div>
               </li>
               <li><Link to="/cartoons">Cartoons</Link>
                  <div className="dropdown-menu">
                     
                  </div>
               </li>
               <li><Link to="/tv+">TV+</Link>
                  <div className="dropdown-menu">
                     
                  </div>
               </li>
            </ul>
            <ul className='menu-list'>
               <li><input type="search" id="search" /></li>
               <li><Link to="/"><MdNotifications /></Link>
                  <div className="dropdown-menu">
                     
                  </div>
               </li>
               <li><Link to="/profile"><MdAccountBox /></Link>
                  <div className="dropdown-menu">
                     
                  </div>
               </li>
            </ul>
         </nav>
      </header>
   );
}
 
export default Header;