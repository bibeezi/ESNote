
import { useState, useEffect } from 'react';
import axios from 'axios';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Content } from '../Common/Content.style';
import { Form } from "../Common/Form.style";
import { Button } from '../Common/Button.style';

const UserHome = () => {

    const [note, setNote] = useState({
        title: '',
        body: '',
        pages: []
    });
  
    useEffect(() => {

        getNotes();

    }, []);

    const getNotes = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            console.log(res.data);
            // res.data.foreach((note) => {
            //     setNote((prevState) => ({
            //         title: prevState.title,
            //         body: prevState.body,
            //         pages: [...prevState.pages, note]
            //     }));
            // });
            setNote(prevState => ({
                title: prevState.title,
                body: prevState.body, 
                pages: res.data
            }));
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getNotes", error);
        });
    };

    console.log(note.pages);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        if(name === "title") {
            setNote(prevState => ({
                [name]: value,
                body: prevState.body, 
                pages: prevState.pages
            }));
        } else {
            setNote(prevState => ({
                title: prevState.title, 
                [name] : value,
                pages : prevState.pages
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            title: note.title,
            body: note.body,
            userID: localStorage.getItem("userID")
        };

        axios({
            url: '/saveNote',
            method: 'POST',
            data: payload
        })
        .then(() => {
            getNotes();
        })
        .catch((err) => {
            console.log("ERROR in UserHome - /saveNote", err);
        });
    };

    const showPages = (pages) => {
        return pages.map((page, index) => (
            <div key={ index } className="page-list">
                <div className="page-content">
                    <h3>{ page.title }</h3>
                    <p>{ page.body }</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Header>
                <div>
                    <img 
                        src={ Images.Home } 
                        alt="Home Icon">
                    </img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Content page={ "user" }>
                <div className="form">
                    <Form onSubmit={ handleSubmit }>
                        <input 
                            name="title" 
                            value={ note.title } 
                            onChange={ handleChange } 
                            placeholder="Type the Title of this note here!"
                        />
                        <textarea 
                            name="body" 
                            cols="30" 
                            rows="10" 
                            value={ note.body } 
                            onChange={ handleChange } 
                            placeholder="Type your Notes here!">
                        </textarea>
                        <Button
                            active={ true }
                            colours={ "blue" }>
                            Save
                        </Button>
                    </Form>
                </div>

                <div className="note-list">
                    { note.pages.length ? <h1>Notes</h1> : null }
                    { note.pages && showPages(note.pages) }
                </div>
            </Content>
        </div>
    );
}
 
export default UserHome;