import React from 'react';
import Agreements from './Agreements';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreements: []
    };
  }

  fetchAgreements() {
    return fetch("https://us-central1-avtalsroulette.cloudfunctions.net/getAgreements")
      .then(res => res.json())
      .then(agreements => {
        this.setState({ agreements });
        setTimeout(() => this.fetchAgreements(), 60000);
      }).catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.fetchAgreements();
  }

  render() {
    return (
      <div>
        <Agreements agreements={this.state.agreements} />
      </div>
    );
  }
}

export default App;
