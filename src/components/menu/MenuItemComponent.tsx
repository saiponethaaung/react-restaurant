import React from 'react';
import { MenuItem } from '../../interfaces';

export default class MenuItemComponent extends React.Component<{ menuItem: MenuItem }> {
  render(): React.ReactNode {
    const { menuItem } = this.props;

    return (
      <div className={["menuItem", menuItem.category].join(" ")}>
        <figure>
          <img src={menuItem.image} alt="" />
        </figure>
      </div>
    )
  }
}
