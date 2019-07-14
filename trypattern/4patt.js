//when we create our constructor function
function Fourth(){
    this.one = 789;
    this.two = 78;
    this.four = function(){
        console.log(this.one - this.two);
    }
}
module.exports = Fourth;