// for all api cals

import axios from 'axios'

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },

//   // where api key lives VVVV
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '9eb72c85fcmsh863162a99199a06p1dbd8ejsn4080fa86462e',
//   },
// }

// get data from API about surrounding places
export const getPlacesData = async (sw, ne) => {
  try {
    // destructure request from 'const response' to:
    const {
      data: { data },
    } = await axios.get(
      'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          limit: 15,
        },

        // where api key lives VVVV
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '9eb72c85fcmsh863162a99199a06p1dbd8ejsn4080fa86462e',
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
