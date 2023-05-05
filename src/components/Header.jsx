import AppsLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";
import MenuItem from "./Footer/MenuItem";

const Header = () => {
 return (
    <div style={{display: "flex", justifyContent: "flex-end",}}>
        <div style={{display: "flex", gap: "4px"}}>
        <MenuItem title={"Gmail"}/> 
        {/* assigns a property of props props.title="Gmail" */}
        <MenuItem title={"Images"} />
        <AppsLauncherIcon />
        <Avatar />
        </div>
       
    </div>
 )
};

export default Header;