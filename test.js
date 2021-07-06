const Stack = require('./index');
const chalk = require('chalk')
const s= new Stack()
console.log(chalk.red('isEmpty 1',s.isEmpty(),s.size()))
s.push({
    name: 'shokufeh'
})
s.push({
    name: 'shoku'
})
const data= s.pop()
console.log('isEmpty 2',s.isEmpty(), s.size())
console.log(' Pop from Stack',data)

// const s2 = new Stack()
// s2.push(1)
// s2.push(2)
// s2.pop()
console.log('second pop item', s.pop())
console.log(chalk.blue('Second pop',s.isEmpty(), s.size()))
