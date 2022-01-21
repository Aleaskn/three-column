import React from 'react'
import './Icon.css'

interface IIcon {
  icon : string 
}

const Icon : React.FC<IIcon> = ({
  icon
}) => {

  const createAltIcon = (iconName : string | null) => {
    return iconName ? iconName.split('.')[0] : 'card-icon'
  } /* fa si che nell'alt vi sia il nome del file svg */

  return (
    <div className='icon'>

      <img src={require('../icon/' + icon)} alt={createAltIcon(icon)} />

    </div>
  )
}

export default Icon;