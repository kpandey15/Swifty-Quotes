import React, { Component } from 'react';
import axios from 'axios';
import './Random.css';

class Random extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  getDataAgain = () => {
    const link = `https://taylorswiftapi.onrender.com/get?`;
    axios
      .get(link)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        alert(error);
      });
    console.log(this.state.data);
  };

  render() {
    const { data } = this.state;

    return (
      <div className="random-container">
        <h1>Get Random Quote?</h1>
        <button className="random-button" onClick={this.getDataAgain}>
          Submit
        </button>
        {data.length !== 0 && (
          <ul className="quote-list">
            <li className="quote-item"><h3>Quote: {data.quote}</h3></li>
            <li className="quote-item">Song: {data.song}</li>
            <li className="quote-item">Album: {data.album}</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Random;
