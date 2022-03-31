import { useEffect, useState } from "react";

import Header from "./Header";
import NotebookPreview from "./NotebookPreview";
import { CreateContent } from "../Common/Content.style";
import NotebookSettings from "./NotebookSettings";

const CreateNotebook = () => {

    const [strapValues, setStrapValues] = useState({
        strap: false,
        "strap-x": 1,
        "strap-hex": "#FFFFFF"
    });
    const [bookmarkValues, setBookmarkValues] = useState({
        bookmark: false,
        "bookmark-x": 1,
        "bookmark-hex": "#FFFFFF"
    });
    const [title, setTitle] = useState('');

    const handleStrap = () => {
        setStrapValues((prevState) => ({
            ...prevState,
            strap: !prevState.strap
        }));
    }

    const handleBookmark = () => {
        setBookmarkValues((prevState) => ({
            ...prevState,
            bookmark: !prevState.bookmark
        }));
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch(name) {
            case "strap-x":
            case "strap-hex":
                setStrapValues((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
                break;
            case "bookmark-x":
            case "bookmark-hex":
                setBookmarkValues((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
                break;
            case "title":
                setTitle(value);
                break;
            default:
                break;
        }
    }

    return (
        <div>
           <Header />

           <CreateContent>
                <NotebookPreview />

                <NotebookSettings 
                    handleChange={ handleChange }
                    strap={ strapValues.strap }
                    handleStrap={ handleStrap }
                    bookmark={ bookmarkValues.bookmark }
                    handleBookmark={ handleBookmark }>
                </NotebookSettings>
           </CreateContent>
        </div>
    );
}
 
export default CreateNotebook;