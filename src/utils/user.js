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
}
