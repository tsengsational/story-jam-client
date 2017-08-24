const baseURL="http://localhost:3000/api/v1/cards"
export default class CardsAdapter {
  static index(){
    return fetch(`${baseURL}`)
            .then(resp => resp.json())
  }

}
