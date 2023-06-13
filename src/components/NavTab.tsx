import React from 'react'

const NavTab = () => {
  return (
  <nav className="nav">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
    <a className="nav-link" href="#">Link</a>
    <a className="nav-link" href="#">Link</a>
    <a className="nav-link disabled">Disabled</a>
  </nav>
  );
  
}

export default NavTab