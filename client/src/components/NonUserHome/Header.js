import { HeaderBar, HomeHeader } from "../Common/Header.style";
import { HeaderHeading } from "../Common/Heading.style";

const Header = ({ homeImage }) => {

    return (
        <HeaderBar>

            <HomeHeader>
                <img
                    src={ homeImage }
                    alt="Home Icon"
                    cursor={ "false" }>
                </img>
                
                <HeaderHeading cursor={ "false" }>ESNote</HeaderHeading>
            </HomeHeader>

        </HeaderBar>
    );
};

export default Header;