import { NavLink} from "react-router-dom";
const Header = () =>{
    return(
        <div > 
            <nav className="navbar navbar-expand navbar-light bg-warning" aria-label="Second navbar example">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/login" activeClassName="active">Login</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/signup" activeClassName="active">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/productdetails" activeClassName="active" >Product Details </NavLink>
          </li>
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
        </div>
    )
}
export default Header;
