import React, { Component } from 'react';
import Tomas from './assets/tomas.jpg';
class App extends Component {
  state = {
    person: {
      fullName: 'Tomas',
      bio: 'A bio about Tomas.',
      imgSrc: Tomas, // Example image URL
      profession: 'Software Developer',
    },
    shows: false,
    timeInterval: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time interval since mounting: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
