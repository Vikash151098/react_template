const getMovie = async (update) => {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((res) => {
      update(res)
    })
}

export { getMovie }
