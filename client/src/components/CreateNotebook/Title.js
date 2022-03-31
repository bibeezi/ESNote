
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { SettingInput } from "../Common/Inputs.style";

const Title = ({ handleChange }) => {
    return (
        <>
        <SettingHeader>
            <SettingHeading>Title</SettingHeading>
        </SettingHeader>

        <SettingsGrid>
            <SettingContainer>
                <label>
                    <SettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="title"
                        type="text"
                        placeholder="Title"> 
                    </SettingInput>
                </label>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default Title;