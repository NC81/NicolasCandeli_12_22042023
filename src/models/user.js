import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

/**
 * Class representing user data model used in profile page
 *
 * @param {Object} raw_data - All user raw data
 * @param {Object} raw_data.main - User main information raw data
 * @param {Object} raw_data.activity - User daily activity raw data
 * @param {Object} raw_data.averageSessions - User average sessions raw data
 * @param {Object} raw_data.performance - User performance per activity type raw data
 * @property {String} firstName - User first name
 */
export default class User {
  constructor(raw_data) {
    this.raw_data = raw_data
    this.firstName = raw_data.main.userInfos.firstName
  }

  /**
   * Getter that converts activity raw data into usable bar chart data
   *
   * @returns {Array} Array of objects with new X axis tick name
   */
  get activity() {
    if (!this.raw_data.activity || !this.raw_data.activity.sessions) {
      return undefined
    }

    const { sessions } = this.raw_data.activity

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

  /**
   * Getter that converts average sessions raw data into usable line chart data
   *
   * @returns {Array} Extended array of objects with new X axis tick name
   */
  get averageSessions() {
    if (
      !this.raw_data.averageSessions ||
      !this.raw_data.averageSessions.sessions
    ) {
      return undefined
    }

    let { sessions } = this.raw_data.averageSessions

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

  /**
   * Getter that converts performance raw data into usable radar chart data
   *
   * @returns {Array} Array of objects with new polar angle axis tick name
   */
  get performance() {
    if (
      !this.raw_data.performance ||
      !this.raw_data.performance.data ||
      !this.raw_data.performance.kind
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
    const { data } = this.raw_data.performance
    const { kind } = this.raw_data.performance

    const newData = data.map((el) => {
      return { ...el, type: newKind[kind[el.kind]] }
    })

    return newData.reverse()
  }

  /**
   * Getter that converts score rate raw data into usable pie chart data
   *
   * @returns {Array} Array of two objects illustrating slices for score and the rest
   */
  get score() {
    if (!this.raw_data.main.todayScore && !this.raw_data.main.score) {
      return undefined
    }

    const score = this.raw_data.main.todayScore ?? this.raw_data.main.score
    const scoreAsPercent = score * 100
    const restAsPercent = 100 - scoreAsPercent

    const data = [
      {
        value: scoreAsPercent,
        fill: 'red',
      },
      {
        value: restAsPercent,
        fill: 'transparent',
      },
    ]

    return data
  }

  /**
   * Getter that replaces key infos properties to facilitate InfoCard component rendering
   *
   * @returns {Object} Object of four objects used to render key info name, formatted value,
   * unit of measure, background color, image icon and alternative text in each card
   */
  get keyData() {
    if (!this.raw_data.main.keyData) {
      return undefined
    }

    let { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
      this.raw_data.main.keyData

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
