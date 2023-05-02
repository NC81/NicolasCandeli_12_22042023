import MockStore from '../services/mock-store'

export default class User extends MockStore {
  get performance() {
    const newKind = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    }
    const { data } = super._performance

    data.map((el) => {
      return (el.name = newKind[el.kind])
    })

    return data.toReversed()
  }

  get weekSessions() {
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
    const { sessions } = super._weekSessions

    if (sessions.length === 7) {
      sessions.unshift({ day: 0, sessionLength: sessions[0].sessionLength })
      sessions.push({ day: 0, sessionLength: sessions[7].sessionLength })
    }

    sessions.map((el) => {
      return (el.name = days[el.day])
    })

    return sessions
  }
}
