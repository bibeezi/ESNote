import Images from "../../images/Images";
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
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
                <WelcomeHeading>Edit Note</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Format Mode" src={ Images.OffSwitch }></img>
                <img alt="Toggle as Favourite" src={ Images.NotFavourited }></img>
                <img alt="Settings" src={ Images.Setting }></img>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeader>
        </HeaderBar>
    );
}
 
export default Header;