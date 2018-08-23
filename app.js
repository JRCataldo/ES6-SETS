// SETS - store unique values of any type

const set1 = new Set(); 

// add values to set 

set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);



const set2 = new Set([1, true, 'string']);
console.log(set2);
console.log(set1);


// get count
console.log(set1.size);

// check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'john'}));

// delete from set
set1.delete(100);
set1.delete(true);

console.log(set1);


// Iterate through sets

// for..of
for(let item of set1){
  console.log(item);
}

// foreach loop

set1.forEach((values) => {
  console.log(value);
});

// convert set to array
const setArray = Array.from(set1);
console.log(setArray);
