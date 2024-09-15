import {createElement, createElements, addSeveral} from './functions';

const main = document.querySelector('main');

let taskGroupElements = [
  {
    tag: 'button',
    className: 'task-group-add',
    content: '+',
  },
  {
    tag: 'button',
    className: 'task-group-home',
    content: 'Home',
  } 
];