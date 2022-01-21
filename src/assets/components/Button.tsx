import './Button.css'
import { TypeOfTag } from 'typescript'

interface IButton {
  textButton : string,
  linkColor : string
}

const Button : React.FC<IButton> = ({
  textButton,
  linkColor
}) => {
  return (

      <div className='button'>

        <a style={{color : linkColor}}>{ textButton }</a>

      </div>

  )

}

export default Button;