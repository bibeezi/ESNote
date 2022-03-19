import { SubheaderBar } from "../Common/Header.style";
import { WelcomeHeading } from "../Common/Heading.style";
import { StyledNotebooks } from "./Notebooks.style";

const Notebooks = () => {
    return (
        <StyledNotebooks>
            <SubheaderBar>
                <WelcomeHeading>Notebooks</WelcomeHeading>
            </SubheaderBar>

            Notebooks
        </StyledNotebooks>
    );
}
 
export default Notebooks;