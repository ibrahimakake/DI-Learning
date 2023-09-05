import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  isPropsEmpty(value) {
    return value === null || value === undefined || value === "";
  }

  pickRandomNumber() {
    return Math.floor(Math.random() * 3000) + 1;
  }

  pickRandomTitle() {
    const defaultTitles = ['People', 'Bananas', 'Cars', 'Dogs'];
    const index = Math.floor(Math.random() * defaultTitles.length);
    return defaultTitles[index];
  }

  render() {
    const { icon, title, points } = this.props.info;
    const iconName = this.isPropsEmpty(icon) ? "fa-regular-fa-bookmark" : icon;
    const pointNumber = this.isPropsEmpty(points) ? this.pickRandomNumber() : points;
    const titleName = this.isPropsEmpty(title) ? this.pickRandomTitle() : title;

    return (
      <div className='card'>
        <div className='card_subtitle'>
          <FontAwesomeIcon icon={iconName} />
          <h2>{titleName}</h2>
          </div>
          <h3>{pointNumber}</h3>
     
      </div>
    );
  }
}

