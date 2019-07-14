//when we create object
function Division(){
    this.one = 55;
    this.two = 11;

    this.divis = function(){
      
        console.log(this.one / this.two);
    }
    
}
module.exports = new Division();