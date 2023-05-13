import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

export default class Format {
  constructor(raw_activity, raw_averageSessions, raw_performance, raw_keyData) {
    this.raw_activity = raw_activity
    this.raw_averageSessions = raw_averageSessions
    this.raw_performance = raw_performance
    this.raw_keyData = raw_keyData
  }

  get activity() {
    const { sessions } = this.raw_activity

    sessions.map((el) => {
      const dayString = el.day.split('-')[2]
      const dayCharactersArray = dayString.split('')

      return (el.dayStringNumber =
        dayCharactersArray[0] === '0'
          ? el.day.split('-')[2].replace('0', '')
          : el.day.split('-')[2])
    })

    return sessions
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

  get performance() {
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

    data.map((el) => {
      return (el.type = newKind[kind[el.kind]])
    })

    const newData = [...data].reverse()

    return newData
  }

  get keyData() {
    let { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
      this.raw_keyData

    calorieCount = {
      name: 'Calories',
      value: calorieCount.toLocaleString('en-US'),
      unit: 'kCal',
      color: 'rgba(255, 0, 0, 0.07)',
      icon: `${energy}`,
      alt: 'Flamme',
    }
    proteinCount = {
      name: 'Protéines',
      value: proteinCount.toLocaleString('en-US'),
      unit: 'g',
      color: 'rgba(74, 184, 255, 0.1)',
      icon: `${chicken}`,
      alt: 'Poulet',
    }
    carbohydrateCount = {
      name: 'Glucides',
      value: carbohydrateCount.toLocaleString('en-US'),
      unit: 'g',
      color: 'rgba(249, 206, 35, 0.1)',
      icon: `${apple}`,
      alt: 'Pomme',
    }
    lipidCount = {
      name: 'Lipides',
      value: lipidCount.toLocaleString('en-US'),
      unit: 'g',
      color: 'rgba(253, 81, 129, 0.1)',
      icon: `${cheeseburger}`,
      alt: 'Burger',
    }

    return { calorieCount, proteinCount, carbohydrateCount, lipidCount }
  }
}
