import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

export default class User {
  constructor(object) {
    this.raw_main = object.raw_main
    this.raw_activity = object.raw_activity
    this.raw_averageSessions = object.raw_averageSessions
    this.raw_performance = object.raw_performance
    this.firstName = this.raw_main.userInfos.firstName
    this.score = this.raw_main.todayScore ?? this.raw_main.score
  }

  get activity() {
    if (!this.raw_activity) {
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
            ? el.day.split('-')[2].replace('0', '')
            : el.day.split('-')[2],
      }
    })

    return newSessions
  }

  get averageSessions() {
    if (!this.raw_averageSessions) {
      return undefined
    }

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
    const { sessions } = this.raw_averageSessions

    let newSessions = [
      { day: 0, sessionLength: sessions[0].sessionLength },
      ...sessions,
      { day: 0, sessionLength: sessions[6].sessionLength },
    ]

    newSessions = newSessions.map((el) => {
      return { ...el, dayLetter: days[el.day] }
    })

    return newSessions
  }

  get performance() {
    if (!this.raw_performance) {
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

    const { keyData } = this.raw_main
    let { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData

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
