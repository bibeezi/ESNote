import { HeaderBar, HomeHeader } from "../Common/Header.style";
import { HeaderHeading } from "../Common/Heading.style";

const Header = ({ homeImage }) => {
    return (
        <HeaderBar>
            <HomeHeader>
                <img
                    src={ homeImage }
                    alt="Home Icon">
                </img>
                <HeaderHeading>ESNote</HeaderHeading>
            </HomeHeader>
        </HeaderBar>
    );
};

export default Header;