var temp=1;
A=new Array("images/s1.jpg","images/s2.jpg","images/s3.png");
function myfn()
{	


switch(temp) {

    case 0: document.getElementById("sliderimg").src = A[0];
	 temp = temp +1
	 break;
case 1: document.getElementById("sliderimg").src = A[1];
	 temp = temp +1
	 break;
case 2: document.getElementById("sliderimg").src = A[2];
	 temp = 0
	 break;
	 	  

}

}

function myfn2()
{
switch(temp) {

    case 0: document.getElementById("sliderimg").src = A[1];
	temp=2;
	 break;
case 1: document.getElementById("sliderimg").src = A[2];
	 temp = 0;
	 break;
case 2: document.getElementById("sliderimg").src = A[0];
	 temp = 1;
	 break;
	 	  
} 
}