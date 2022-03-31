
import { StyledPreview } from "../Common/Content.style";
import { Template } from "../Common/Template.style";
import { NextButton } from "../Common/Button.style";

const NotebookPreview = () => {
    return (
        <StyledPreview>
            <div></div>

            <Template page="createNotebook"/>
            
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