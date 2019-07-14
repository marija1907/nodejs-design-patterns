var patt1 = require('./1patt');
patt1();

var patt2 =  require('./2patt').mathem;
patt2();

var patt3 = require('./3patt');
patt3.divis();
patt3.one = 66;

//when we changed some properties
var patt3a = require('./3patt');
patt3a.divis();

var Patt4 = require('./4patt');
var fourthh = new Patt4(); 
fourthh.four();

var patt5 = require('./5patt').onetwo;
patt5();