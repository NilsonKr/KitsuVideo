const fetchData = async (api) => {
  try {
    
    const data = await fetch(api)
    const response = await data.json()
    return response

  } catch (error) {
    console.log(error)
  }
}

export default fetchData 