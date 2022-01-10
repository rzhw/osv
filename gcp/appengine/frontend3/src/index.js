import 'the-new-css-reset/css/reset.css';
import './styles.scss';

console.log("hello world!");

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
console.log('dataTable', dataTable);

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
import {MDCTextFieldIcon} from '@material/textfield/icon';
const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));