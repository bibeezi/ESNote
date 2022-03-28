
import { TemplateContainerEditNote, TemplateEditNote } from "../Common/Template.style"
import { TextArea } from "../Common/Section.style";
import { useEffect } from "react";

const Note = ({ template }) => {

    const handleChange = () => {
        
    }

    const showTextAreas = (template) => {
        if(Object.keys(template).length !== 0) 
            return template.sections.map((section) => (
                <TextArea 
                    key={ section._id }
                    values={ section }
                    handleChange={ handleChange }>
                </TextArea>
            ));
    }

    useEffect(() => {
        showTextAreas(template);
    }, [template])

    return (
        <TemplateContainerEditNote>
            { Object.keys(template).length !== 0 &&

                <TemplateEditNote>

                    { showTextAreas(template) }

                </TemplateEditNote>
                
            }
        </TemplateContainerEditNote>
    );
}
 
export default Note;