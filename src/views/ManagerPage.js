import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

function App() {
    return <Button variant="contained">Hello World</Button>;
  }
  ReactDOM.render(<App />, document.querySelector('#app'));


export default function ManagerPage(props) {
    let location = useLocation();
    return (<React.Fragment>
        <p>{location.pathname}</p>
    </React.Fragment>)
}