
// Image files
import Images from "../../images/Images";

// Styled Components
import { StyledSettings } from "../Common/Content.style";
import { TemplateForm, SettingsGrid } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";

// props passed from 'CreateNote.js'
const NoteSettings = ({ sectionSettings, addSection }) => {

    return ( 
        <StyledSettings>
            <TemplateForm>
                
                <SettingHeader>
                    <SettingHeading>Add Section</SettingHeading>
                    <img onClick={ addSection } src={ Images.Plus } alt="plus"></img>
                </SettingHeader>

                <SettingsGrid>
                    {/* Display each of the settings components */}
                    { sectionSettings }
                </SettingsGrid>

            </TemplateForm>
        </StyledSettings>
    );
}
 
export default NoteSettings;