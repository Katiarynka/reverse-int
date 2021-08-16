module.exports = function reverse (n) {
	let string = Math.abs(n).toString()
	let reversString = '';
	for (i = 0; i < string.length; i++)
	{reversString = `${string[i]}${reversString}`} 
	return +reversString	  
}
