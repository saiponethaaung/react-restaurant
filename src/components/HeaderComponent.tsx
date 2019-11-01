import React from 'react';

export default class HeaderComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <header id="headerNav">
        <nav>
          <button id="openSidebar">
            <i className="material-icons">menu</i>
          </button>
        </nav>
      </header>
    );
  }
}
