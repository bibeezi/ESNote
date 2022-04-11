// React Hooks
import { useEffect, useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// Styled Components
import { ReadSections, TextArea } from "../Common/Section.style";
import { TemplateContainer, TemplateEditNote, TemplateReadNote } from "../Common/Template.style";

// props passed from 'ReadNote.js'
const Note = ({ 
    textareaRef,
    note, 
    setNote,
    handleChange,
    page
}) => {

    // Holds the note template's details
    const [template, setTemplate] = useState({});
    
    // Runs when rendered
    useEffect(() => {

        // Wait for 50 milliseconds
        setTimeout(() => {

            // Gather data to send to the server
            const payload = {
                noteID: localStorage.getItem("clickedNoteID")
            }
    
            // Get the current note's details from MongoDB
            axios.get('/note/getNote', {
                params: {
                    data: payload
                }
            }).then((res) => {

                // Set the note details in note state
                setNote(res.data);
 
                // Get the template for the current note
                getTemplate(res.data.template);

            }).catch((error) => {
                console.log("ERROR in ReadNote Note - /note/getNote", error);
            });

            // Get the template for the current note
            const getTemplate = (templateID) => {

                // Gather data to send to the server
                const payload = {
                    templateID: templateID
                }
        
                // Get the template's details from MongoDB
                axios.get('/template/getTemplate', {
                    params: {
                        data: payload
                    }
                }).then((res) => {

                    // Set the template details in template state
                    setTemplate(res.data);

                }).catch((error) => {
                    console.log("ERROR in Note - /getTemplate", error);
                });
            }

        }, 50);

    }, [setNote]);

    // Displays the sections into the TemplateReadNote component
    const showSections = (template) => {
        // Displays the template only when it exists
        if ( template.sections ) {
            return template.sections.map((section, index) => (
                note.body[index].sectionID === section._id ?
                    <ReadSections 
                        key={ section._id } 
                        section={ section }>
                        { note.body[index].content }
                    </ReadSections> 
                :
                    null
            ));
        }
    }

    // Displays the text areas into the TemplateEditNote component
    const showTextAreas = (template) => {
        // Displays the template only when it exists
        if (Object.keys(template).length !== 0 ) {
            // Return the Textarea components to render
            return template.sections.map((section, index) => (
                <TextArea 
                    key={ section._id }
                    name={ section._id }
                    values={ section }
                    defaultValue={ 
                        note.body[index].sectionID === section._id ? 
                            note.body[index].content
                        : 
                            null 
                    }
                    onChange={ handleChange }>
                </TextArea>
            ));
        }
    }
 
    return (
        <TemplateContainer>

            { page === "Edit Note" ?
                <TemplateEditNote ref={ textareaRef }>

                    {/* Displays textareas from the template */}   
                    { showTextAreas(template) }

                </TemplateEditNote>
            :
                <TemplateReadNote>

                    {/* Displays sections with the corresponding 
                        note content from the template */}   
                    { showSections(template) }

                </TemplateReadNote>
            }

        </TemplateContainer>            
    );
}

export default Note;