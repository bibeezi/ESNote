// Styled Components
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { CheckSettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

// props passed from 'CreateNotebook.js'
const Notebook = ({ handleChange }) => {
    return (
        <>
        <SettingHeader>
            <CheckSettingHeading>Title and Colour</CheckSettingHeading>
        </SettingHeader>

        <SettingsGrid>

            <SettingContainer>

                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="notebookTitle"
                        type="text"
                        placeholder="Title"> 
                    </SettingInput>
                </label>

                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="notebookHex"
                        type="text"
                        placeholder="Colour or Hex"> 
                    </SettingInput>
                </label>

            </SettingContainer>

        </SettingsGrid>
        </>
    );
}
 
export default Notebook;