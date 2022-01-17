import './Card.css';
import { TypeOfTag } from 'typescript'
import { ReactComponent as IconSedans } from '../icon/icon-sedans.svg';
import { ReactComponent as IconLuxury } from '../icon/icon-luxury.svg';
import { ReactComponent as IconSuvs } from '../icon/icon-suvs.svg';
import InfoButton from './InfoButton';


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

    <section className='card__container'>

      <div className='card'>
                
           <div className='card__title'>
                    
               <h2>{ data.title}</h2>

          </div>

          <p className='card__text'> { data.context } </p>

            <InfoButton />

      </div>

    </section>
  )
}

export default Card;