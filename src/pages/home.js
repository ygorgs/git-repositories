import React, { Component } from 'react';

import Informations from '../components/informations';
import RepositoryList from '../components/repository/list';

class Home extends Component {
  render() {
    return (
      <div>
        <Informations />
        <RepositoryList />
      </div>
    )
  }
}

export default Home;