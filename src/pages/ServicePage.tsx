import React from 'react';

export default class ServicePage extends React.Component {
  createServiceList = () => {
    let services = [];

    for (let i = 1; i < 5; i++) {
      services.push(<div className="serviceItem">
        <figure>
          <img src={`/images/menu/${i}.jpg`} alt="" />
        </figure>
        <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris.
            Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo.
            Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.
                </p>
      </div>);
    }

    return services;
  }

  render(): React.ReactNode {
    return (
      <section>
        {this.createServiceList()}
      </section>
    )
  }
}
