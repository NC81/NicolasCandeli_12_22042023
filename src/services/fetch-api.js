/**
 * Function that fetches user API data required for profile page
 *
 * @param {String} id - User ID
 * @return {{data: Object, httpError: Response}} User raw data object and error response if an HTTP error occurs
 * @return {{netError: String}} String of error's name/message if a network error occurs
 */
export default async function fetchAPI(id) {
  try {
    const responses = await Promise.all([
      fetch(`http://localhost:3000/user/${id}/`),
      fetch(`http://localhost:3000/user/${id}/activity`),
      fetch(`http://localhost:3000/user/${id}/average-sessions`),
      fetch(`http://localhost:3000/user/${id}/performance`),
    ])

    let error
    const jsonPromises = responses.map((response) =>
      response.ok
        ? response.json()
        : response.url === `http://localhost:3000/user/${id}/`
        ? (error = response) && undefined
        : undefined
    )
    const finalData = await Promise.all(jsonPromises)
    const flatFinalData = finalData.map((el) => (el ? el.data : undefined))
    const [main, activity, averageSessions, performance] = flatFinalData

    return {
      raw_data: { main, activity, averageSessions, performance },
      httpError: error,
    }
  } catch (err) {
    return {
      netError: `${err.name}: ${err.message}`,
    }
  }
}
