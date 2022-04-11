
// Child Components
import Notebook from "./Notebook";
import AddNote from "./AddNote";
import Bookmark from "./Bookmark";
import Strap from "./Strap";
// Styled Components
import { StyledSettings } from "../Common/Content.style";
import { TemplateForm } from "../Common/Form.style";

// props passed from 'CreateNotebook.js'
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
                
                <Notebook handleChange={ handleChange } />

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