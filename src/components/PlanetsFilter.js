export const PlanetsFilter = (props) => {
  console.log('filter', props)
  if (props === 'Terrain') {
    return [
      {
        text: 'desert',
        value: 'desert',
      },
      {
        text: 'grasslands',
        value: 'grasslands',
      },
      {
        text: 'jungle',
        value: 'jungle',
      },
      {
        text: 'tundra',
        value: 'tundra',
      },
      {
        text: 'swamp',
        value: 'swamp',
      },
    ]
  } else if (props === 'Climate') {
    return [
      {
        text: 'arid',
        value: 'arid',
      },
      {
        text: 'temperate',
        value: 'temperate',
      },
      {
        text: 'frozen',
        value: 'frozen',
      },
      {
        text: 'murky',
        value: 'murky',
      },
    ]
  } else {
    return null
  }
}