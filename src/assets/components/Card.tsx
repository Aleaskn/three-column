import './Card.css';
import { TypeOfTag } from 'typescript'
import Button from './Button'
import Icon from './Icon'


interface ICard {
  icon : string,
  title : string,
  context : string,
  button : string
}

interface ICardAllData {
  data : ICard 
}

const Card : React.FC<ICardAllData> = ({
  data
}) => {
  return (

    


        <section className='card__container'>

          <div className='card'>

                <div className='card-icon'>

                  <Icon icon={ data.icon } />

                </div>
                
              <div className='card__title'>
                    
                 <h2>{ data.title}</h2>

              </div>

             <p className='card__text'> { data.context } </p>

              <Button textButton={ data.button }/> 

          </div>

        </section>


  )
}

export default Card;