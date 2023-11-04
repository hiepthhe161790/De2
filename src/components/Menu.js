import { NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <ul className='header-menu'>
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? 'chocolate' : '#fff',
                    textDecoration: 'none',
                    fontSize: isActive ? '24px' : '20px'
                })} to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? 'chocolate' : '#fff',
                    textDecoration: 'none',
                    fontSize: isActive ? '24px' : '20px'
                })} to='/about' >About</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? 'chocolate' : '#fff',
                    textDecoration: 'none',
                    fontSize: isActive ? '24px' : '20px'
                })} to='/blog' >Blog</NavLink>
            </li>
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? 'chocolate' : '#fff',
                    textDecoration: 'none',
                    fontSize: isActive ? '24px' : '20px'
                })} to='/productmanagement' >Services</NavLink>
                
            </li>
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? 'chocolate' : '#fff',
                    textDecoration: 'none',
                    fontSize: isActive ? '24px' : '20px'
                })} to='/contact' >Contact</NavLink>
            </li>
        </ul>
    );
}
export default Menu;