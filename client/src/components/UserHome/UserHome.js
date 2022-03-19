// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Navigate } from 'react-router-dom';

import Header from "./Header";
import SearchSort from "./SearchSort";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import { UserHomeContent } from "../Common/Content.style";

const UserHome = () => {
    return (
        <div>
            <Header />

            <UserHomeContent>
                <SearchSort />
                
                <Notebooks />
                
                <Notes />

            </UserHomeContent>
        </div>
    );
}
 
export default UserHome;