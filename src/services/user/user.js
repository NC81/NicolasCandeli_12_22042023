import Format from './format'

export default class User {
  firstName
  score
  activity
  averageSessions
  performance
  keyData

  constructor(main, raw_activity, raw_averageSessions, raw_performance) {
    this.main = main
    this.raw_activity = raw_activity
    this.raw_averageSessions = raw_averageSessions
    this.raw_performance = raw_performance
    this.raw_keyData = this.main.keyData

    const newFormat = new Format(
      this.raw_activity,
      this.raw_averageSessions,
      this.raw_performance,
      this.raw_keyData
    )
    this.firstName = this.main.userInfos.firstName
    this.score = this.main.todayScore ?? this.main.score
    this.activity = newFormat.activity
    this.averageSessions = newFormat.averageSessions
    this.performance = newFormat.performance
    this.keyData = newFormat.keyData
  }
}
