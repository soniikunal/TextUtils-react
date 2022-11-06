import React from 'react';
import propTypes from "prop-types"

export default function Navbar(props){
    return(
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* {console.log(props)} */}
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="">About us</a>
      </li> */}
      
    </ul>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
      <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"Light":"Dark"} Mode</label>
    </div>
</div>
</nav>

    )
}

Navbar.propTypes = {
    title : propTypes.string,
    home : propTypes.string
}

Navbar.defaultProps = {
    title:"Insert title",
    home:"Set home name"
}
