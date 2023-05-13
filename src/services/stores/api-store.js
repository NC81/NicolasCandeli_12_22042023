export default class ApiStore {
  main
  raw_activity
  raw_averageSessions
  raw_performance

  constructor(id) {
    this.id = id
  }

  async initialize() {
    this.main = await this.fetchData('')
    this.raw_activity = await this.fetchData('activity')
    this.raw_averageSessions = await this.fetchData('average-sessions')
    this.raw_performance = await this.fetchData('performance')
    if (
      this.main &&
      this.raw_activity &&
      this.raw_averageSessions &&
      this.raw_performance
    ) {
      return [
        this.main,
        this.raw_activity,
        this.raw_averageSessions,
        this.raw_performance,
      ]
    }
    return []
  }

  async fetchData(path) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.id}/${path}`
      )
      const { data } = await response.json()
      if (response.ok) {
        return data
      } else {
        throw new Response(`Fetch error: the response was not successful `, {
          status: 404,
        })
      }
    } catch (err) {
      console.error(err)
    }
  }
}
