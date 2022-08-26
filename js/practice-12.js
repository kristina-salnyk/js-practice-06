// const  getUser = userId => {
//   const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//   return fetch(url).then(res => res.json());
// };
//
// getUser(1).then(user => console.log(user));

// const makeAbbr = words => words.split(' ').map(word => word[0]).join('').toUpperCase();
//
// console.log(makeAbbr('my great string'));



async function fetchCity(city){
  console.log('start fetch: ', city);
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=878edb375c3746b09be132732221508&q=${city}`);
  console.log('end fetch: ', city);
  
  return response.json();
}

async function getWeather() {
  console.time('FETCH');

  const arr = ['Lviv', 'Kiev', 'Dnipro', 'Kharkiv'];

  const allResponse = arr.map(fetchCity);

  const cities = await Promise.all(allResponse);
  console.log(cities);
  console.timeEnd('FETCH');
}

getWeather();