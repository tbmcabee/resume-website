import React, { useState } from 'react'

interface NavProps {
  tabs: string[];
}

const NavTab = ({ tabs }: NavProps) => {
  const [tabIndex, setTabIndex] = useState(-1);

  return (
  <nav className="nav nav-pills justify-content-center">
    {tabs.map((tab, index) => (
      <li className="nav-item">
        <a className={tabIndex === index ? "nav-link active" : "nav-link"} key={tab} onClick={() => {setTabIndex(index)}} href="#">{tab}</a>
      </li>
    ))}
  </nav>
  );
  
}

export default NavTab