const  stack = require('./index1')
const s= new stack (2)
s.push(3)
const ok = s.push(5)
const  rejected= s.push(10)
console.log('ok',ok,'Rejected',rejected)
const poped = s.pop()
console.log('Poped',poped)