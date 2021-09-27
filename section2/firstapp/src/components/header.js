import { NavLink} from "react-router-dom";
const Header = () =>{
    return(
        <div > 
       

<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#B0B7C0"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand"  aria-current="page" to="#" activeClassName="active" >FirstReactApp</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/login" activeClassName="active"  >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/signup" activeClassName="active"  >Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/events" activeClassName="active" >Events</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/gallery" activeClassName="active" >Gallery</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle "   to="#"   id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Browse Product
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink  className="nav-link" aria-current="page" to="/productlist" activeClassName="active" >Product List</NavLink></li>
            <li><NavLink   className="nav-link" aria-current="page" to="/productdetails" activeClassName="active">Product Details</NavLink></li>
            <li><NavLink   className="nav-link" aria-current="page" to="/forms" activeClassName="active">SignUp Form</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>



        </div>
    )
}
export default Header;
