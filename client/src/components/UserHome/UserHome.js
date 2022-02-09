
import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading }  from "../Common/Heading.style";

const UserHome = () => {
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
                    <Heading>Welcome User!</Heading>
                </div>
                <div id="icons">
                    <img id="b"></img>
                    <img id="c"></img>
                    <img id="d"></img>
                    <img id="e"></img>
                    <img id="f"></img>
                </div>
            </Header>
            <Header
                bottom={ "shadow" }>
                <div id="select-wrapper">
                    <select>
                        <option value="Name">Sort by Name</option>
                        <option value="Date">Sort by Date</option>
                    </select>
                </div>
                <div>
                    <h1></h1>
                </div>
                <div>
                    <h1></h1>
                </div>
            </Header>
        </div>
    );
}
 
export default UserHome;