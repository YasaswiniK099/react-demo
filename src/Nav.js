import{Link} from 'react-router-dom'

function Nav(){
	return(
		<div className="Navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
		</div>
		)
}
export default Nav