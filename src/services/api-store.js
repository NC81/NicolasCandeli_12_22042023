// export default class ApiStore {
//   constructor(id) {
//     this.id = id
//     this.data = {}
//   }

//   async initialize() {
//     const builder = [
//       ['', 'raw_main'],
//       ['activity', 'raw_activity'],
//       ['average-sessions', 'raw_averageSessions'],
//       ['performance', 'raw_performance'],
//     ]

//     for (const [resource, property] of builder) {
//       const userData = await this.fetchData(resource)
//       if (property === 'raw_main' && userData instanceof Response) {
//         this.error = userData
//         break
//       } else if (!(userData instanceof Response)) {
//         this.data[property] = userData
//       }
//     }
//   }

//   async fetchData(resource) {
//     try {
//       const response = await fetch(
//         `http://localhost:3000/user/${this.id}/${resource}`
//       )
//       const { data } = await response.json()
//       if (response.ok) {
//         return data
//       } else {
//         return response
//       }
//     } catch (err) {
//       return new Response('Test', {
//         statusText: 'Service Unavailable',
//       })
//     }
//   }
// }
