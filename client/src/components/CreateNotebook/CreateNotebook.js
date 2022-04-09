import { useState } from "react";

import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import { CreateContent } from "../Common/Content.style";
import NotebookSettings from "./NotebookSettings";

const CreateNotebook = () => {

    const [strap, setStrap] = useState({
        show: false,
        x: 10,
        hex: "#FFFFFF"
    });
    const [bookmark, setBookmark] = useState({
        show: false,
        x: 2,
        hex: "#FFFFFF"
    });
    const [title, setTitle] = useState('');
    const [colour, setColour] = useState('antiquewhite');

    const handleStrap = () => {
        setStrap((prevState) => ({
            ...prevState,
            show: !prevState.show
        }));
    }

    const handleBookmark = () => {
        setBookmark((prevState) => ({
            ...prevState,
            show: !prevState.show
        }));
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;

        var newValue;

        switch(name) {
            case "strapX":
                newValue = value === "" ? 10 : value;
                
                setStrap((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            case "strapHex":
                newValue = getColourValue(value);

                setStrap((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            case "bookmarkX":
                newValue = value === "" ? 2 : value;

                setBookmark((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            case "bookmarkHex":
                newValue = getColourValue(value);

                    setBookmark((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            case "notebookTitle":
                setTitle(value);
                break;
                
            case "notebookHex":
                newValue = getColourValue(value);

                setColour(newValue);
                break;

            default:
                break;
        }
    }

    const getColourValue = (value) => {

        var regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var regexString = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var colour = value.toLowerCase();
        
        return regexHex.test(colour) ? 
            colour
        : 
            regexString.test(colour) ? 
                "#" + colour
            : 
                standardizeColor(colour) === "#000000" && colour !== "black" ? 
                    "antiquewhite" 
                :
                standardizeColor(colour);
    }

    const standardizeColor = (str) => {
        var ctx = document.createElement("canvas").getContext("2d");

        ctx.fillStyle = str;

        return ctx.fillStyle;
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