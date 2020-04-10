import React from 'react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ExampleComponent = ({ text }) => {
  return (
    <div>
      <h1>Example Component: <span className="text-primary">{text}</span></h1>
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
  )
}
