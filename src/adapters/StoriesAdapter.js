const baseURL="http://localhost:3000/api/v1/stories"
export default class StoriesAdapter {

  static get(id){
    return fetch(`${baseURL}/${id}`)
            .then(resp => resp.json())
  }

  static post(data){
    console.log(data)

    return fetch(`${baseURL}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(resp=>resp.json())

  }

}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('jwt')

  }
}
