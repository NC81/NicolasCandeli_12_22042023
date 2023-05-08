import Format from '../utils/format'

const mockData = require('../data/mock-global')

export default class MockStore {
  constructor(id) {
    this.id = id
    this.userIsValid = this.main ? true : false

    if (this.userIsValid) {
      this.firstName = this.main.userInfos.firstName
      this.keyData = this.main.keyData
      this.score = this.main.todayScore ?? this.main.score

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

  get main() {
    const userMain = mockData.USER_MAIN_DATA.find((el) => el.id === this.id)
    return userMain
  }

  get raw_performance() {
    const userPerformance = mockData.USER_PERFORMANCE.find(
      (el) => el.userId === this.id
    )
    return userPerformance
  }

  get raw_averageSessions() {
    const userWeekSessions = mockData.USER_AVERAGE_SESSIONS.find(
      (el) => el.userId === this.id
    )
    return userWeekSessions
  }

  get raw_activity() {
    const userActivity = mockData.USER_ACTIVITY.find(
      (el) => el.userId === this.id
    )
    return userActivity
  }
}
