import * as React from 'react';
import { useLocation } from 'react-router-dom';

export default function ManagerPage(props) {
    let location = useLocation();
    return (<React.Fragment>
        <p>{location.pathname}</p>
    </React.Fragment>)
}