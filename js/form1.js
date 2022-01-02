function firstname_val(){
	// FirstName Checking 
	var firstName = document.getElementById('fname').value;
	if(firstName.trim()=="")
	{
		var temp = document.getElementById('lbfname');
		temp.innerHTML = '* First name cannot be blank *';
		temp.style.color="red";
		fname.style.border= "3px solid red";
		chk = 0;
	}
	else
	{
		regx=/^[A-Za-z]+$/;
		if(fname.value.trim()!="" && !regx.test(fname.value))
		{
			var temp = document.getElementById('lbfname');
			temp.innerHTML = '* First name should be only letters *';
			temp.style.color="red";
			fname.style.border= "3px solid red";
			chk = 0;
		}
		else
		{
			var temp=document.getElementById('lbfname');
			temp.innerHTML = '';
			fname.style.border= "3px solid #ccc";
		}
	}
}

function lastname_val(){
	// Lastname checking
	var lastName = document.getElementById('lname').value;
	if(lastName.trim()=="")
	{
		var temp = document.getElementById('lblname');
		temp.innerHTML = '* LastName cannot be blank *';
		temp.style.color="red";
		lname.style.border= "3px solid red";
		chk = 0;
	}
	else
	{
		regx=/^[A-Za-z]+$/;
		if(lname.value.trim()!="" && !regx.test(lname.value))
		{
			var temp = document.getElementById('lblname');
			temp.innerHTML = '* LastName should be only letters *';
			temp.style.color="red";
			lname.style.border= "3px solid red";
			chk = 0;
		}
		else
		{
			var temp=document.getElementById('lblname');
			temp.innerHTML = '';
			lname.style.border= "3px solid #ccc";
		}
	}
}

function mail_val(){
	// Mail checking
	regx=/^(\d{2}[A-za-z]{3}\d{3}@nirmauni\.ac\.in$)|(\w+@gmail\.com)$/;
	var e_mail = document.getElementById('mail');
	
	// regx2 = /^(\d{2}[A-za-z]{3}\d{3}@nirmauni\.co\.in$)|(\w+@gmail\.com)$/;
	if(!regx.test(e_mail.value))
	{
		var temp=document.getElementById('lbmail');
		temp.innerHTML = '* Email is not in correct form *'
		temp.style.color="red";
		e_mail.style.border= "3px solid red";
		chk = 0;
	}
	else
	{
		var temp=document.getElementById('lbmail');
		temp.innerHTML = '';
		e_mail.style.border= "3px solid #ccc";
	}
}

function validate(){
	var chk = 1;

	// FirstName Checking 
	var firstName = document.getElementById('fname').value;
	if(firstName.trim()=="")
	{
		var temp = document.getElementById('lbfname');
		temp.innerHTML = '* First name cannot be blank *';
		temp.style.color="red";
		fname.style.border= "2px solid red";
		chk = 0;
	}
	else
	{
		regx=/^[A-Za-z]+$/;
		if(fname.value.trim()!="" && !regx.test(fname.value))
		{
			var temp = document.getElementById('lbfname');
			temp.innerHTML = '* First name should be only letters *';
			temp.style.color="red";
			fname.style.border= "2px solid red";
			chk = 0;
		}
		else
		{
			var temp=document.getElementById('lbfname');
			temp.innerHTML = '';
			fname.style.border= "2px solid #ccc";
		}
	}

	// Lastname checking
	var lastName = document.getElementById('lname').value;
	if(lastName.trim()=="")
	{
		var temp = document.getElementById('lblname');
		temp.innerHTML = '* LastName cannot be blank *';
		temp.style.color="red";
		lname.style.border= "2px solid red";
		chk = 0;
	}
	else
	{
		regx=/^[A-Za-z]+$/;
		if(lname.value.trim()!="" && !regx.test(lname.value))
		{
			var temp = document.getElementById('lblname');
			temp.innerHTML = '* LastName should be only letters *';
			temp.style.color="red";
			lname.style.border= "2px solid red";
			chk = 0;
		}
		else
		{
			var temp=document.getElementById('lblname');
			temp.innerHTML = '';
			lname.style.border= "2px solid #ccc";
		}
	}

	// Mail checking
	regx=/^(\d{2}[A-za-z]{3}\d{3}@nirmauni\.ac\.in$)|(\w+@gmail\.com)$/;
	var e_mail = document.getElementById('mail');
	
	if(!regx.test(e_mail.value))
	{
		var temp=document.getElementById('lbmail');
		temp.innerHTML = '* Email is not in correct form *'
		temp.style.color="red";
		e_mail.style.border= "2px solid red";
		chk = 0;
	}
	else
	{
		var temp=document.getElementById('lbmail');
		temp.innerHTML = '';
		e_mail.style.border= "2px solid #ccc";
	}

	// Pwd checking
	regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	var ps = document.getElementById('pwd');
	var ps1 = document.getElementById('new_pwd');
	console.log(ps.value);
	console.log(ps1.value);
	if(!regx.test(ps.value))
	{
		var temp=document.getElementById('lbpwd');
		temp.innerHTML = '* Password not in correct format *'
		temp.style.color="red";
		ps.style.border= "2px solid red";
		chk = 0;
	}
	else
	{
		var temp=document.getElementById('lbpwd');
		temp.innerHTML = '';
		ps.style.border= "2px solid #ccc";
	}
	
	if(ps1.value != ps.value)
	{
		var temp=document.getElementById('new_lbpwd');
		temp.innerHTML = '* Re-Password not should be same as Password *'
		temp.style.color="red";
		ps1.style.border= "2px solid red";
		chk = 0;
	}
	else
	{
		var temp=document.getElementById('new_lbpwd');
		temp.innerHTML = '';
		ps1.style.border= "2px solid #ccc";
	}

	if(!chk){
		return false;
	}
	return true;
	return true;
}