
import { useState, useEffect } from 'react';
import axios from 'axios';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Content } from '../Common/Content.style';
import { Form } from "../Common/Form.style";
import { Button } from '../Common/Button.style';

const UserHome = () => {

    // contains the values of the form
    const [note, setNote] = useState({
        title: '',
        body: '',
        pages: []
    });
  
    // get pages from Database when added to DOM
    useEffect(() => {
        getPages();
    }, []);

    const getPages = () => {
        axios.get('/getPages')
        .then((res) => {
            const data = res.data;
            setNote({ pages: data });
        })
        .catch((error) => {
            console.log("ERROR OCCURRED IN getPages", error);
        });
    };

    // updates the state's values
    const handleChange = ({ target }) => {
        // target is the element that is triggering the event
        const { name, value } = target;

        setNote({
            // [name] is dynamically assigned to the element's attribute
            [name]: value
        });
    };

    // submit the form
    const submit = (event) => {
        // prevents browser refresh
        event.preventDefault();

        const payload = {
            title: note.title,
            body: note.body
        };

        // send data to the server
        axios({
            url: '/savePage',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log("Data was sent to the server!");
            getPages();
        })
        .catch(() => {
            console.log("ERROR OCCURRED in axios - /savePage");
        });
    };

    // show Pages in a list
    const showPages = (pages) => {
        if( ! pages.length) {
            return null;
        }

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
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Content page={ "user" }>
                <div className="form">
                    <Form onSubmit={ submit }>
                        <input type="text" name="title" value={ note.title } onChange={ handleChange } placeholder="Type the Title of this note here!"/>
                        <textarea name="body" cols="30" rows="10" value={ note.body } onChange={ handleChange } placeholder="Type your Notes here!"></textarea>
                        <Button
                            active={ true }
                            colours={ "blue" }>
                            Save
                        </Button>
                    </Form>
                </div>

                <div className="page-div">
                    { showPages(note.pages) }
                </div>
            </Content>
        </div>
    );
}
 
export default UserHome;