var React = require('react'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store');

var TestComponent = React.createClass({
  getInitialState: function() {
    return Store.get();
  },
  componentDidMount: function() {
    Store.addListener('change', this.changeEventHandler);
  },
  changeEventHandler: function() {
    this.setState(Store.get());
  },
  handleChange: function(event) {
    Actions.set(event.target.value);
  },
  handleButtonClick: function(event) {
    let date;
    fetch('http://localhost:8080/date-time')
      .then ((response) => response.json())
      .then((responseJson) => {
        date = responseJson;
        this.setState({date: date});
        console.log(this.state);
        console.log(date);
      })
    Actions.add(1);
    return date;
  },
  _renderDiv: function() {
    if(this.state.count === 1) {
      return (
        <div>
          <div>'i am 1!'</div>
          <span>{this.state.date.time}</span>
        </div>      )
    } else if(this.state.count === 2) {
      return (
        <div>
          <div>'i am 2!'</div>
          <span>{this.state.date.time}</span>
        </div>
      )
    } else if(this.state.count === 3) {
      return (
        <div>
          <div>'i am 3!'</div>
          <span>{this.state.date.time}</span>
        </div>
      )
    } else if(this.state.count === 4) {
      return (
        <div>
          <div>'i am 4!'</div>
          <span>{this.state.date.time}</span>
        </div>
      )
    } else {
      return null;
    };

  },
	render: function() {


    return (
    	<div>
    		Hello <input onChange={this.handleChange} defaultValue={this.state.value} type="text"/>
    		<button onClick={this.handleButtonClick}>+1</button>
        <hr/>
        <span>{this.state.count}: {this.state.value}</span>
        {this._renderDiv()}
     	</div>
  )}
});

module.exports = TestComponent;
