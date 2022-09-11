import React, { useEffect } from 'react';
import {  Outlet, ReactLocation, Router } from "@tanstack/react-location";

import routes from './common/routes';
import 'regenerator-runtime'

const location = new ReactLocation();

function App() {    
    return (
        <Router location={location} routes={routes.pages} useErrorBoundary={true} >
            <Outlet />
        </Router>
    );
}

export default App
