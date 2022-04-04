import { HeaderBar, HomeHeader } from "../Common/Header.style";
import { HeaderHeading } from "../Common/Heading.style";

const Header = ({ homeImage }) => {

    const goHome = () => {
        window.location.reload(true);
    }

    return (
        <HeaderBar>

            <HomeHeader>
                <img
                    src={ homeImage }
                    alt="Home Icon"
                    onClick={ goHome }>
                </img>
                
                <HeaderHeading onClick={ goHome }>ESNote</HeaderHeading>
            </HomeHeader>

        </HeaderBar>
    );
};

export default Header;