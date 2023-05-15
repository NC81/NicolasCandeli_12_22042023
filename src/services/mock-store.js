const mockData = require('../data/mock-data')

export default class MockStore {
  constructor(id) {
    this.id = id
    this.raw_main = this.findData(mockData.USER_MAIN_DATA)
    if (this.raw_main) {
      this.raw_activity = this.findData(mockData.USER_ACTIVITY)
      this.raw_averageSessions = this.findData(mockData.USER_AVERAGE_SESSIONS)
      this.raw_performance = this.findData(mockData.USER_PERFORMANCE)
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
    return []
  }

  findData(array) {
    const userData = array.find((el) => el.id ?? el.userId === this.id)
    return userData
  }
}
