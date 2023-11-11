function isSameType(value1, value2) {
  //your js code here
	let y1=typeof value1;
	let y2=typeof value2;

	return (y1) == (y2);              
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
