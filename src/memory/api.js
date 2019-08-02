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

export const create = ( user,memory) => {
    return axios({
      url: apiUrl + '/memories',
      method: 'post',
      headers: {
        'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token token=${user.token}` // FOR RAILS

      },

  data: {
    memory:memory
  }
    })
}


export const update = ( user,id,memory) => {
    return axios({
      url: apiUrl + '/memories/'+id,
      method: 'put',
      headers: {
        'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        // 'Authorization': `Token token=${user.token}` // FOR RAILS

      },

  data: {
    memory:memory
  }
    })
}
export const find = ( user,id) => {
    return axios({
      url: apiUrl + '/memories/'+id,
      method: 'get',
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