import { useState } from "react";

import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import { CreateContent } from "../Common/Content.style";
import NotebookSettings from "./NotebookSettings";

const CreateNotebook = () => {

    const [strap, setStrap] = useState({
        show: false,
        x: 2,
        hex: "#FFFFFF"
    });
    const [bookmark, setBookmark] = useState({
        show: false,
        x: 10,
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
        var regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        var regexString = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

        switch(name) {
            case "strapX":
                newValue = value === "" ? 2 : value;
                
                setStrap((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            case "strapHex":
                newValue = regexHex.test(value) ? 
                    value 
                    : 
                    regexString.test(value) ? 
                        "#" + value 
                        : 
                        standardizeColor(value) === "#000000" && value !== "black" ? 
                            "antiquewhite" 
                        :
                        standardizeColor(value);

                setStrap((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            case "bookmarkX":
                newValue = value === "" ? 10 : value;

                setBookmark((prevState) => ({
                    ...prevState,
                    x: newValue
                }));
                break;

            case "bookmarkHex":
                newValue = regexHex.test(value) ? 
                    value 
                    : 
                    regexString.test(value) ? 
                        "#" + value 
                        : 
                        standardizeColor(value) === "#000000" && value !== "black" ? 
                            "antiquewhite" 
                        :
                        standardizeColor(value);

                    setBookmark((prevState) => ({
                    ...prevState,
                    hex: newValue
                }));
                break;

            case "notebookTitle":
                setTitle(value);
                break;
                
            case "notebookHex":
                newValue = regexHex.test(value) ? 
                    value 
                    : 
                    regexString.test(value) ? 
                        "#" + value 
                        : 
                        standardizeColor(value) === "#000000" && value !== "black" ? 
                            "antiquewhite" 
                        :
                        standardizeColor(value);

                setColour(newValue);
                break;

            default:
                break;
        }
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