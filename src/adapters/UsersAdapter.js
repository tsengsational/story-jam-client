const baseURL="http://localhost:3000/api/v1/users"

export default class UsersAdapter {

  static post(data){
    return fetch(`${baseURL}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(resp=>resp.json())
  }

  static show(id){
    return fetch(`${baseURL}/${id}`)
      .then(resp => resp.json())
  }

  static patch(data){
    return fetch(`${baseURL}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(resp=>resp.json())

  }

}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
