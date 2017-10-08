//node installs on the machine and can be used from the command line
//these are just some functions in js
function ext1(){
	console.log("Data from the external page");
}

function ext2(){
	console.log("Data from the private page");
}

//these are node methods
//were making up a data1 and assigning it to a function so it can be exported and picked up by other scripts
module.exports.data1 = ext1;