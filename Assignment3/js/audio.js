// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function(){
    var myContainer = document.querySelector("#audio");
    
    var row = "<audio controls='" + audio.controls + "'>";
   
    for(i=0; i<audio.source.length ; i++){

        row +=  "<source src ='" + audio.source[i].src + "'" + " type='" + audio.source[i].type + "' />" ;
        "<source src ='" + audio.source[i].src + "'" + " type='" + audio.source[i].type + "' />"
    

    }

    myContainer.innerHTML= row + "Your browser does not support the audio tag used." + "</audio>" ;

    


}