export class ApiService {
  _url = `https://api.github.com/search/users?q=`

  getUsers() {
    return fetch(`${this._url}`).then((res) => res.json())
  }
  getUserId(id) {
    return fetch(`${this._url}${id}`).then((res) => res.json())
  }
}
