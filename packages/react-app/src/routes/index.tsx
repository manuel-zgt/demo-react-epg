import React from 'react'
import {Route, Routes,} from "react-router-dom";

import Details from "../pages/details/details";
import App from "../App";
import {history} from "../store";

const routes = (


    <Routes>
        <Route path="/" element={<App history={history}/>}/>
        <Route path="details" element={<Details/>}/>
    </Routes>

)

export default routes;
