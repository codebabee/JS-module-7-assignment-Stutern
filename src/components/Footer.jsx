import BottomLeftMenu from "./BottomLeftMenu";
import BottomRightMenu from "./BottomRightMenu";
import FooterText from "./FooterText";
import Location from "./Location";

const Footer = () => {
    return (
        <div>
            <div>
                <Location />
                <hr />
                <FooterText />
                <BottomLeftMenu />
                <BottomRightMenu />
            </div>
        </div>
       
    )
   };
   
   export default Footer;