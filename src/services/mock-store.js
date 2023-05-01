const mockData = require('../data/mock-global')

export default class MockStore {
  constructor(id) {
    this.id = id
  }

  get main() {
    const userMainData = mockData.USER_MAIN_DATA.find((el) => el.id === this.id)
    return userMainData
  }

  get _performance() {
    const userPerfData = mockData.USER_PERFORMANCE.find(
      (el) => el.userId === this.id
    )
    return userPerfData
  }

  // get activity() {
  //   const userActivity = mockData.USER_ACTIVITY.find(
  //     (el) => el.userId === this.id
  //   )
  //   return userActivity
  // }

  // get sessions() {
  //   const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(
  //     (el) => el.userId === this.id
  //   )
  //   return userAverageSessions
  // }
}
