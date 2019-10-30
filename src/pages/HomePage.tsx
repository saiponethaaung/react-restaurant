import React from 'react';

export default class HomePage extends React.Component {
  render(): React.ReactNode {
    return (
      <section>
        <header className="homeContent">
          <figure>
            <img src="/images/pages/home/banner.jpg" className="imgres" alt="" />
          </figure>
          <h1>Welcome to SOGBU</h1>
          <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
        </header>
        <section className="mainBox">
          <div className="innerBox">
            <figure>
              <img src="/images/demo/9.jpg" alt="" />
            </figure>
            <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
            <a href="/" className="resBtn">View Menu</a>
          </div>
          <div className="innerBox">
            <figure>
              <img src="/images/demo/15.jpg" alt="" />
            </figure>
            <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
            <a href="/" className="resBtn">View Menu</a>
          </div>
        </section>
        <section className="mainBox">
          <div className="innerBox">
            <figure>
              <img src="/images/demo/19.jpg" alt="" />
            </figure>
            <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
            <a href="/" className="resBtn">View Menu</a>
          </div>
          <div className="innerBox">
            <figure>
              <img src="/images/demo/20.jpg" alt="" />
            </figure>
            <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.</p>
            <a href="/" className="resBtn">View Menu</a>
          </div>
        </section>
      </section>
    );
  }
}