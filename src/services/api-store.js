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
      this.raw_activity = await this.constructor.fetchData(this.id, 'activity')
      this.raw_averageSessions = await this.constructor.fetchData(this.id, 'average-sessions')
      this.raw_performance = await this.constructor.fetchData(this.id, 'performance')
      this.raw_keyData = this.main.keyData

      const newFormat = new Format(
        this.raw_activity,
        this.raw_averageSessions,
        this.raw_performance,
        this.raw_keyData
      )
      this.activity = newFormat.activity
      this.averageSessions = newFormat.averageSessions
      this.performance = newFormat.performance
      this.keyData = newFormat.keyData
    }
  }

  static async fetchData(id, path) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/${path}`)
      var { data } = await response.json()
    } catch (err) {
      console.log(err)
    } finally {
      return data
    }
  }
}
