import React from "react";
import GoogleMapReact from 'google-map-react';

export default class ContactPage extends React.Component {
    render(): React.ReactNode {
        return (
            <section>
                <section id="locationMap">
                    <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBssfLz2R-XBJB9v_wLBJ5MOekWzwTxZdA' }} defaultZoom={15} defaultCenter={{ lat: 16.8656923, lng: 96.123589 }}></GoogleMapReact>
                </section>
                <header className="homeContent">
                    <h1>Contact Us</h1>
                    <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
                </header>

                <main>
                    <ul className="contactInfo">
                        <li className="col m4 x12">
                            <span className="contactIcon">
                                <i className="material-icons">location_on</i>&nbsp;Address
                            </span>
                            No.123, Thamine Street, Thamine Township, Yangon.
                        </li>
                        <li className="col m4 x12">
                            <span className="contactIcon">
                                <i className="material-icons">email</i>&nbsp;Email
                            </span>
                            info@example.com
                        </li>
                        <li className="col m4 x12">
                            <span className="contactIcon">
                                <i className="material-icons">phone</i>&nbsp;Phone
                            </span>01 123 345, 01 123 346
                        </li>
                    </ul>
                    <div className="contactForm">
                        <input type="text" placeholder="Name" className="lclass" />
                        <input type="text" placeholder="Eamil" className="rclass" />
                        <input type="text" placeholder="Phone" className="lclass" />
                        <input type="text" placeholder="Organization" className="rclass" />
                        <textarea placeholder="Message"></textarea>
                        <button type="button" className="sendContactForm">Send Messages</button>
                    </div>
                </main>
            </section >
        )
    }
}