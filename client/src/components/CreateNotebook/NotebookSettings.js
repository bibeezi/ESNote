
import Title from "./Title"
import AddNote from "./AddNote";
import Bookmark from "./Bookmark";
import Strap from "./Strap";
import { StyledSettings } from "../Common/Content.style";
import { TemplateForm } from "../Common/Form.style";


const NotebookSettings = ({ 
    handleChange, 
    bookmark,
    handleBookmark, 
    strap,
    handleStrap
}) => {

    return (
        <StyledSettings>
            <TemplateForm>
                <Title handleChange={ handleChange } />

                <AddNote />

                <Bookmark 
                    handleChange={ handleChange }
                    bookmark={ bookmark }
                    handleBookmark={ handleBookmark }>
                </Bookmark>

                <Strap 
                    handleChange={ handleChange }
                    strap={ strap }
                    handleStrap={ handleStrap }>
                </Strap>
            </TemplateForm>
        </StyledSettings>
    );
}
 
export default NotebookSettings;