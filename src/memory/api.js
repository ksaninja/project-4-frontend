import apiUrl from '../apiConfig'
import axios from 'axios'



export const findAll = ( user) => {
    return axios({
      url: apiUrl + '/memories',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token token=${user.token}` // FOR RAILS
      }
    })
}

export const destroy = ( user,id) => {
    return axios({
      url: apiUrl + '/memories/'+id,
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token token=${user.token}` // FOR RAILS
      }
    })
}

//   data: {
//     passwords: {
//       old: passwords.oldPassword,
//       new: passwords.newPassword
//     }
//   }