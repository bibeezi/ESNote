// React Hooks
import { useState, useEffect } from "react";

// Promise-based HTTP client
import axios from "axios";

// Child Components
import Header from "./Header";
import SearchSort from "./SearchSort";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
// Styled Components
import { UserHomeContent, SlideContent } from "../Common/Content.style";

const UserHome = () => {

    // Store all user notebooks, notes, and note templates
    const [notebooks, setNotebooks] = useState([]);
    const [notes, setNotes] = useState([]);
    const [noteTemplates, setNoteTemplates] = useState([]);

    // Store search value and sorting values
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('nameDESC');

    // Runs when rendered
    useEffect(() => {

        // Gather data to send to the server
        const payload = {
            userID: localStorage.getItem("userID")
        };

        // Get the user's notebooks from MongoDB
        axios.get('/notebook/getNotebooks', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            // Save the notebooks received into 'notebooks' state
            res.data.msg !== "Notebooks Not Found" && setNotebooks(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /notebook/getNotebooks", error);
        });

        // Get the user's notes from MongoDB
        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            // Save the notes received into 'notes' state
            res.data.msg !== "Notes Not Found" && setNotes(res.data);

            getTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /note/getNotes", error);
        });

    }, []);

    const getTemplates = (notes) => {

        // Gather data to send to the server
        const payload = {
            userID: localStorage.getItem("userID"),
            notes: notes
        };

        // Get the user notes' templates
        axios.get('/template/getTemplates', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            // Save the templates received into 'noteTemplates' state
            res.data.msg !== "Templates Not Found" && setNoteTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /template/getTemplates", error);
        });
    }

    // Handles the input and select changes 
    // from the search and sort respectively
    const handleChange = ({ target }) => {
        // Get the name and value attribute from 
        // the element that triggered the event
        const { name, value } = target;

        // Search the corresponding 
        // code block to run depending 
        // on the name of the element 
        // that triggered the event
        switch(name) {
            // Set search state or sortBy 
            // state to the value of the input.
            case "search":
                setSearch(value);
                break;

            case "sort":
                setSortBy(value);
                break;
                
            default:
                break;
        }
    }

    return (
        <div>
            <Header />

            <UserHomeContent>
                <SearchSort handleChange={ handleChange }/>
                
                <SlideContent>
                    <Notes 
                        search={ search }
                        sortBy={ sortBy }
                        notes={ notes }
                        noteTemplates={ noteTemplates }
                    />
                    
                    <Notebooks 
                        search={ search }
                        sortBy={ sortBy }
                        notes={ notes }
                        notebooks={ notebooks }
                    />
                    
                </SlideContent>
            </UserHomeContent>
        </div>
    );
}
 
export default UserHome;