// let entireBody  = document.getElementsByTagName('body')

// let codes=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

// function changeColor(){

// }

// function getColor(){
// codes[Math.floor(Math.random () * 16)]
// }

function changeColor(){
    var newColor=makeColor();
    var entireBody = document.getElementById('bg-color').style.backgroundColor=newColor;
    var button = document.getElementById('colorChanger').style.backgroundColor=newColor;

   document.getElementById('hex-color').innerText=newColor;
  }
  
  function makeColor(){
      var arr=[];
      for(var i=0; i<6; i++){
          var num = Math.floor(Math.random()*16)
          if(num === 10){
            arr.push('A');
        }else  if(num === 11){
            arr.push('B');
        }else  if(num === 12){
            arr.push('C');
        }else  if(num === 13){
            arr.push('D');
        }else  if(num === 14){
            arr.push('E');
        }else  if(num === 15){
            arr.push('F');
        }else if(num<=9){
          arr.push(num);
        }
    }
      var newRgb="#"+ arr[0] +arr[1]+arr[2]+arr[3]+arr[4]+arr[5]


      return newRgb;
  }
/*10=A, 11=B, 12=C,13=D,14=E, 15=F*/