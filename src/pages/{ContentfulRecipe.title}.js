import React from "react"

const RecipeTemplate = props => {
  console.log(props)
  return (
    <div>
      <h4>Recipe Template</h4>
      <h5>{props.params.title}</h5>
    </div>
  )
}
export default RecipeTemplate
