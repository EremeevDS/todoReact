import React from 'react'

import {Button} from '../../UI'

import FilterStyles from './PostFilter.module.scss'

function PostFilter(props) {

   const {onFilter} = props

   const [activeButton, setActiveButton] = React.useState()

   const buttons = [
      {text: 'По важности', key: 'popular'},
      {text: 'По алфавиту', key: 'title'}
   ]
   const onUpdateFilter = (key) =>{
      setActiveButton(key)
      onFilter(key)
   }

   return (
      <div>
         {buttons.map(obj => (
            <Button 
               onClick={() => onUpdateFilter(obj.key)}
               key={obj.key}
               className={activeButton === obj.key ? FilterStyles.active : ''}
               >
               {obj.text}
            </Button>
         ))}
      </div>
   )
}

export default PostFilter
