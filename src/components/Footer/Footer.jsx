import BottomLeftMenu from "./BottomLeftMenu";
import BottomRightMenu from "./BottomRightMenu";
import FooterText from "./FooterText";
import Location from "./Location";
import './Footer.css';


const Footer = () => {
    return (
        
            <div className="footer-container">
                <Location />
                <hr />
                <FooterText />
                <div className="bottom-menu">
                <BottomLeftMenu />
                <BottomRightMenu />
                </div>
            </div>
        
       
    )
   };
   
   export default Footer;