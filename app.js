function countno() {
	var count = 0;
	return function() {
		count += 1;
		return count;
	};
}

var counter = countno();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());