
var normalWords=new Array();
var vowelWords=new Array();

function appwords(){

var flag = false;
    var inp=document.getElementById("usr").value;

    for(var i=0;i<inp.length;i++){

        if(inp[i]==='a'||inp[i]==='e'||inp[i]==='i'||inp[i]==='o'||inp[i]==='u')
        {
           
            flag=true;
            break;
        }
      
    
    }
   
    if(flag==true){
        vowelWords.push(inp);
    }
    else{
        normalWords.push(inp);
    }
      
       
   
// if(flag==true){
    for(var j=0;j<normalWords.length;j++){
    document.getElementById("nrm").innerHTML="<li>"+normalWords[j]+"</li>";
}
// }

// if(flag==false){
for(var k=0;k<vowelWords.length;k++){
    document.getElementById("vow").innerHTML="<li>"+vowelWords[k]+"</li>";
}
// }

}