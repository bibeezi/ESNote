import { CommonHeader } from "../Common/Header.style";
import { HeaderHeading } from "../Common/Heading.style";

const Header = ({ homeImage }) => {
    return (
        <CommonHeader>
            <div id="home-div">
                <img
                    src={ homeImage }
                    alt="Home Icon">
                </img>
                <HeaderHeading>ESNote</HeaderHeading>
            </div>
        </CommonHeader>
    );
};

export default Header;