
// Image files
import Images from "../../images/Images";
// Styled Components
import { HeaderBarUserHome, HomeHeader, WelcomeHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

    const username = localStorage.getItem("username");
    
    return (
        <HeaderBarUserHome>
            <HomeHeader cursor={ "false" }>
                <img
                    src={ Images.Home }
                    alt="Home Icon">
                </img>
                <HeaderHeading cursor={ "false" }>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Welcome { username }!</WelcomeHeading>
            </WelcomeHeader>
        </HeaderBarUserHome>
    );
};

export default Header;