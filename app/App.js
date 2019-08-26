import React from 'react';
import Counter from './Counter';
import { hot } from 'react-hot-loader';

const App = () => (
  <div>
    <h3>React App</h3>
    <h1><Counter/></h1>
  </div>
);

export default hot(module)(App);