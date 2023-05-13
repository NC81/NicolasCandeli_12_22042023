const mockData = require('../../data/mock-data')

export default class MockStore {
  main
  raw_activity
  raw_averageSessions
  raw_performance

  constructor(id) {
    this.id = id
    this.main = this.findData(mockData.USER_MAIN_DATA)
    this.raw_activity = this.findData(mockData.USER_ACTIVITY)
    this.raw_averageSessions = this.findData(mockData.USER_AVERAGE_SESSIONS)
    this.raw_performance = this.findData(mockData.USER_PERFORMANCE)

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

  findData(array) {
    const userData = array.find((el) => el.id ?? el.userId === this.id)
    return userData
  }
}
