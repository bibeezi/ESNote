import { useState } from "react";

import Header from "./Header";
import NotePreview from "./NotePreview";
import NoteSettings from "./NoteSettings";
import SectionSetting from "./SectionSetting";
import { CreateNoteContent } from "../Common/Content.style";

const CreateNote = () => {

    const handleChange = ({ target }) => {
        const { name, id, value } = target;

        var copySectionValues = sectionValues;

        switch(name) {
            case "x":
                copySectionValues[parseInt(id)-1].values.x = parseInt(value);
                break;
            case "y":
                copySectionValues[parseInt(id)-1].values.y = parseInt(value);
                break;
            case "h":
                copySectionValues[parseInt(id)-1].values.h = parseInt(value);
                break;
            case "w":
                copySectionValues[parseInt(id)-1].values.w = parseInt(value);
                break;
            default:
                console.log("input did not update properly");
        }
        
        setSectionValues(prevState => prevState.map((sectionValues) => {
            return sectionValues.id === id ? Object.assign(sectionValues, copySectionValues) : sectionValues
        }));
    }

    const handleDelete = ({ target }) => {
        const { id } = target.parentNode.parentNode;

        var filteredSettings = sectionSettings.filter((component) => component.props.id !== id );

        console.log(filteredSettings);

    }

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
    const sectionSettings = useState([
        <SectionSetting 
            key="1" 
            id="1" 
            handleChange={ handleChange }
            handleDelete={ handleDelete }>
        </SectionSetting>
    ]);
    const [sectionCounter, setSectionCounter] = useState(2);


    const addSection = () => {
        sectionSettings.push(
            <SectionSetting 
                key={ sectionCounter.toString() } 
                id={ sectionCounter.toString() } 
                handleChange={ handleChange }
                handleDelete={ handleDelete }>
            </SectionSetting>
        );

        sectionValues.push({
            id: sectionCounter.toString(),
            values: {
                x: 0,
                y: 0,
                h: 0,
                w: 0
            }
        }); 

        setSectionCounter((prevState) => prevState + 1);
    }
    
    return (
        <div>
            <Header />

            <CreateNoteContent>
                <NotePreview 
                    sectionValues={ sectionValues }>
                </NotePreview>

                <NoteSettings
                    sectionSettings={ sectionSettings }
                    addSection={ addSection }>
                </NoteSettings>
            </CreateNoteContent>
        </div>
    );
}
 
export default CreateNote;