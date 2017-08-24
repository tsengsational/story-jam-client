const baseURL="http://localhost:3000/api/v1/types"
export default class TypesAdapter {
  static index(){
    return fetch(`${baseURL}`, {
      headers: headers()
    })
            .then(resp => resp.json())
  }

}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('jwt')
  }
}
