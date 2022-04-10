// React Hooks
import { useState } from "react";

// Child Components
import Header from "./Header";
import NotePreview from "./NotePreview";
import NoteSettings from "./NoteSettings";
import SectionSetting from "./SectionSetting";
// Styled Components
import { CreateContent } from "../Common/Content.style";

const CreateNote = () => {
    
    // The colour for the first section
    const [initialColour] = useState("#" + Math.floor(Math.random()*16777215).toString(16));

    // Handles the x, y, height and width input changes for the sections
    const handleChange = ({ target }) => {
        // Get the name, id and value attribute from 
        // the element that triggered the event
        const { name, id, value } = target;

        // Shallow copy the sectionValues
        var copySectionValues = sectionValues;
        var sectionValue;

        // Search the corresponding code block to run depending on the
        // name of the element that triggered the event
        switch(name) {
            // If the input value is empty, keep the state's original value.
            // Get the section at index id, and change the corresponding values
            case "x":
                sectionValue = value === "" ? 1 : value;

                copySectionValues[parseInt(id)-1].values.x = parseInt(sectionValue);
                break;

            case "y":
                sectionValue = value === "" ? 1 : value;

                copySectionValues[parseInt(id)-1].values.y = parseInt(sectionValue);
                break;
            case "h":
                sectionValue = value === "" ? 1 : value;

                copySectionValues[parseInt(id)-1].values.h = parseInt(sectionValue);
                break;
            case "w":
                sectionValue = value === "" ? 1 : value;

                copySectionValues[parseInt(id)-1].values.w = parseInt(sectionValue);
                break;
            default:
                break;
        }

        // Set the sectionValues with the new array - copySectionValues
        setSectionValues(prevState => prevState.map(sectionValues => {
            // Check if the changed input's section id is the same 
            // as the sectionValue's section id.
            return sectionValues.id === id ? 
                // Assign object from copySectionValues array to sectionValues state
                Object.assign(sectionValues, copySectionValues[parseInt(id)-1])
            : 
                // Return unchanged object from sectionValues state
                sectionValues
        }));
    }

    // Handles the deletion of a section
    const handleDelete = ({ target }) => {
        // Get the id attribute from the element 
        // that holds the id of the clicked section
        const { id } = target.parentNode.parentNode;

        // Sets the new list of components to render
        setSectionSettings(prevState => 
            // Removes the component that was clicked
            prevState.filter(component => component.props.id !== id )
            // Returns the new list of components
            .map(component =>
                <SectionSetting 
                    key={ component.props.id } 
                    id={ component.props.id } 
                    handleChange={ handleChange }
                    handleDelete={ handleDelete }
                    colour={ component.props.colour }>
                </SectionSetting>
            )
        );

        // Sets the new list of section values
        setSectionValues(prevState => 
            // Removes the object that holds the values of the section clicked
            prevState.filter(sectionValues => sectionValues.id !== id)
        );
    }

    // Add a section component to render, an object in sectionValues,
    // and get a colour for the section
    const addSection = () => {

        var colour = "#" + Math.floor(Math.random()*16777215).toString(16);

        // Add a section commponent to render
        sectionSettings.push(
            <SectionSetting 
                key={ sectionCounter.toString() } 
                id={ sectionCounter.toString() } 
                handleChange={ handleChange }
                handleDelete={ handleDelete }
                colour={ colour }>
            </SectionSetting>
        );

        // Add a new object for the new section
        sectionValues.push({
            id: sectionCounter.toString(),
            values: {
                x: 1,
                y: 1,
                h: 1,
                w: 1
            },
            colour: colour
        }); 

        // Increment the count for sections created
        setSectionCounter((prevState) => prevState + 1);
    }
    
    // Holds the values of each section
    const [sectionValues, setSectionValues] = useState([
        {
            id: "1",
            values: {
                x: 1,
                y: 1,
                h: 1,
                w: 1
            },
            colour: initialColour
        }
    ]);
    // Holds the component rendered for each section
    const [sectionSettings, setSectionSettings] = useState([
        <SectionSetting 
            key="1" 
            id="1" 
            handleChange={ handleChange }
            handleDelete={ handleDelete }
            colour={ initialColour }>
        </SectionSetting>
    ]);
    // Counts the number of sections created
    const [sectionCounter, setSectionCounter] = useState(2);
    
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