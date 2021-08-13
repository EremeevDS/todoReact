import React from 'react'

function Button(props) {
   return (
      <button
         onClick={props.onClick}
         className={props.className}
         value={props.value}
         >
         {props.children}
      </button>
   )
}

export default Button
