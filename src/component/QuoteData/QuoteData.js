import React, { Component } from 'react';
import axios from 'axios';
import './QuoteData.css';

class QuoteData extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      name: '',
      topic: '',
      check: false,
    };
  }

  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  getData = () => {
    const link = `https://taylorswiftapi.onrender.com/get?${this.state.topic}=${this.state.name}`;
    axios
      .get(link)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
          check: true,
        });
      })
      .catch((error) => {
        alert(error);
      });
    console.log(this.state.data);
    console.log(this.state.check)
  };

  topicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    const { data, name, topic, check } = this.state;

    return (
      <div className="middle-container">
        <div className="box-container">
          <input
            className="input-field"
            placeholder="Search quotes"
            type="text"
            value={name}
            onChange={this.changeHandler}
            autoFocus
          />
          <select
            className="select-field"
            value={topic}
            onChange={this.topicChange}
          >
            <option value="null">Select</option>
            <option value="song">Song</option>
            <option value="album">Album</option>
          </select>
          <br />
          <button className="submit-button" onClick={this.getData}>
            Submit
          </button>
          {check === true && name.length !== 0 && topic !== "null" ?(
            <div className="quote-container">
              <h3 className="quote-text">Quote: {data.quote}</h3>
              <p className="quote-text">Song: {data.song}</p>
              <p className="quote-text">Album: {data.album}</p>
            </div>
          ): null}
        </div>
      </div>
    );
  }
}

export default QuoteData;
