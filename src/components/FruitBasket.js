import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, updateFilterCallBack }) =>
      <div className="fruit-basket">
        
      </div>;

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: () => {}
  };


export default FruitBasket;
