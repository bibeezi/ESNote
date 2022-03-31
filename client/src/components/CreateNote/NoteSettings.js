import Images from "../../images/Images";
import { SectionsGrid } from "./CreateNote.style";
import { StyledSettings } from "../Common/Content.style";
import { NoteTemplateForm } from "../Common/Form.style";
import { SectionHeader } from "../Common/Header.style";
import { SectionHeading } from "../Common/Heading.style";

const NoteSettings = ({ 
    sectionSettings,
    addSection
}) => {

    return ( 
        <StyledSettings>
            <NoteTemplateForm>
                <SectionHeader>
                    <SectionHeading>Add Section</SectionHeading>
                    <img onClick={ addSection } src={ Images.Plus } alt="plus"></img>
                </SectionHeader>

                <SectionsGrid>
                    { sectionSettings }
                </SectionsGrid>

                {/* <AddtoNotebookContainer /> */}

                {/* <TagsContainer />

                <SpacedRepetitionContainer /> */}
            </NoteTemplateForm>
        </StyledSettings>
    );
}
 
export default NoteSettings;