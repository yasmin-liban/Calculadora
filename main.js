alert("Bem vindo a calculadora simplificada da Libano!");

function equa() {
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	var n3= document.getElementById("n3").value;
	n1= parseInt(n1);
	n2= parseInt(n2);
	n3= parseInt(n3);
	var delta= Math.sqrt(n2**2-4*n1*n3);
	var resul1=((-n2+delta)/(n1*2));
	var resul2=((-n2-delta)/(n1*2));
	var xv=-n2/(2*n1)
	var yv=-delta/(4*n1)
	
	if(delta==0){
		document.getElementById("resul").innerHTML=resul1;
	}
	else{
		if(delta>0){
			document.getElementById("resul").innerHTML=resul1+" & "+resul2;	
		}
		else{
			document.getElementById("resul").innerHTML="Não existe raízes reais.";
		}
   }	
   document.getElementById("xyv").innerHTML="X do vértice: "+xv+" Y do vértice: "+yv;
   planoCartesiano();
   function planoCartesiano(){
		var canvas = document.querySelector('canvas')
		canvas.width = 500
		canvas.height = 500
		var w = 500
		var h = 500
		var ctx = canvas.getContext('2d') 
		ctx.translate(w/2,h/2) 
		ctx.moveTo(0,-h) 
		ctx.lineTo(0,h) 
		ctx.moveTo(-w,0) 
		ctx.lineTo(w,0) 
		ctx.strokeStyle = "#000000" 
		ctx.lineWidth = 1 
		ctx.stroke() 
		ctx.save()
		ctx.beginPath() 
		desenhar_grafico() 
		
		function f(x){
			return yt((n1*x**2)+(n2*x)+n3) 
		}
		function yt(y)
		{
			return -5*y/2 
		}
		function xt(x)
		{
			return 6.25*x 
		}

		function desenhar_grafico() 
			{
				var x0 = -10 
				var xf = 10 
				var x = x0 
				var dx = 0.1 
				ctx.strokeStyle = "#ffffff" 
				ctx.moveTo(xt(x),f(x0)) 
				x+= dx 
				while(x<xf)
				{
					ctx.lineTo(xt(x),f(x))
					x+= dx 
				}
				ctx.stroke() 
				ctx.restore() 
			}

	}

}




function div_comun(){
    var maior, menor, resp=""
    var n4 = document.getElementById("n4").value;
	var n5 = document.getElementById("n5").value;
	n4 = parseInt(n4);
    n5 = parseInt(n5);
    if(n5>n4){
        maior = n5
        menor = n4
    }
    else{
        maior = n4
        menor = n5
    }
    for(var i=1;i<=maior;i++){
        if(n4%i==0 && n5%i==0){
            if(i<maior){
			   resp +=" "+i+","
			}
		}
		if(i==maior){
			if(resp.charAt(resp.length-1) == ","){
				resp = resp.substring(0,(resp.length - 1));
				resp+="."
			}
		}
    }
    document.getElementById("resul2").innerHTML=resp;
    
}



