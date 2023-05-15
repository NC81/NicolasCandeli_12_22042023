export default class ApiStore {
  constructor(id) {
    this.id = id
  }

  async initialize() {
    this.raw_main = await this.fetchData('')
    if (this.raw_main) {
      this.raw_activity = await this.fetchData('activity')
      this.raw_averageSessions = await this.fetchData('average-sessions')
      this.raw_performance = await this.fetchData('performance')
      if (
        this.raw_activity &&
        this.raw_averageSessions &&
        this.raw_performance
      ) {
        return [
          this.raw_main,
          this.raw_activity,
          this.raw_averageSessions,
          this.raw_performance,
        ]
      }
    }
    console.log('[]')
    return []
  }

  async fetchData(resource) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.id}/${resource}`
      )
      const { data } = await response.json()
      if (response.ok) {
        return data
      } else {
        throw new Response('Fetch error: the response was not successful', {
          status: 404,
        })
      }
    } catch (err) {
      console.error(err)
    }
  }
}
