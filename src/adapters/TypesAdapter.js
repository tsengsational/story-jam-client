const baseURL="http://localhost:3000/api/v1/types"
export default class TypesAdapter {
  static index(){
    return fetch(`${baseURL}`)
            .then(resp => resp.json())
  }

}
