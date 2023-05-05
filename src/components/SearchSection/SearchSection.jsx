
import LogoComponent from "./Logo/LogoComponent";
import SearchBar from "./SearchBar/SearchBar";
import ButtonElement from "./ButtonElement/Button";
import CelebText from "./CelebrationText";
import LanguageLink from "./LanguageLink";
import './SearchSection.css'

const SearchSection = () => {
    return (
        <div>
             <div className="section-container">
            <LogoComponent />
            <SearchBar />
            <div className="button-container">
            <ButtonElement name={"Google Search"} />
            <ButtonElement name={" I'm Feeling Lucky"} />
            </div>
            
            <CelebText />
            <div className="language-container">
            <span>Google offered in:</span>
            <LanguageLink name={"Hausa"}/>
            <LanguageLink name={"Igbo"} />
            <LanguageLink name={"Ede Yoruba"} />
            <LanguageLink name={"Pidgin"} />
            </div>
            </div>
        </div>
    )
   };
   
   export default SearchSection;