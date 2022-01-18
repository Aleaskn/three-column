import './Card.css';
import { TypeOfTag } from 'typescript'
import { ReactComponent as IconSedans } from '../icon/icon-sedans.svg';
import { ReactComponent as IconLuxury } from '../icon/icon-luxury.svg';
import { ReactComponent as IconSuvs } from '../icon/icon-suvs.svg';
//import Button from './Brutton';


interface ICard {
  icon : string,
  title : string,
  context : string
}

interface ICardAllData {
  data : ICard 
}

const Card : React.FC<ICardAllData> = ({
  data
}) => {
  return (

    <section className='all-cards'>

     <div className='cards-sum'>

       <section className='card__container'>

         <div className='card'>

               <div className='card-icon'>

                 {/*{require('../icon/' + data.icon)}*/}

                </div>
                
             <div className='card__title'>
                    
                 <h2>{ data.title}</h2>

              </div>

             <p className='card__text'> { data.context } </p>

               <div className='button'>

                 <h3>learn more</h3>

               </div>

          </div>

        </section>

      </div>

    </section>
  )
}

export default Card;