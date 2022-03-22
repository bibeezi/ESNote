import { useState } from "react";

import Header from "./Header";
import NotePreview from "./NotePreview";
import NoteSettings from "./NoteSettings";
import Section from "./Sections";
import { CreateNoteContent } from "../Common/Content.style";

const NoteTemplate = () => {

    const [sectionValues, setSectionValues] = useState([
        {
            id: "1",
            values: {
                x: 0,
                y: 0,
                h: 0,
                w: 0
            }
        }
    ]);

    const handleChange = ({ target }) => {
        const { name, id, value } = target;
        
        switch(name) {
            case "x":
                // setSectionValues((prevState) => ({
                //     sectionValues: prevState.
                // }));
                break;
            case "y":
                break;
            case "h":
                break;
            case "w":
                break;
            default:
                console.log("input did not update properly");
        }
        
        console.log(sectionValues);
    }

    const [sections, setSections] = useState([
        <Section 
            key="1" 
            id="1" 
            handleChange={ (e) => handleChange(e) }>
        </Section>
    ]);
    const [sectionCounter, setSectionCounter] = useState(2);

    const addSection = () => {
        setSections((prevState) => [
            ...prevState, 
            <Section 
                key={ sectionCounter } 
                id={ sectionCounter } 
                handleChange={ (e) => handleChange(e) }>
            </Section>
            ]);

        setSectionValues((prevState) => [
            ...prevState,
            {
                id: sectionCounter.toString(),
                values: {
                    x: 0,
                    y: 0,
                    h: 0,
                    w: 0
                }
            }
        ]);

        setSectionCounter((prevState) => prevState + 1);
    }
    
    return (
        <div>
            <Header />

            <CreateNoteContent>
                <NotePreview></NotePreview>
                <NoteSettings
                    sections={ sections }
                    addSection={ addSection }>
                </NoteSettings>
            </CreateNoteContent>
        </div>
    );
}
 
export default NoteTemplate;