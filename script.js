var flag=0; //0 is first player
var cnt=0;
var draw=1;
var arr=document.querySelectorAll("div");
var header=document.querySelector("h1");
var btn=document.querySelector("button");
const winner="WE HAVE A WINNER!"

		for(var i=0;i<arr.length;i++)
		{
			arr[i].addEventListener('click',tictactoe);
			
		}

 function tictactoe(){	
	if(flag===1)
	{ this.style.fontSize="40px"
	  this.style.color="#F26968"
		this.innerText="X";
		flag=0;
	}
	else{
		this.style.fontSize="40px"
		this.style.color="#F26968"
		this.innerText="O";
		flag=1;
	}
		
			for(var i=0;i<arr.length;i++)
			{
					if(this === arr[i])
					{
						arr[i].removeEventListener("click",tictactoe);
						cnt++;
					}
			}

					
				if( arr[0].innerText === arr[1].innerText && arr[1].innerText=== arr[2].innerText) 
				{header.innerText=winner;
				 
				 				for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
				 	arr[0].style.background="#6cbf84";
				 	arr[1].style.background="#6cbf84";
					arr[2].style.background="#6cbf84";
					 draw=0
				}
			  else if( arr[3].innerText === arr[4].innerText && arr[4].innerText=== arr[5].innerText )
				{header.innerText=winner;
				 
				 				for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
				 	arr[3].style.background="#6cbf84";
				 	arr[4].style.background="#6cbf84";
					arr[5].style.background="#6cbf84";
					 draw=0
				}	
			  else if( arr[6].innerText === arr[7].innerText && arr[7].innerText=== arr[8].innerText) 
					{	header.innerText=winner;
					 
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
						arr[6].style.background="#6cbf84";
				 		arr[7].style.background="#6cbf84";
						arr[8].style.background="#6cbf84";
						 draw=0
					}
			  else if ( arr[0].innerText === arr[3].innerText && arr[3].innerText=== arr[6].innerText) 
					{	header.innerText=winner; 
					 
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
					arr[0].style.background="#6cbf84";
					arr[3].style.background="#6cbf84";
					arr[6].style.background="#6cbf84";
					 draw=0		
					}
			  else if(arr[1].innerText === arr[4].innerText && arr[4].innerText=== arr[7].innerText )
					{	header.innerText=winner;
					 
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
					arr[1].style.background="#6cbf84";
					arr[4].style.background="#6cbf84";
					arr[7].style.background="#6cbf84";
					 draw=0
					}
			  else if (arr[2].innerText === arr[5].innerText && arr[5].innerText=== arr[8].innerText ) 
					{	header.innerText=winner;
					 
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
						arr[2].style.background="#6cbf84";
				 		arr[5].style.background="#6cbf84";
						arr[8].style.background="#6cbf84";
						draw=0
					}	
			  else if ( arr[0].innerText === arr[4].innerText && arr[4].innerText=== arr[8].innerText )
					{header.innerText=winner; 
					
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
					 arr[0].style.background="#6cbf84";
				 	 arr[4].style.background="#6cbf84";
					 arr[8].style.background="#6cbf84";
					 draw=0
					}		
			  else if  ( arr[2].innerText === arr[4].innerText && arr[4].innerText=== arr[6].innerText )
					{header.innerText=winner;
					 
								for(var i=0;i<arr.length;i++)
									arr[i].removeEventListener("click",tictactoe);
					 arr[2].style.background="#6cbf84";
				 	 arr[4].style.background="#6cbf84";
					 arr[6].style.background="#6cbf84";
					 draw=0
					}	
				
	if(cnt===9 && draw===1)
		header.innerText="DRAW"
		

}


btn.addEventListener('click',reset);
function reset()
{	
	header.innerText="tic tac toe";
	for(var i=0;i<arr.length;i++)
		{
			arr[i].addEventListener('click',tictactoe);
			arr[i].style.fontSize="1px";
			arr[i].style.background="white";
			arr[i].innerText=`${i}`;
		}
	if(flag===1)
		flag=1;
	else
		flag=0;
	draw=1;
	cnt=0;
}
