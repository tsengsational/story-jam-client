const baseURL="http://localhost:3000/api/v1/jams"
export default class JamsAdapter {
  static show(id){
    return fetch(`${baseURL}/${id}`)
            .then(resp => resp.json())
  }

}
