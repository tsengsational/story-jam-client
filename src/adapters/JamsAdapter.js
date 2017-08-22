const baseURL="http://localhost:3000/api/v1/jams"
export default class JamsAdapter {
  static show(id){
    return fetch(`${baseURL}/${id}`)
            .then(resp => resp.json())
  }

  static post(data){

    return fetch(`${baseURL}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(resp=>resp.json())

  }

} // end class

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
  }
}
