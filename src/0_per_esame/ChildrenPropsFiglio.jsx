import React from 'react'

const ChildrenPropsFiglio = (props) => {
  return (
    <div>
        Sono figlio
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default ChildrenPropsFiglio