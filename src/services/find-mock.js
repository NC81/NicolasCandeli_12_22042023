const mockData = require('../data/mock-data')

/**
 * Object of user mock data and error boolean
 *
 * @typedef {Object} mockUser
 * @property {Object} raw_data - User mock data from 4 local sources
 * @property {Response} isError - Indicates whether an error has occured
 */

/**
 * Function that finds user mock data required for profile page
 *
 * @param {Number} id - User ID
 * @return {mockUser} Object of user mock data and error boolean
 */
export default function findMock(id) {
  const builder = [
    [mockData.USER_MAIN_DATA, 'main'],
    [mockData.USER_ACTIVITY, 'activity'],
    [mockData.USER_AVERAGE_SESSIONS, 'averageSessions'],
    [mockData.USER_PERFORMANCE, 'performance'],
  ]

  let raw_data = {}
  for (const [array, property] of builder) {
    const userData = array.find((el) => (el.id ?? el.userId) === id)
    if (property === 'main' && !userData) {
      var isError = true
      break
    } else if (userData) {
      raw_data[property] = userData
    }
  }

  return {
    raw_data: raw_data,
    isError: isError,
  }
}
