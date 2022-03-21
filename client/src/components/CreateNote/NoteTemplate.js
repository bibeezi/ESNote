import { useState } from "react";

import Header from "./Header";
import NotePreview from "./NotePreview";
import NoteSettings from "./NoteSettings";
import Section from "./Sections";
import { CreateNoteContent } from "../Common/Content.style";

const NoteTemplate = () => {

    const [sections, setSections] = useState([
        <Section 
            key="1" 
            id="1" 
            handleChange={ handleChange }>
        </Section>
    ]);
    const [sectionCounter, setSectionCounter] = useState(2);

    const addSection = () => {
        setSections((prevState) => [
            ...prevState, 
            <Section 
                key={ sectionCounter } 
                id={ sectionCounter } 
                handleChange={ handleChange }>
            </Section>
            ]);
        setSectionCounter((prevState) => prevState + 1);
    }

    const handleChange = () => {

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