import React, { useEffect, useState } from 'react'
import styles from './NavbarItems.module.scss';
import Link from 'next/link';
import useWindowSize from '../../utils/ResizeHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const NavbarItems = ({navItem, idx, linkClick, set}) => {
    const [onMenu, setOnMenu] = useState(false);
    const [onSubMenu, setOnSubMenu] = useState(false);
    const [isNavbarDown, setIsNavbarDown] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        if (size.width > 780) {
        setIsNavbarDown(true);
        } else {
        // navbar.style.clipPath = "circle(15% at 100% 0%)";
        setIsNavbarDown(false);
        }
    }, [size]);

    


  return (
    <>
    {
        isNavbarDown &&
    
        (navItem.subMenu ? 
        <div className={styles.Menu}>
            <Link key={`link_${idx}`} href={navItem.link}>
                <div 
                    className={styles.navbarElem} 
                    onMouseOver={()=> setOnMenu(true)} 
                    onMouseLeave={()=> setOnMenu(false)}>        
                    <span className={styles.title}>{navItem.name}</span>
                    <div 
                        className={styles.dropDown} 
                        onMouseOver={()=> setOnSubMenu(true)}
                        onMouseLeave={()=> setOnSubMenu(false)}>
                        {(onMenu || onSubMenu) && navItem.subMenu.map((item, idx)=>{
                            return(
                                <Link key={idx} href={item.link}>
                                    <div className={styles.subMenu}>{item.name}{" "}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Link> 
            
        </div>
        : 
        
        <div className={styles.Menu}>
            <Link key={`link_${idx}`} href={navItem.link}>
                <div className={styles.navbarElem}><span className={styles.title}>{navItem.name}</span></div>
            </Link>
        </div>)
    }
    {
        !isNavbarDown &&
        (
            navItem.subMenu ? 
            (
                <div className={styles.Menu} >
                    {/* <Link key={`link_${idx}`} href={navItem.link}> */}
                    <div className={styles.navbarElem} onClick={()=>setOnSubMenu(!onSubMenu)}>
                        <span className={styles.title}>
                            {!onSubMenu ? 
                            <>
                                {navItem.name} <FontAwesomeIcon icon={faCaretRight}/>
                            </> : 
                            <>
                                {navItem.name} <FontAwesomeIcon icon={faCaretDown}/>
                            </>}
                        </span>
                    </div>
                    <div className={styles.dropDown}>
                        {onSubMenu && navItem.subMenu.map((item, idx)=>{
                                return(
                                    <Link key={idx} href={item.link} onClick={linkClick}>
                                        <div className={styles.subMenu}>{item.name}{" "}</div>
                                    </Link>
                                )
                        })}
                    </div>
                    {/* </Link> */}
                </div>
            ) 
            : 
            (
                <div className={styles.Menu} >
                    <Link key={`link_${idx}`} href={navItem.link} onClick={linkClick}>
                        <div className={styles.navbarElem}>
                            <span className={styles.title}>
                                {navItem.name}
                            </span>
                        </div>
                    </Link>
                </div>
            )
        )
    }
    </>
  )
}

export default NavbarItems
