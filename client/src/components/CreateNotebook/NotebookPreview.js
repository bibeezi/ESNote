
import { StyledPreview } from "../Common/Content.style";
import { TemplateCreateNotebook } from "../Common/Template.style";
import { NextButton } from "../Common/Button.style";
import { Strap, Bookmark } from "../Common/Section.style";

const NotebookPreview = ({ strap, bookmark, colour }) => {

    return (
        <StyledPreview>
            <div></div>
            
            <TemplateCreateNotebook page="createNotebook" colour={ colour }>
                <Strap strap={ strap }></Strap>
                <Bookmark bookmark={ bookmark }></Bookmark>
            </TemplateCreateNotebook>
            
            <NextButton
                // onClick={ (e) => { openEditNote(); handleNext(e); } }
                >
                Next
            </NextButton>

            {/* { editNote ? <Navigate to='/edit-note' /> : null } */}
        </StyledPreview>
    );
}
 
export default NotebookPreview;