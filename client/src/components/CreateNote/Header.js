import Images from "../../images/Images";
import { HeaderBar } from "../Common/Header.style";
import { HomeHeader, WelcomeHeader, IconsHeaderCreateNote } from "../Common/Header.style";
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
                <WelcomeHeading>Create Note Template</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeaderCreateNote>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeaderCreateNote>
        </HeaderBar>
    );
};

export default Header;