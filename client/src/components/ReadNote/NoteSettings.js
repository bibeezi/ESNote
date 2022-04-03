import { CloseButton } from "../Common/Close.style";
import { StyledNoteSettingsForm } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading } from "../Common/Heading.style";

const NoteSettings = ({ handleSettings }) => {
    return (
        <StyledNoteSettingsForm>
            <CloseButton onMouseDown={ handleSettings }></CloseButton>
            <FormHeadingModal>Note Settings</FormHeadingModal>

            <SettingHeader>
                <SettingHeading>Delete Note</SettingHeading>            
            </SettingHeader>
        </StyledNoteSettingsForm>
    );
}
 
export default NoteSettings;