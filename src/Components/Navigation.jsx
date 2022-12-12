import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu';
import Image from "./Images";
  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask
    if (showMenu){
      menu = <div className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'><NavigationMenu /></div>

      menuMask = <div className='bg-lightBlack fixed top-0 left-0 w-full h-full z-50' onClick={() => setShowMenu(false)}></div>
    }

    return (
        <nav>
            <span className="text-xl">
              <Image src="images/icon-hamburger.svg" alt='hamp' className='cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
            </span>

            {menuMask}
            {menu}
        </nav>
    )
}

export default Navigation