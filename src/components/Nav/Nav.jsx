import './Nav.css'
import { NavLink } from 'react-router-dom'
import logo from "./cocktail.png"
const authenticatedOptions = (
    <>
        <NavLink className="link" to="/add-drink">Add Drink</NavLink>
        <NavLink className="link" to="/favorites">Favorites</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/drinks">Drinks</NavLink>
    </>
)
const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="logo" to="/drinks">DrinkHub <img src={logo} alt="" /></NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
