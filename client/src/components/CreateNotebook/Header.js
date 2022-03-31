import Images from "../../images/Images";

import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeaderCreate } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

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
                <WelcomeHeading>Create Notebook Template</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeaderCreate>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeaderCreate>
        </HeaderBar>
    );
}
 
export default Header;
