import logo from '/IMAGE.svg'
import './Header.css'  

export default function Header (){


    return (
        <header>
       
        <img src={logo} className="logo" alt="logo" />
  
        <span>
          <nav>
           <a href="ссылка">Home</a>
           <a href="ссылка">Episodes</a>
           <a href="ссылка">About</a>
           <a href="ссылка">Contact</a>
           </nav>
        </span>

      </header>
     
    )
}