
import { SettingsGrid, SettingContainer } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";
import { LongSettingInput } from "../Common/Inputs.style";

const Title = ({ handleChange }) => {
    return (
        <>
        <SettingHeader>
            <SettingHeading>Title</SettingHeading>
        </SettingHeader>

        <SettingsGrid>
            <SettingContainer>
                <label>
                    <LongSettingInput 
                        onChange={ (e) => handleChange(e) }
                        name="title"
                        type="text"
                        placeholder="Title"> 
                    </LongSettingInput>
                </label>
            </SettingContainer>
        </SettingsGrid>
        </>
    );
}
 
export default Title;