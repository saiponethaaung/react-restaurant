import React from 'react';

export default class AboutUsPage extends React.Component {
  render(): React.ReactNode {
    const years: Array<number> = [
      2000,
      2005,
      2011,
      2018,
      2019,
    ];

    return (
      <section>
        <header className="homeContent">
          <figure>
            <img src="/images/pages/about/banner.jpg" className="imgres" />
          </figure>
          <h1>About SOGBU</h1>
          <p>
            Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.
            Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat.
                    </p>
        </header>

        <section id="aboutTimeline">
          <ul className="timelineList">
            {years.map((value: number) => {
              return <li className="timelineDetail">
                <h3>{value}</h3>
                <p>
                  Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat. Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu.
                </p>
              </li>
            })}
          </ul>
          <div className="seperator"></div>
        </section>
      </section>
    );
  }
}