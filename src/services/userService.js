import history from "../history";

class UserService {
  static BACKEND_URL = "http://tehnicki-pregled.hopto.org/api/v1/users";
  static async login(email, password) {
    fetch(this.BACKEND_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw Error("Error while logging in, please try again!");
      })
      .then((token) => {
        console.log(token);
        localStorage.setItem("token", token.token);
        history.push("/main");
      })
      .catch((err) => {
        localStorage.removeItem("token");
        console.log(err);
      });
  }
  static async getMe() {
    return fetch(this.BACKEND_URL + "/me", {
      method: "GET",
      headers: { "Authorization": localStorage.getItem("token") }
    }).then((res) => {
      return res.json()
    })
  }
}

export default UserService;
