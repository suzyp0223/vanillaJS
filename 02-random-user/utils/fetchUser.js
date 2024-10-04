const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log("data: ", data);
  const person = data.results[0];
  const { phone, email } = person;  // 구조분해할당. 두줄(개별변수)을 한줄로.
  // const phone = person.phone;
  // const email = person.email;

  const { large: image } = person.picture;  // 구조분해할당 후 다른이름(image)으로 사용
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age }
  } = person;
  const {
    street: { number, name }
  } = person.location;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  }
};

export default getUser;