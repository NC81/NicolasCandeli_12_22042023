const mockData = require('../../data/mock-global')

/**
 * Find user object from mocked data with id
 * @param { Number } id User id as an integer
 * @return { Object } User data
 */
export function findMockUserMainData(id) {
  const userMainData = mockData.USER_MAIN_DATA.find((el) => el.id === id)
  return userMainData
}

export function findMockUserActivity(id) {
  const userActivity = mockData.USER_ACTIVITY.find((el) => el.userId === id)
  return userActivity
}

export function findMockUserAverageSessions(id) {
  const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(
    (el) => el.userId === id
  )
  return userAverageSessions
}

export function findMockUserPerformance(id) {
  const userPerformance = mockData.USER_PERFORMANCE.find(
    (el) => el.userId === id
  )
  return userPerformance
}
