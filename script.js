function firstWord(s) {
  // your code here
	const str=s.trim();
	let ans='';
	for(let i=0;i<str.length;i++){
		if(str[i]==' ')return ans;
		ans+=str[i];
	}
	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));