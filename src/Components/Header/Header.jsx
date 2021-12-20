import { Link } from 'react-router-dom'
import { MdNotifications, MdAccountBox } from 'react-icons/md'
import './Header.scss'

const Header = () => {
   return ( 
      <header >
         <nav>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/">My lvl</Link></li>
               <li><Link to="/new">What's new</Link></li>
               <li><Link to="/movies">Movies</Link></li>
               <li><Link to="/serials">Serials</Link></li>
               <li><Link to="/cartoons">Cartoons</Link></li>
               <li><Link to="/tv+">TV+</Link></li>
            </ul>
            <ul>
               <li><input type="search" id="search" /></li>
               <li><MdNotifications /></li>
               <li><Link to="/profile"><MdAccountBox /></Link></li>
            </ul>
         </nav>
      </header>
   );
}
 
export default Header;