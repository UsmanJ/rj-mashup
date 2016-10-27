import React, { Component, PropTypes } from 'react';
import Store from '../stores/Store';

import rest from 'rest';
import mime from 'rest/interceptor/mime';


class TestComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = Store.get();
  }

  componentDidMount() {
    Store.addListener('change', this.changeEventHandler);
  }

  changeEventHandler() {
    this.state = Store.get();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }

  handleButtonClick = (event) => {
    const client = rest.wrap(mime);
    client({ path: 'http://localhost:8080/date-time' }).then(this.handleAjax);
    this.setState({count: this.state.count + 1})
  }

  handleRandomClick = (event) => {
    const client = rest.wrap(mime);
    client({ path: 'http://localhost:8080/tube-service' })
      .then((response) => {
        console.log(response.entity[0].serviceType);
      });
  }

  handleAjax = (response) => {
    let date;
    date = response.entity.time.toString();
    this.setState({date: date});
  }

  _renderDiv() {
    if(this.state.count === 1 && this.state.date) {
      return (
        <div>
          <div>'i am 1!'</div>
          <span>{this.state.date}</span>
        </div>      )
    } else if(this.state.count === 2) {
      return (
        <div>
          <div>'i am 2!'</div>
          <span>{this.state.date}</span>
        </div>
      )
    } else if(this.state.count === 3) {
      return (
        <div>
          <div>'i am 3!'</div>
          <span>{this.state.date}</span>
        </div>
      )
    } else if(this.state.count === 4) {
      return (
        <div>
          <div>'i am 4!'</div>
          <span>{this.state.date}</span>
        </div>
      )
    } else {
      return (
        <div>
          <div>I am not 1, 2, 3 or 4!</div>
          <span>{this.state.date}</span>
        </div>
      )
    };
  }

	render() {
    return (
    	<div>
    		Hello <input onChange={this.handleChange} defaultValue={this.state.value} type="text"/>
    		<button onClick={this.handleButtonClick}>+1</button>
        <hr/>
        <span>{this.state.count}: {this.state.value}</span>
        {this._renderDiv()}
        <button onClick={this.handleRandomClick}>Random button</button>
     	</div>
  )}
};

export default TestComponent;
