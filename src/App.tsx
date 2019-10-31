import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import NavComponent from './components/NavComponent';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <header id="headerNav">
          <nav>
            <button id="openSidebar">
              <i className="material-icons">menu</i>
            </button>
          </nav>
        </header>
        <NavComponent />
        <section id="content">
          <section className="rootView">
            <AppRoutes />
          </section>
        </section>
      </BrowserRouter>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
