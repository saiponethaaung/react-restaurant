import React from 'react';
import { MenuItem, Category } from '../interfaces';
import MenuItemComponent from '../components/menu/MenuItemComponent';


export default class MenuPage extends React.Component {
  state = {
    selectedCategory: 0
  }

  private category: Array<Category> = [
    {
      id: 0,
      name: 'All',
      slug: 'all-menu',
    },
    {
      id: 1,
      name: 'Breakfast',
      slug: 'breakfast',
    },
    {
      id: 2,
      name: 'Lunch',
      slug: 'lunch',
    },
    {
      id: 3,
      name: 'Dinner',
      slug: 'dinner',
    },
    {
      id: 4,
      name: 'Desert',
      slug: 'desert',
    },
    {
      id: 5,
      name: 'Drinks',
      slug: 'drinks',
    },
    {
      id: 6,
      name: 'Wine and Beer',
      slug: 'wine-and-beer',
    }
  ];

  private menu: Array<MenuItem> = [];

  componentWillMount() {
    let type = 1;

    for (let i = 1; i < 45; i++) {
      this.menu.push({
        category: this.category[type].slug,
        image: `images/menu/${i}.jpg`
      });

      type++;

      if (type > 6) {
        type = 1;
      }
    }
  }

  selectCategory(id: number): void {
    this.setState({
      selectedCategory: id
    })
  }

  render(): React.ReactNode {
    console.log("menus", this.menu);
    return (
      <section>
        <header className="menuContent">
          <ul>
            {this.category.map((category, index: number) => {
              return (
                <li id={category.slug} key={index} className={["menuType", this.state.selectedCategory === category.id ? "active" : ""].join(" ")} onClick={() => this.selectCategory(category.id)} data-section={category.slug}>
                  <span className="menuValue">{category.name}</span>
                </li>
              )
            })}
          </ul>
        </header>

        <section className="menuList">
          {this.menu.map((menuItem: MenuItem, index: number) => {
            return (
              <MenuItemComponent key={index} menuItem={menuItem} />
            )
          })}
        </section>

        <div className="hidecontent">

        </div>
      </section >
    );
  }
}
