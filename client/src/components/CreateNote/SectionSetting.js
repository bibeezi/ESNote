import Images from "../../images/Images";
import { SettingContainer } from "../Common/Form.style";
import { SettingInput } from "../Common/Inputs.style";
import { SectionTitle } from "../Common/Heading.style";
import { SubSettingHeader } from "../Common/Header.style";

const SectionSetting = ({ id, handleChange, handleDelete }) => {
    return (
        <SettingContainer id={ id }>

            <SubSettingHeader>
                <SectionTitle>Section { id }</SectionTitle>
                <img alt="delete section" src={ Images.Delete } onClick={ (e) => handleDelete(e) }/>
            </SubSettingHeader>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="x"
                    type="number"
                    placeholder="X"> 
                </SettingInput>
            </label>
            
            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="y"
                    type="number"
                    placeholder="Y">
                </SettingInput>
            </label>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="h"
                    type="number"
                    placeholder="H">
                </SettingInput>
            </label>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="w"
                    type="number"
                    placeholder="W">
                </SettingInput>
            </label>
        </SettingContainer>
    );
}
 
export default SectionSetting;