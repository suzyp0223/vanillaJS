import displayUser from "./utils/displayUser.js";
import getUser from "./utils/fetchUser.js";

const showUser = async () => {
  const person = await getUser();

  displayUser(person);

}



window.addEventListener('DOMContentLoaded', showUser);