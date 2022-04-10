// Image files
import Images from "../../images/Images";

// Styled Components
import { SettingContainer } from "../Common/Form.style";
import { SettingInput } from "../Common/Inputs.style";
import { SectionTitle } from "../Common/Heading.style";
import { SubSettingHeader } from "../Common/Header.style";

// props passed from 'CreateNote.js'
const SectionSetting = ({ id, handleChange, handleDelete, colour }) => {
    
    return (
        <SettingContainer id={ id }>

            <SubSettingHeader>
                <SectionTitle colour={ colour }>Section { id }</SectionTitle>
                <img alt="delete section" src={ Images.Delete } onClick={ (e) => handleDelete(e) }/>
            </SubSettingHeader>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="x"
                    type="number"
                    placeholder="x co-ordinate"
                    min={ 1 }
                    max={ 4 }> 
                </SettingInput>
            </label>
            
            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="y"
                    type="number"
                    placeholder="y co-ordinate"
                    min={ 1 }
                    max={ 4 }>
                </SettingInput>
            </label>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="h"
                    type="number"
                    placeholder="Height of section"
                    min={ 1 }
                    max={ 4 }>
                </SettingInput>
            </label>

            <label>
                <SettingInput 
                    onChange={ (e) => handleChange(e) } 
                    id={ id }
                    name="w"
                    type="number"
                    placeholder="Width of section"
                    min={ 1 }
                    max={ 4 }>
                </SettingInput>
            </label>
        </SettingContainer>
    );
}
 
export default SectionSetting;