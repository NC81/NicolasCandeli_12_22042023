export default class ApiStore {
  constructor(id) {
    this.id = id
    this.data = {}
  }

  async initialize() {
    const builder = [
      ['', 'raw_main'],
      ['activity', 'raw_activity'],
      ['average-sessions', 'raw_averageSessions'],
      ['performance', 'raw_performance'],
    ]

    for (const [resource, property] of builder) {
      const response = await this.fetchData(resource)
      if (property === 'raw_main' && response instanceof Response) {
        this.error = response
        break
      } else if (!(response instanceof Response)) {
        this.data[property] = response
      }
    }
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
        throw response
      }
    } catch (err) {
      if (err instanceof Response) {
        return err
      } else {
        return new Response('Test', {
          status: 404,
          statusText: 'Service Unavailable',
        })
      }
    }
  }
}
