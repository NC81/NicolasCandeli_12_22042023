export default class Format {
  constructor(raw_performance, raw_averageSessions, raw_activity) {
    this.raw_performance = raw_performance
    this.raw_averageSessions = raw_averageSessions
    this.raw_activity = raw_activity
  }

  get performance() {
    const newKind = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }
    const { data } = this.raw_performance

    data.map((el) => {
      return (el.type = newKind[el.kind])
    })

    return [...data].reverse()
  }

  get averageSessions() {
    const days = {
      0: '',
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    }
    let { sessions } = this.raw_averageSessions

    sessions = [
      { day: 0, sessionLength: sessions[0].sessionLength },
      ...sessions,
      { day: 0, sessionLength: sessions[6].sessionLength },
    ]

    sessions.map((el) => {
      return (el.dayLetter = days[el.day])
    })

    return sessions
  }

  get activity() {
    const { sessions } = this.raw_activity

    sessions.map((el) => {
      const dayString = el.day.split('-')[2]
      const dayCharactersArray = dayString.split('')

      return (el.dayNumber =
        dayCharactersArray[0] === '0'
          ? el.day.split('-')[2].replace('0', '')
          : el.day.split('-')[2])
    })

    return sessions
  }
}
