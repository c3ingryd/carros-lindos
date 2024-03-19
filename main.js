var motivos = [
    " Eles são bonitos",
    "são fofos",
    "sonho de varios, que não podem ter",
    "sonho de consumo de varios",
      "são rapidos"
  ];
  
  var imagens = [ "https://www.webmotors.com.br/wp-content/uploads/2023/04/28152302/honda-civic-type-r-053.webp",
    "https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg",
    "https://i.pinimg.com/736x/d2/78/89/d278899683dec398c0734e4e060ad44d.jpg",
    "https://cdn.awsli.com.br/2500x2500/2459/2459715/produto/170578152/foto-03-k858imrxdx.png",
    "https://t.ctcdn.com.br/sqtLO2MKSrIKmScSr3GkiD51k0g=/1200x675/smart/i681744.jpeg"

                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  