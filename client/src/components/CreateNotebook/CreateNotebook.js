// React Hooks
import { useState } from "react";

// Child Components
import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import NotebookSettings from "./NotebookSettings";
// Styled Components
import { CreateContent } from "../Common/Content.style";

const CreateNotebook = () => {

    // Holds the values for the strap component
    const [strap, setStrap] = useState({
        show: false,
        x: 10,
        hex: "#FFFFFF"
    });
    // Holds the values for the bookmark component
    const [bookmark, setBookmark] = useState({
        show: false,
        x: 2,
        hex: "#FFFFFF"
    });
    // Holds the title of the notebook
    const [title, setTitle] = useState('');
    // Holds the colour of the notebook
    const [colour, setColour] = useState('antiquewhite');


    // Display the strap when 
    // the checkbox is checked
    const handleStrap = () => {
        setStrap((prevState) => ({
            ...prevState,
            show: !prevState.show
        }));
    }

    // Display the bookmark when 
    // the checkbox is checked
    const handleBookmark = () => {
        setBookmark((prevState) => ({
            ...prevState,
            show: !prevState.show
        }));
    }

    // Handles the input changes of any setting input
    const handleChange = ({ target }) => {
        // Get the name and value attribute from 
        // the element that triggered the event
        const { name, value } = target;

        // Holds the default value
        // in case the input is empty
        var newValue;

        // Search the corresponding code block to run depending on the
        // name of the element that triggered the event
        switch(name) {
            // If the input value is empty, use the default value
            // Set the corresponding state value to the input value
            case "strapX": {
                newValue = value === "" ? 10 : value;
                
                setStrap((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            }
            case "bookmarkX": {
                newValue = value === "" ? 2 : value;

                setBookmark((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            }
            // Get the colour of the input value in hex
            // or in a default JavaScript colour name.
            // Set the corresponding state value to the input value
            case "strapHex": {
                newValue = getColourValue(value);

                setStrap((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            }
            case "bookmarkHex": {
                newValue = getColourValue(value);

                    setBookmark((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            }
            case "notebookHex": {
                newValue = getColourValue(value);

                setColour(newValue);
                break;

            }
            // Set the corresponding state value to the input value
            case "notebookTitle":
                setTitle(value);
                break;

            default:
                break;
        }
    }

    // Changes the value into a hex or a JavaScript colour name
    const getColourValue = (value) => {

        // Regular expression to check if the value is a hex colour
        // with and without the # symbol respectively
        var regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var regexString = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

        var colour = value.toLowerCase();

        // Test for a hex colour with # symbol
        return regexHex.test(colour) ? 
            colour
        : 
            // Test for a hex colour without # symbol
            regexString.test(colour) ? 
                "#" + colour
            : 
                // Return default value if it's not a valid hex 
                // or JavaScript colour name, and is not the JavaScript
                // colour name "black" since the error colour is black in hex
                getHexValue(colour) === "#000000" && colour !== "black" ? 
                    "antiquewhite" 
                :
                // Return the hex of the JavaScript colour name
                getHexValue(colour);
    }

    // Gets the JavaScript colour name's hex value
    const getHexValue = (colour) => {

        // Create a 2D canvas to get the colour
        var canvas = document.createElement("canvas").getContext("2d");

        // Add the colour to the canvas
        canvas.fillStyle = colour;

        // Return the colour used 
        // to fill the canvas in hex
        return canvas.fillStyle;
    }

    return (
        <div>
           <Header />

           <CreateContent>

                <NotebookPreview
                    strap={ strap }
                    bookmark={ bookmark }
                    colour={ colour }
                    title={ title }>
                </NotebookPreview>

                <NotebookSettings 
                    handleChange={ handleChange }
                    strap={ strap.show }
                    handleStrap={ handleStrap }
                    bookmark={ bookmark.show }
                    handleBookmark={ handleBookmark }>
                </NotebookSettings>
                
           </CreateContent>
        </div>
    );
}
 
export default CreateNotebook;