// React Hooks
import { useEffect, useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// Styled Components
import { NotebookTitleContainer } from "../Common/Header.style";
import { ReadNotebookTitle } from "../Common/Heading.style";
import { TemplateReadNotebook, NoteContainer } from "../Common/Template.style";
import { ReadSections } from "../Common/Section.style";

// props passed from 'ReadNotebook.js'
const Notes = ({ note, notebookLength }) => {

    // Holds the note template's details
    const [template, setTemplate] = useState({});

    // Runs when rendered
    useEffect(() => {
        
        // Gather data to send to the server
        const payload = {
            templateID: note.template
        }

        // Get the template's details from MongoDB
        axios.get('/template/getTemplate', {
            params: {
                data: payload
            }
        })
        .then((res) => {

            // Set the template details in template state
            setTemplate(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Note - /getTemplate", error);
        });
    }, [note.template])

    // Displays the note into the TemplateReadNotebook component
    const showNote = (sections) => {
        // Displays the template's sections only when it exists
        if ( sections ) {
            return sections.map((section, index) => (
                section._id === note.body[index].sectionID ? 
                    <ReadSections 
                        key={ section._id } 
                        section={ section }>
                        { note.body[index].content }
                    </ReadSections> 
                :
                    null
            ));
        }
    };

    return (
        <NoteContainer>

            <NotebookTitleContainer>
                <ReadNotebookTitle notebookLength={ notebookLength }>{ note.title }</ReadNotebookTitle>
            </NotebookTitleContainer>

            <TemplateReadNotebook notebookLength={ notebookLength }>

                {/* Displays sections with the corresponding 
                    note content from the template */}   
                { showNote(template.sections) }

            </TemplateReadNotebook>

        </NoteContainer>            
    );
}
 
export default Notes;