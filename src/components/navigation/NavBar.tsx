import "./navbar.css"
import { useState } from "react"
const NavBar = () => {

  //Array of strings that can be increased/decreased by adding strings 
  const tabs = ["Home","About Me", "Contacts","Resume"]

  //Used to keep track of which index is active
  const [isActive, setIsActive] = useState(0);



  return (
    <nav>
        <ul>
          {tabs.map((tabName:string, index:number)=> 
            (
              <li  key={`navItem_${index}`} className={isActive === index ?'underline':'inActive'} onClick={()=>setIsActive(index)}>{tabName}</li>
            )
          )}
        </ul>
    </nav>
  )
}

export default NavBar