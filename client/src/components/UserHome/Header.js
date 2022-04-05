
import Images from "../../images/Images";
import { HeaderBarUserHome, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

    const username = localStorage.getItem("username");
    
    return (
        <HeaderBarUserHome>
            <HomeHeader >
                <img
                    src={ Images.Home }
                    alt="Home Icon"
                    cursor={ "false" }>
                </img>
                <HeaderHeading cursor={ "false" }>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Welcome { username }!</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
            </IconsHeader>
        </HeaderBarUserHome>
    );
};

export default Header;