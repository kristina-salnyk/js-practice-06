const  getUser = userId => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return fetch(url).then(res => res.json());
};

getUser(1).then(user => console.log(user));