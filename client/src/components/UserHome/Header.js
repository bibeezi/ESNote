import Images from "../../images/Images";
import { HeaderBarUserHome, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

    const username = localStorage.getItem("username");

    const goHome = () => {
        window.location.reload(true);
    }
    return (
        <HeaderBarUserHome>
            <HomeHeader>
                <img
                    src={ Images.Home }
                    alt="Home Icon"
                    onClick={ goHome }>
                </img>
                <HeaderHeading onClick={ goHome }>ESNote</HeaderHeading>
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