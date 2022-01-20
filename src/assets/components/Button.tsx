import './Button.css'
import { TypeOfTag } from 'typescript'

interface IButton {
  textButton : string 
}

const Button : React.FC<IButton> = ({
  textButton
}) => {
  return (

      <div className='button'>

        <a>{ textButton }</a>

      </div>

  )

}

export default Button;