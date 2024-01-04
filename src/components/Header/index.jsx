import { HeaderComponent } from "./Header.style";
import { SiAlchemy } from "react-icons/si";

function Header() {
  return (
    <HeaderComponent>
        <nav>
            <SiAlchemy size={40} color="#109ef0"/>
            <h1>ISLabs</h1>
        </nav>
    </HeaderComponent>
  )
}

export default Header