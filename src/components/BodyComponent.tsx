import React from 'react';
import { AppRoutes } from '../routes';

export default class BodyComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <section id="content">
                <section className="rootView">
                    <AppRoutes />
                </section>
            </section>
        )
    }
}