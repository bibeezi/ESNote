import Images from "../../images/Images";

import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = ({ notebook, handleSettings }) => {

    return (
        <HeaderBar>
            <HomeHeader>   
                <img
                    src={ Images.Home }
                    alt="Home Icon">
                </img>
                <HeaderHeading>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Read { notebook.title ? notebook.title : "Notebook" } </WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Toggle as Favourite" src={ Images.NotFavourited }></img>
                <img alt="Settings" src={ Images.Setting } onClick={ handleSettings }></img>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeader>
        </HeaderBar>
    );
}
 
export default Header;
