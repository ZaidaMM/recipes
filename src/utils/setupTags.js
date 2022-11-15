const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    // console.log(recipe.content)
    recipe.content.tags.forEach(tag => {
      // console.log(tag)
      if (allTags[tag]) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  console.log(allTags)

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b

    return firstTag.localeCompare(secondTag)
  })

  return newTags
}
export default setupTags
