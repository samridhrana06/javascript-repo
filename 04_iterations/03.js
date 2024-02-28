// for of

// ["","",""]

// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr)
{
console.log(num);
}

// maps 

const map = new Map()
map.set('IN', "India")
map.set('USA','United States of Americca')
map.set('Fr','France')

console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject = {
    'game 1': 'NFS',
    'game 2': 'GAT',
    'game 3': 'FIFA'
}

// for (const [key,value] of myObject) {
//     console.log(key ,':-',value);
// }

