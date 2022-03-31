import Images from "../../images/Images";
import { HeaderBarUserHome, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

    const username = localStorage.getItem("username");

    return (
        <HeaderBarUserHome>
            <HomeHeader>
                <img
                    src={ Images.Home }
                    alt="Home Icon">
                </img>
                <HeaderHeading>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Welcome { username }!</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Spaced Repetition" src={ Images.Exclamation }></img>
                <img alt="Tags" src={ Images.Tag }></img>
                <img alt="User Settings" src={ Images.User }></img>
                <img alt="Settings" src={ Images.Setting }></img>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeader>
        </HeaderBarUserHome>
    );
};

export default Header;