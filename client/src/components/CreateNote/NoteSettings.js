
import Images from "../../images/Images";

import { StyledSettings } from "../Common/Content.style";
import { TemplateForm, SettingsGrid } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { SettingHeading } from "../Common/Heading.style";

const NoteSettings = ({ 
    sectionSettings,
    addSection
}) => {

    return ( 
        <StyledSettings>
            <TemplateForm>
                <SettingHeader>
                    <SettingHeading>Add Section</SettingHeading>
                    <img onClick={ addSection } src={ Images.Plus } alt="plus"></img>
                </SettingHeader>

                <SettingsGrid>
                    { sectionSettings }
                </SettingsGrid>

                {/* <AddtoNotebookContainer /> */}

                {/* <TagsContainer />

                <SpacedRepetitionContainer /> */}
            </TemplateForm>
        </StyledSettings>
    );
}
 
export default NoteSettings;