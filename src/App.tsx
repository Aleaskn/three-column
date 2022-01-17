import React from 'react';
import './App.css';
import Card from './assets/components/Card';

const cards = [
  {
    icon : '',
    title: 'sedans',
    context : 'chose the sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
  },
  {
    icon : '',
    title: 'suvs',
    context : 'take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
  },
  {
    icon : '',
    title: 'luxury',
    context : 'cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental an arrive in style.'
  }
]

function App() {
  return (
    <div className="App" style={{display : 'flex'}}>
      {
        cards.map(el => {

          return (
            
            <Card data={el} />

          )
        })
      }
    </div>
  );
}

export default App;
