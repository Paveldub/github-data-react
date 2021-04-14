import React from 'react';
import { Search } from '../Components/Search';
import { Card } from '../Components/Card';

export const Home = () => {
  const cards = new Array(15).fill('').map((_, i) => i);

  return (
    <>
      <h1>Home Page</h1>
      <Search />
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </>
  );
};
