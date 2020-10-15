var emailCheck 	=	function(inputEmailText,inputEmailDns=[]){
	var inputEmailSplit = inputEmailText.split('@');
	//console.log(inputEmailSplit[inputEmailSplit.length-1]);
	var inputEmail 		=	inputEmailSplit[inputEmailSplit.length-1];
	var trimInputEmail 	=	inputEmail.replace(/[^a-zA-Z0-9 ]/g, "");
	var successEntry 	=	0;
	var successKey 		=	-1; 
	var emailDnsArr 	=	['gmail.com','yahoomail.com','rediffmail.com'].concat(inputEmailDns);
	var matchArr 		=	new Array();
	var matchEmail;
	var	emailDns 		=	emailDnsArr.map(function(value,key){
		var trimValue 	=	value.replace(/[^a-zA-Z0-9 ]/g, "");
		if(inputEmail.localeCompare(value) == 0){
			successEntry = 1;
			successKey 	 = key;
		}else{
			//console.log([...trimValue]);
			//matchArr[key]  = [...trimInputEmail].filter(element => [...trimValue].includes(element)).length;
			matchArr.push([key, [...trimInputEmail].filter(element => [...trimValue].includes(element)).length]);
		}
	});
	matchArr.sort(function(a, b){   return b[1] - a[1]; });
	if(successEntry==1){
		matchEmail 		=	emailDnsArr[successKey];
	}else if(matchArr[0][1] >0){
		matchEmail 		=	emailDnsArr[matchArr[0][0]]
	}else{
		matchEmail 		=	"Not Found";
	}
	return matchEmail;
}

export default emailCheck;