import React from 'react';
import CardList from '../modules/CardList';
import './main.css'

function Main() {
  return (
    <div className="main">
      <h1 className='title'>Замечания и рекомендации</h1>
      <CardList/>
    </div>
  );
}

export default Main;
