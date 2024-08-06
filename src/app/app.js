import html from "./app.html";
import './app.css'

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

import((`./table/list`))
    .then(table => {
        document.getElementById('agents-table').append(table.default())
    })