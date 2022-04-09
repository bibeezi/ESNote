// Styled Components
import { HeaderBar, HomeHeader } from "../Common/Header.style";
import { HeaderHeading } from "../Common/Heading.style";

// props passed from 'NonUserHome.js'
const Header = ({ homeImage }) => {

    return (
        <HeaderBar>

            {/* uses default cursor on hover of image */}
            <HomeHeader cursor={ "false" }>
                <img
                    src={ homeImage }
                    alt="Home Icon">
                </img>

                {/* uses default cursor on hover of ESNote */}
                <HeaderHeading cursor={ "false" }>ESNote</HeaderHeading>
            </HomeHeader>

        </HeaderBar>
    );
};

export default Header;