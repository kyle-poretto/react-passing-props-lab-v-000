import React from 'react';

import FruitBasket from './FruitBasket';
import { eventNames } from 'cluster';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  updateFilter = event => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  componentDidMount(){
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }


  render(){
    return (
      <FruitBasket
      fruit={this.state.fruit}
      filters={this.state.filters}
      currentFilter={this.state.currentFilter}
      updateFilterCallBack={this.updateFilter}
      />
    )

  }
}

export default App;
