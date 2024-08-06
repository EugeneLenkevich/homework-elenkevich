import html from './list.html';
import './list.css';
import items from '../model/data';

const element = document.createElement('div');
element.innerHTML = html;

const rootElement = element;

const divWrapperElement = rootElement.querySelector('div');

const tHeadElement = divWrapperElement.querySelector('thead');
const tBodyElement = divWrapperElement.querySelector('tbody');

const templateHeadRow = rootElement.querySelector("template[id='template-head-column']")
const templateRowHead = rootElement.querySelector("template[id='template-row-head']")
const templateRowColumn = rootElement.querySelector("template[id='template-row-column']")

const headRowElement = document.createElement('tr');


for(const column of ['Наименование', 'ИНН', 'Адрес', 'КПП']) {
    const columnElement = templateHeadRow.content.children[0].cloneNode(true);
    columnElement.innerHTML = column;
    headRowElement.appendChild(columnElement)
}
tHeadElement.appendChild(headRowElement)

const createRowColumn = (content) => {
    const rowColumn = templateRowColumn.content.children[0].cloneNode();
    rowColumn.innerHTML = content;
    return rowColumn;
}

function reloadTable() {
    for (const item of items) {
        const bodyRowElement = document.createElement('tr');

        // add css class
        bodyRowElement.classList.add('dom-table-row')

        const rowHead = templateRowHead.content.children[0].cloneNode();

        bodyRowElement.appendChild(rowHead)
        bodyRowElement.appendChild(createRowColumn(item.name));
        bodyRowElement.appendChild(createRowColumn(item.inn));
        bodyRowElement.appendChild(createRowColumn(item.address));
        bodyRowElement.appendChild(createRowColumn(item.kpp));
        rowHead.innerHTML = item.name;

        tBodyElement.appendChild(bodyRowElement)
    }
}

reloadTable();

function addAgent() {
    console.log(arguments)
}

export default () => element;