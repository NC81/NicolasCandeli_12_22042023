const mockData = require('../data/mock-data')
export default class MockStore {
  constructor(id) {
    this.id = id
    this.data = {}

    const builder = [
      [mockData.USER_MAIN_DATA, 'raw_main'],
      [mockData.USER_ACTIVITY, 'raw_activity'],
      [mockData.USER_AVERAGE_SESSIONS, 'raw_averageSessions'],
      [mockData.USER_PERFORMANCE, 'raw_performance'],
    ]

    for (const [array, property] of builder) {
      const userData = this.findData(array)
      if (property === 'raw_main' && !userData) {
        this.error = true
        break
      } else if (userData) {
        this.data[property] = userData
      }
    }
  }

  findData(array) {
    const userData = array.find((el) => (el.id ?? el.userId) === this.id)
    return userData
  }
}
