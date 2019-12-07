function Name()
{

	var name1=document.getElementById('name').value;
	if(name1=="")
	{
		
		alert("incorrect");
	}
	else if(name1.length<=2)
	{
		alert("incorrect");
	}
	else
	{
		name1=document.getElementById('name').value;
		alert(name1);
	}
   
}
function Email()
{
	var email1=document.getElementById('email').value;
	if(email1=="")
	{
		alert("incorrect");
	}
    else if(email1.includes("@example.com"))
	{
		email1=document.getElementById('email').value;
		alert(email1);
	}
	else{
		alert("invalid");
	}
}
function Gender()
{
	var g1 = document.getElementsByName('gender');
	
	for (var i = 0; i < g1.length; i++) {
		var detect = "";
		if(g1[i].checked)
		{
			detect += g1[i].value;
			break;
		}
		else
		{
			detect += "No Value";
		}
	}
	return detect;
}
function Degree()
{
	var d = document.getElementsByName('degree');
	
	var Items="";
	for(var i=0; i<d.length; i++)
	{
		if(d[i].type=='checkbox' && d[i].checked==true)
			Items+=d[i].value;
	}
	return Items;
}
function Date(day,month,year)
{
	var D = verifyUsername(day);
	var M = verifyUsername(month);
	var Y = verifyUsername(year);
	if(D==false||M==false||Y==false)
	{
		return false;
	}
	else
	{
		if((Number(day) > 31 || Number(day) < 1) || (Number(month) > 12 || Number(month) < 1) || (Number(year) > 2016 || Number(year) < 1900))
			{
				return false;
			}
			else
				return true;
	}
}