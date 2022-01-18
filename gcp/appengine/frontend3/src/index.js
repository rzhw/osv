import './styles.scss';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-textfield';
import '@hotwired/turbo';

console.log("hello world!");

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
console.log('dataTable', dataTable);
