import { StyledSection } from "./CreateNote.style";
import { SectionLabel } from "../Common/Label.style";
import { SectionInput } from "../Common/Inputs.style";
import { SectionTitle } from "../Common/Heading.style";

const Section = ({ id, handleChange }) => {
    return (
        <StyledSection>
            <SectionTitle>Section { id }</SectionTitle>
            <SectionLabel>
                <SectionInput onChange={ handleChange } placeholder="X"></SectionInput>
            </SectionLabel>
            
            <SectionLabel>
                <SectionInput onChange={ handleChange } placeholder="Y"></SectionInput>
            </SectionLabel>

            <SectionLabel>
                <SectionInput onChange={ handleChange } placeholder="H"></SectionInput>
            </SectionLabel>

            <SectionLabel>
                <SectionInput onChange={ handleChange } placeholder="W"></SectionInput>
            </SectionLabel>
        </StyledSection>
    );
}
 
export default Section;