import { useEffect, useState } from "react";

import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import { CreateContent } from "../Common/Content.style";
import NotebookSettings from "./NotebookSettings";

const CreateNotebook = () => {

    const [strapValues, setStrapValues] = useState({
        show: false,
        strapX: 2,
        strapHex: "#FFFFFF"
    });
    const [bookmarkValues, setBookmarkValues] = useState({
        show: false,
        bookmarkX: 10,
        bookmarkHex: "#FFFFFF"
    });
    const [title, setTitle] = useState('');
    const [colour, setColour] = useState('antiquewhite');

    const handleStrap = () => {
        setStrapValues((prevState) => ({
            ...prevState,
            show: !prevState.show
        }));
    }

    const handleBookmark = () => {
        setBookmarkValues((prevState) => ({
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
                newValue = value === "" && 2;
                
                setStrapValues((prevState) => ({
                    ...prevState,
                    [name]: newValue
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

                setStrapValues((prevState) => ({
                    ...prevState,
                    [name]: newValue
                }));
                break;

            case "bookmarkX":
                newValue = value === "" && 10;

                setBookmarkValues((prevState) => ({
                    ...prevState,
                    [name]: newValue
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

                setBookmarkValues((prevState) => ({
                    ...prevState,
                    [name]: newValue
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
                    strap={ strapValues }
                    bookmark={ bookmarkValues }
                    colour={ colour }
                    title={ title }>
                </NotebookPreview>

                <NotebookSettings 
                    handleChange={ handleChange }
                    strap={ strapValues.show }
                    handleStrap={ handleStrap }
                    bookmark={ bookmarkValues.show }
                    handleBookmark={ handleBookmark }>
                </NotebookSettings>
           </CreateContent>
        </div>
    );
}
 
export default CreateNotebook;