import { useState, useEffect } from 'react';
import axios from 'axios';



export default function App() {
    return (
        <SendHTTPRequest />
    )
}

function SendHTTPRequest() {
    let [data, setData] = useState(0);

    useEffect( () => {
        const BACKENDURL = "http://localhost:8080/req"

        axios.get(BACKENDURL)
            .then(response => {
                setData(response.data);
            }).catch(error => {console.log(error);})
    }, []);

    return (
        <h1>{data}</h1>
    )
}