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
    const [raw_main, raw_activity, raw_averageSessions, raw_performance] =
      flatFinalData

    return {
      data: { raw_main, raw_activity, raw_averageSessions, raw_performance },
      httpError: error,
    }
  } catch (err) {
    return {
      netError: { message: `${err.name} : ${err.message}` },
    }
  }
}
