var temp=1;
A=new Array("images/s1.jpg","images/s2.jpg","images/s3.png");
function myfn()
{	
while(true)
{
switch(temp) {

    case 0: document.getElementById("imgslider").src = A[0];
	 temp = temp +1
	 break;
case 1: document.getElementById("imgslider").src = A[1];
	 temp = temp +1
	 break;
case 2: document.getElementById("imgslider").src = A[2];
	 temp = 0
	 break;
	 	  
}
}
}