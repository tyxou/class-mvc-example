import View from './View';
import Model from './Model';
import Controller from './Controller';
import './index.css';

function main() {
  console.log('Loaded');
  const view = new View('root');
  const model = new Model();
  model.load();
  const mvc = new Controller(model, view);
  mvc.start();
  window.mvc = mvc;
}

document.addEventListener('DOMContentLoaded', ()=>{
  main();
});
