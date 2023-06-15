import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NavTab() {
  let tabs = ["Home", "About", "Projects", "Experience"]
  const [tabIndex, setTabIndex] = useState(-1);

  const navigate = useNavigate();
  
  const goToPage = (pageName: string) => {
    navigate('/' + pageName); 
  };
 
  return (
  <nav className="nav nav-pills justify-content-center">
    {tabs.map((tab, index) => (
      <li className="nav-item">
        <a className={tabIndex === index ? "nav-link active" : "nav-link"} key={tab} onClick={() => 
          {setTabIndex(index); goToPage(tab);}}>{tab}</a>
      </li>
    ))}
  </nav>
  );
  
}

export default NavTab