
import LogoComponent from "./LogoComponent";
import SearchBar from "./SearchBar";
import ButtonElement from "./Button";
import CelebText from "./CelebrationText";
import LanguageLink from "./LanguageLink";

const SearchSection = () => {
    return (
        <div>
             <div>
            <LogoComponent />
            <SearchBar />
            <ButtonElement name={"Google Search"} />
            <ButtonElement name={" I'm Feeling Lucky"} />
            <CelebText />
            <p>Google offered in:</p>
            <LanguageLink name={"Hausa"}/>
            <LanguageLink name={"Igbo"} />
            <LanguageLink name={"Ede Yoruba"} />
            <LanguageLink name={"Pidgin"} />
            </div>
        </div>
    )
   };
   
   export default SearchSection;