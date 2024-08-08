import { createList } from './index.mjs';

const list = createList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());

list.prepend('horse');
console.log(list.toString());

console.log(list.size());

console.log(list.head());

console.log(list.tail());

console.log(list.at(4));

list.pop();
console.log(list.toString());

console.log(list.contains('parrot'));

console.log(list.find('cat'));

list.insertAt('crocodile', 2);
console.log(list.toString());

list.removeAt(4);
console.log(list.toString());
