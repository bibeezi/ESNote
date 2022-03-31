
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

const AddNote = () => {
    return (
        <>
        <SettingHeader>
            <SettingHeading>Add Notes</SettingHeading>
        </SettingHeader>

        <SettingsGrid>
            <SettingContainer>
                <label>
                    <SettingInput 
                        // onChange={ (e) => handleChange(e) }
                        name="note"
                        type="text"
                        placeholder="Search Note"> 
                    </SettingInput>
                </label>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default AddNote;