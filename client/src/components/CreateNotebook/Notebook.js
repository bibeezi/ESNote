// Styled Components
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { LongSettingInput } from "../Common/Inputs.style";

// props passed from 'CreateNotebook.js'
const Notebook = ({ handleChange }) => {
    return (
        <>
        <SettingHeader>
            <SettingHeading>Title and Colour</SettingHeading>
        </SettingHeader>

        <SettingsGrid>

            <SettingContainer>

                <label>
                    <LongSettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="notebookTitle"
                        type="text"
                        placeholder="Title"> 
                    </LongSettingInput>
                </label>

                <label>
                    <LongSettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="notebookHex"
                        type="text"
                        placeholder="Colour or Hex"> 
                    </LongSettingInput>
                </label>

            </SettingContainer>

        </SettingsGrid>
        </>
    );
}
 
export default Notebook;