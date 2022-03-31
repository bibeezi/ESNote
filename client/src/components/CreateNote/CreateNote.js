import { useState } from "react";

import Header from "./Header";
import NotePreview from "./NotePreview";
import NoteSettings from "./NoteSettings";
import SectionSetting from "./SectionSetting";
import { CreateContent } from "../Common/Content.style";

const CreateNote = () => {

    const handleChange = ({ target }) => {
        const { name, id, value } = target;

        var copySectionValues = sectionValues;

        switch(name) {
            case "x":
                var sectionValue = value === "" ? 1 : value;
                copySectionValues[parseInt(id)-1].values.x = parseInt(sectionValue);
                break;
            case "y":
                var sectionValue = value === "" ? 1 : value;
                copySectionValues[parseInt(id)-1].values.y = parseInt(sectionValue);
                break;
            case "h":
                var sectionValue = value === "" ? 4 : value;
                copySectionValues[parseInt(id)-1].values.h = parseInt(sectionValue);
                break;
            case "w":
                var sectionValue = value === "" ? 4 : value;
                copySectionValues[parseInt(id)-1].values.w = parseInt(sectionValue);
                break;
            default:
                console.log("input did not update properly");
        }

        setSectionValues(prevState => prevState.map((sectionValues) => {
            return sectionValues.id === id ? Object.assign(sectionValues, copySectionValues[parseInt(id)-1]) : sectionValues
        }));
    }

    const handleDelete = ({ target }) => {
        const { id } = target.parentNode.parentNode;

        setSectionSettings((prevState) => 
            prevState.filter((component) => component.props.id !== id )
            .map((component) =>
                <SectionSetting 
                    key={ component.props.id } 
                    id={ component.props.id } 
                    handleChange={ handleChange }
                    handleDelete={ handleDelete }>
                </SectionSetting>
            )
        );

        setSectionValues((prevState) => prevState.filter((sectionValues) => sectionValues.id !== id));
    }
    
    const [sectionValues, setSectionValues] = useState([
        {
            id: "1",
            values: {
                x: 1,
                y: 1,
                h: 4,
                w: 4
            }
        }
    ]);
    const [sectionSettings, setSectionSettings] = useState([
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
                x: 1,
                y: 1,
                h: 4,
                w: 4
            }
        }); 

        setSectionCounter((prevState) => prevState + 1);
    }
    
    return (
        <div>
            <Header />

            <CreateContent>
                <NotePreview 
                    sectionValues={ sectionValues }
                    sectionCounter={ sectionCounter }>
                </NotePreview>

                <NoteSettings
                    sectionSettings={ sectionSettings }
                    addSection={ addSection }>
                </NoteSettings>
            </CreateContent>
        </div>
    );
}
 
export default CreateNote;