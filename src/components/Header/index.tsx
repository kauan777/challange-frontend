import React, { useRef, useState } from 'react';
import { List, X } from 'phosphor-react';
import { HeaderContainer } from './styles';

function Header() {

    const [active, setMode] = useState(false)
    const [activeY, setActiveY] = useState("")
    const header: any = useRef();

    function changeHeaderWhenScroll(){
      
        const height: any = header?.current?.clientHeight;
        
        if(scrollY >= height){
    
            header.current.classList.add("activeY");
        }else{
            header.current.classList.remove("activeY");
        }
        }
            window.addEventListener('scroll', changeHeaderWhenScroll)

  return (
    <HeaderContainer 
    ref={header} 
    className={active ? `header-open header` : `header ${activeY}`}>
   <a href='#'><span className='logo'>LOGO</span></a> 
        <nav className={active ? 'nav-open' : ''}>
        <ul className={active ? 'nav-open' : ''}>
           <li onClick={()=> setMode(false)}><a href='/'>Home</a></li>
           <li onClick={()=> setMode(false)}><a href='/'>Services</a></li>
           <li onClick={()=> setMode(false)}><a href='/'>About</a></li>
           <li onClick={()=> setMode(false)}><a href='/'>Contact</a></li>
        </ul>
        </nav>
        <List  
            className={active ? 'icon-menu menu-open' : 'icon-menu'} 
            color='#272727' 
            size={30} 
            onClick={() => setMode(!active)}
        />
        <X 
            className={active ? 'icon-close close-open' : 'icon-close'} 
            color='#272727' 
            size={30} 
            onClick={() => setMode(!active)}
        />
</HeaderContainer>
  )
}

export default Header