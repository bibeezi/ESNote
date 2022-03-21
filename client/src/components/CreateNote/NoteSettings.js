import Images from "../../images/Images";
import { 
    StyledNoteSettings,
    SectionsGrid, 
    AddtoNotebookContainer, 
    TagsContainer, 
    SpacedRepetitionContainer, 
    IndentContainer 
} from "./CreateNote.style";
import { NoteTemplateForm } from "../Common/Form.style";
import { SectionHeader } from "../Common/Header.style";
import { SectionHeading } from "../Common/Heading.style";

const NoteSettings = ({ 
    sections,
    addSection
}) => {

    return ( 
        <StyledNoteSettings>
            <NoteTemplateForm>
                <SectionHeader>
                    <SectionHeading>Add Section</SectionHeading>
                    <img onClick={ addSection } src={ Images.Plus } alt="plus"></img>
                </SectionHeader>
                <SectionsGrid>
                    { sections }
                </SectionsGrid>

                {/* <AddtoNotebookContainer />

                <TagsContainer />

                <SpacedRepetitionContainer />
                    
                <IndentContainer /> */}
            </NoteTemplateForm>
        </StyledNoteSettings>
    );
}
 
export default NoteSettings;