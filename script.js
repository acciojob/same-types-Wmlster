function isSameType(value1, value2) {
  //your js code here
	if(value1>0)   
	{
		value1=Number(value1);
	}
	if(value2>0)
	{
		value2=Number(value2);
	}
	
	let y1=typeof value1;
	let y2=typeof value2;

	return (y1) == (y2);              
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
