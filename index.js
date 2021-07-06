function Stack(){
    this.items =[]
}

Stack.prototype.push = function (item){
    // console.log('pushing to Stack',item)
    this.items[this.items.length]=item
}
Stack.prototype.pop = function (){
    // console.log('pushing from Stack')
    const item = this.items[this.items.length - 1]
    // this.items[this.items.length-1] = undefined
    // khone dar arrye alve bar inke hazf mishe khali ham mishe
    this.items = this.items.splice(0,this.items.length - 1)
    return item
}
Stack.prototype.size= function (){
    return  this.items.length
}
Stack.prototype.isEmpty= function (){
    // return  this.items.length===0
    return  this.size() === 0

}
module.exports=Stack