import React from 'react'

const RecipeCard = (props) => {
  return (
    <div className="flex flex-col justify-center align-center mx-auto w-3/4 p-8">
      {props.children}
    </div>
  )
}

export default RecipeCard