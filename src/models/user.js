import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

export default class User {
  constructor(data) {
    this.raw_main = data.raw_main
    this.raw_activity = data.raw_activity
    this.raw_averageSessions = data.raw_averageSessions
    this.raw_performance = data.raw_performance
    this.firstName = data.raw_main.userInfos.firstName
    this.score = data.raw_main.todayScore ?? data.raw_main.score
  }

  get activity() {
    if (!this.raw_activity || !this.raw_activity.sessions) {
      return undefined
    }

    const { sessions } = this.raw_activity

    const newSessions = sessions.map((el) => {
      const dayString = el.day.split('-')[2]
      const dayCharactersArray = dayString.split('')

      return {
        ...el,
        dayStringNumber:
          dayCharactersArray[0] === '0'
            ? dayString.replace('0', '')
            : dayString,
      }
    })

    return newSessions
  }

  get averageSessions() {
    if (!this.raw_averageSessions || !this.raw_averageSessions.sessions) {
      return undefined
    }

    let { sessions } = this.raw_averageSessions

    let newSessions = [
      { day: 0, sessionLength: sessions[0].sessionLength },
      ...sessions,
      { day: 0, sessionLength: sessions[6].sessionLength },
    ]

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
    newSessions = newSessions.map((el) => {
      return { ...el, dayLetter: days[el.day] }
    })

    return newSessions
  }

  get performance() {
    if (
      !this.raw_performance ||
      !this.raw_performance.data ||
      !this.raw_performance.kind
    ) {
      return undefined
    }

    const newKind = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }
    const { data } = this.raw_performance
    const { kind } = this.raw_performance

    const newData = data.map((el) => {
      return { ...el, type: newKind[kind[el.kind]] }
    })

    return newData.reverse()
  }

  get keyData() {
    if (!this.raw_main.keyData) {
      return undefined
    }

    let { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
      this.raw_main.keyData

    calorieCount = {
      name: 'Calories',
      value: calorieCount ? calorieCount.toLocaleString('en-US') : undefined,
      unit: 'kCal',
      color: 'rgba(255, 0, 0, 0.07)',
      icon: `${energy}`,
      alt: 'Flamme',
    }
    proteinCount = {
      name: 'Protéines',
      value: proteinCount ? proteinCount.toLocaleString('en-US') : undefined,
      unit: 'g',
      color: 'rgba(74, 184, 255, 0.1)',
      icon: `${chicken}`,
      alt: 'Poulet',
    }
    // prettier-ignore
    carbohydrateCount = {
      name: 'Glucides',
      value: carbohydrateCount ? carbohydrateCount.toLocaleString('en-US') : undefined,
      unit: 'g',
      color: 'rgba(249, 206, 35, 0.1)',
      icon: `${apple}`,
      alt: 'Pomme',
    }
    lipidCount = {
      name: 'Lipides',
      value: lipidCount ? lipidCount.toLocaleString('en-US') : undefined,
      unit: 'g',
      color: 'rgba(253, 81, 129, 0.1)',
      icon: `${cheeseburger}`,
      alt: 'Burger',
    }

    return { calorieCount, proteinCount, carbohydrateCount, lipidCount }
  }
}
