import React from 'react';
import { MenuItem } from '../interfaces';
import MenuItemComponent from '../components/menu/MenuItemComponent';


export default class MenuPage extends React.Component {
    render(): React.ReactNode {
        const menu: Array<MenuItem> = [];
        const category = ['breakfast', 'lunch', 'dinner', 'desert', 'drinks', 'wine-and-beer'];
        let type = 0;

        for (let i = 1; i < 45; i++) {
            menu.push({
                category: category[type],
                image: `images/menu/${i}.jpg`
            });

            type++;

            if (type > 5) {
                type = 0;
            }
        }

        return (
            <section>
                <header className="menuContent">
                    <ul>
                        <li id="all-menu" className="active menuType" data-section="all">
                            <span className="menuValue">All</span>
                        </li>
                        <li id="breakfast" className="menuType" data-section="breakfast">
                            <span className="menuValue">Breakfast</span>
                        </li>
                        <li id="lunch" className="menuType" data-section="lunch">
                            <span className="menuValue">Lunch</span>
                        </li>
                        <li id="dinner" className="menuType" data-section="dinner">
                            <span className="menuValue">Dinner</span>
                        </li>
                        <li id="desert" className="menuType" data-section="desert">
                            <span className="menuValue">Desert</span>
                        </li>
                        <li id="drinks" className="menuType" data-section="drinks">
                            <span className="menuValue">Drinks</span>
                        </li>
                        <li id="wine-and-beer" className="menuType" data-section="wine-and-beer">
                            <span className="menuValue">Wine and beer</span>
                        </li>
                    </ul>
                </header>

                <section className="menuList">
                    {menu.map((menuItem: MenuItem) => {
                        return (
                            <MenuItemComponent menuItem={menuItem} />
                        )
                    })}
                </section>

                <div className="hidecontent">

                </div>
            </section>
        );
    }
}