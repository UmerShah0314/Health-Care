function data ()
{
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;
var e=document.getElementById("n5").value;


if (a==""||b==""||c==""||d==""||e=="")

    {
    alert("All fields are mendatory");
    return false;
    
}


else if (d.length>11||d.length<11)
{
    alert("Only 12 Digits ! Enter phone No");
    return false;
    
}
else if (isNaN(d))
    {
        alert("Only Num");
        return false;
        
    }


else {
    true;
    
}
};
