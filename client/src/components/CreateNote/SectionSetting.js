import Images from "../../images/Images";
import { StyledSectionSettings } from "./CreateNote.style";
import { SectionLabel } from "../Common/Label.style";
import { SectionInput } from "../Common/Inputs.style";
import { SectionTitle } from "../Common/Heading.style";
import { SectionSettingHeader } from "../Common/Header.style";

const SectionSetting = ({ id, handleChange, handleDelete }) => {
    return (
        <StyledSectionSettings id={ id }>

            <SectionSettingHeader>
                <SectionTitle>Section { id }</SectionTitle>
                <img alt="delete section" src={ Images.Delete } onClick={ (e) => handleDelete(e) }/>
            </SectionSettingHeader>

            <SectionLabel>
                <SectionInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="x"
                    type="number"
                    placeholder="X"> 
                </SectionInput>
            </SectionLabel>
            
            <SectionLabel>
                <SectionInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="y"
                    type="number"
                    placeholder="Y">
                </SectionInput>
            </SectionLabel>

            <SectionLabel>
                <SectionInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="h"
                    type="number"
                    placeholder="H">
                </SectionInput>
            </SectionLabel>

            <SectionLabel>
                <SectionInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="w"
                    type="number"
                    placeholder="W">
                </SectionInput>
            </SectionLabel>
        </StyledSectionSettings>
    );
}
 
export default SectionSetting;