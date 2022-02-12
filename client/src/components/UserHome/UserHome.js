
import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading }  from "../Common/Heading.style";
import { Content } from "../Common/Content.style";
import { AddNote } from "./AddNote.style";
import { Grid } from "./Grid.style";


const UserHome = () => {

    const username = localStorage.getItem("username");

    return ( 
        <div>
            <Header
                page={ "user" }>
                <div>
                    <img 
                        src={ Images.Home } 
                        alt="Home Icon">
                    </img>
                    <Heading>ESNote</Heading>
                </div>
                <div>
                    { username && <Heading>Welcome { username }!</Heading> }
                </div>
                <div id="icons">
                    {/* <img id="b"></img>
                    <img id="c"></img>
                    <img id="d"></img>
                    <img id="e"></img>
                    <img id="f"></img> */}
                </div>
            </Header>
            {/* <Header
                bottom={ "shadow" }>
                <div id="select-wrapper">
                    <select>
                        <option value="Name">Sort by Name</option>
                        <option value="Date">Sort by Date</option>
                    </select>
                </div>
                <div></div>
                <div>
                    <input>Search</input>>
                </div>
            </Header> */}

            <Content
            page={ "user" }>
                <div class="content">
                    <h1>Notebooks</h1>
                    <Grid>
                        <AddNote></AddNote>
                    </Grid>
                </div>
                <div class="content">
                    <h1>Notes</h1>
                    <Grid>
                        <AddNote></AddNote>
                    </Grid>
                </div>
            </Content>
        </div>
    );
}
 
export default UserHome;