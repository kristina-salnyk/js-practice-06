// DOM

let count = 1;

const wait = t =>
  new Promise(res => {
    setTimeout(() => res(), t);
  });

const sort = async (arr, compare, swap) => {
  arr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const rez = compare(arr[i], arr[j]);
      if (rez > 0) {
        // console.log('swap', { i, j, arr_i: arr[i], arr_j: arr[j] });
        // const c = arr[i];
        // arr[i] = arr[j];
        // arr[j] = c;

        await swap(arr, i, j);

        count++;
      }
    }
  }
  return arr;
};

const arr = [8, 3, 6, 2, 4, 9, 1];

const getSpan = n => `<span style="margin: 10px;">${n}</span>`;

const arrayOfSpans = arr.map(getSpan);

const elementsMarkup = arrayOfSpans.join('');

document.body.insertAdjacentHTML('afterbegin', `<div id="sort">${elementsMarkup}</div>`);

const div = document.getElementById('sort');

const elems = div.childNodes;

const compare = (a, b) => Number(a.textContent) - Number(b.textContent);

const swap = async (nodeList, i, j) => {
  nodeList[i].style.color = 'red';
  nodeList[j].style.color = 'blue';

  await wait(1000);

  const c = nodeList[i].textContent;
  nodeList[i].textContent = nodeList[j].textContent;
  nodeList[j].textContent = c;

  nodeList[i].style.color = 'black';
  nodeList[j].style.color = 'black';
};

sort(elems, compare, swap);

console.log(Number(div.childNodes[0].textContent));
