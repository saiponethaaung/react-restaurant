import React from 'react';

export default class TimelineComponent extends React.Component<{ year: number }> {

  render(): React.ReactNode {
    return (
      <li className="timelineDetail">
        <h3>{this.props.year}</h3>
        <p>Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu. Nunc blandit odio non tellus suscipit, ut varius risus commodo. Pellentesque justo quam, feugiat ut enim id, volutpat pulvinar dolor. Praesent dui tortor, viverra ac suscipit non, aliquet bibendum erat. Nam ut mollis enim, eu sodales elit. Nulla nunc odio, pulvinar quis massa ac, sodales pulvinar mauris. Fusce euismod eu magna et malesuada. Sed sit amet sapien vel elit venenatis fermentum eget id arcu.</p>
      </li>
    );
  }
}