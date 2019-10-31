import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <HeaderComponent />
        <NavComponent />
        <BodyComponent />
      </BrowserRouter>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
