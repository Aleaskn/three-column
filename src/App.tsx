import React from 'react';
import './App.css';
import Card from './assets/components/Card';

const cards = [
  {
    icon : 'icon-sedans.svg',
    title: 'sedans',
    context : 'chose the sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button : 'learn more',
    buttonAn : 'hsl(31, 77%, 52%)',
    backgroundColor: 'hsl(31, 77%, 52%)'
  },
  {
    icon : 'icon-suvs.svg',
    title: 'suvs',
    context : 'take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    button : 'learn more',
    buttonAn : 'hsl(184, 100%, 22%)',
    backgroundColor: 'hsl(184, 100%, 22%)'
  },
  {
    icon : 'icon-luxury.svg',
    title: 'luxury',
    context : 'cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental an arrive in style.',
    button : 'learn more',
    buttonAn : 'hsl(179, 100%, 13%)',
    backgroundColor: 'hsl(179, 100%, 13%)'
  }
]

function App() {
  return (
    <div className="App" style={{display : 'flex'}}>

      <section className='cards-container'>

      {
        cards.map((el, index) => {

          return (

            <React.Fragment key={ 'card' + index }>

             <Card data={el} />

            </React.Fragment>
          )
        })
      }

      </section>
    </div>
  );
}

export default App;


