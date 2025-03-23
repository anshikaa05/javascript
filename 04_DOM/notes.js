// for class we use . and for id we use #
// document.getElementsByClassName('list-item')
// HTMLCollection(2) [li.list-item, li.list-item]
// const lists = document.getElementsByClassName('list-item') 
// undefined
// list
// VM1080:1 Uncaught ReferenceError: list is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1080:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// lists
// HTMLCollection(2) [li.list-item, li.list-item]
// const Converted = Array.from('lists')
// undefined
// Converted
// (5) ['l', 'i', 's', 't', 's']0: "l"1: "i"2: "s"3: "t"4: "s"length: 5[[Prototype]]: Array(0)
// document.getElementsByClassName('list-item')
// HTMLCollection(2) [li.list-item, li.list-item]
// const lists = document.getElementsByClassName('list-item') 
// undefined
// list
// VM1080:1 Uncaught ReferenceError: list is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1080:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// lists
// HTMLCollection(2) [li.list-item, li.list-item]0: li.list-item1: li.list-itemlength: 2[[Prototype]]: HTMLCollection
// const Converted = Array.from('lists')
// undefined
// Converted
// (5) ['l', 'i', 's', 't', 's']0: "l"1: "i"2: "s"3: "t"4: "s"length: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// Converted.forEach(function (i) {
//     i.style.color = 'white'
// })
// VM1467:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:19
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM1467:2
// (anonymous) @ VM1467:1
// Converted.forEach(function (i) {
//     i[0].style.color = 'white'
// })
// VM1476:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:22
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM1476:2
// (anonymous) @ VM1476:1
// Converted.forEach(function (l) {
//     l.style.color = 'white'
// })
// VM1488:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:19
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM1488:2
// (anonymous) @ VM1488:1
// Converted
// (5) ['l', 'i', 's', 't', 's']0: "l"1: "i"2: "s"3: "t"4: "s"length: 5[[Prototype]]: Array(0)
// Converted.forEach(function(li){
//     li.style.color = 'white'
// })
// VM1723:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:20
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM1723:2
// (anonymous) @ VM1723:1
// Converted.forEach(function (i) {
//     console.log("white")
// })
// 5VM1759:2 white
// undefined
// Converted.forEach(function (i) {
//     i.style.color = 'green'
// })
// VM1773:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:19
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:11
// (anonymous) @ VM1773:2
// (anonymous) @ VM1773:1
// Converted.forEach(function(i) {
//     i.color = 'green'
// })
// undefined
// const Converted = Array.from(lists)
// undefined
// lists
// HTMLCollection(2) [li.list-item, li.list-item]0: li.list-item1: li.list-itemlength: 2[[Prototype]]: HTMLCollection
// const Convertedone = Array.from(lists)
// undefined
// Convertedone
// (2) [li.list-item, li.list-item]0: li.list-item1: li.list-itemlength: 2[[Prototype]]: Array(0)
// Convertedone.forEach(function (i) {
//     i.style.color = 'green'
// })