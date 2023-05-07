const mockData = require('../data/mock-global')

export default class MockStore {
  constructor(id) {
    this.id = id
    this.isUserValid = this.main ? true : false
  }

  get main() {
    const userMain = mockData.USER_MAIN_DATA.find((el) => el.id === this.id)
    return userMain
  }

  get performance() {
    const userPerformance = mockData.USER_PERFORMANCE.find(
      (el) => el.userId === this.id
    )
    return userPerformance
  }

  get weekSessions() {
    const userWeekSessions = mockData.USER_AVERAGE_SESSIONS.find(
      (el) => el.userId === this.id
    )
    return userWeekSessions
  }

  get activity() {
    const userActivity = mockData.USER_ACTIVITY.find(
      (el) => el.userId === this.id
    )
    return userActivity
  }
}
