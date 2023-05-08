import Format from '../utils/format'

export default class ApiStore {
  constructor(id) {
    this.id = id
  }

  async initialize() {
    this.main = await this.constructor.fetchData(this.id, '')
    this.userIsValid = this.main ? true : false
    // prettier-ignore
    if (this.userIsValid) {
      this.firstName = this.main.userInfos.firstName
      this.score = this.main.todayScore ?? this.main.score
      this.keyData = this.main.keyData
      this.raw_performance = await this.constructor.fetchData(this.id, 'performance')
      this.raw_averageSessions = await this.constructor.fetchData(this.id, 'average-sessions')
      this.raw_activity = await this.constructor.fetchData(this.id, 'activity')

      const newFormat = new Format(
        this.raw_performance,
        this.raw_averageSessions,
        this.raw_activity
      )
      this.performance = newFormat.performance
      this.averageSessions = newFormat.averageSessions
      this.activity = newFormat.activity
    }
  }

  static async fetchData(id, path) {
    try {
      const newFetch = await fetch(`http://localhost:3000/user/${id}/${path}`)
      var { data } = await newFetch.json()
    } catch (err) {
      console.log(err)
    } finally {
      return data
    }
  }
}
