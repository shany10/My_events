import React from 'react';
import axios from 'axios';

const Test = () => {

    console.log(axios.defaults.headers);
    axios.get("https://api.openagenda.com/v2/agendas?key=79530381399144e2982925f542885ed0&size=20")
    .then((response) => {
        console.log(response.data)
    })
    return (
        <section>
            <h1>coucou</h1>
        </section>
    )
}

export default Test