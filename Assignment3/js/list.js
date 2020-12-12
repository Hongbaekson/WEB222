// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
        
    var myContainer = document.querySelector("#container1");
   
    for (var i = 0; i < fruits.length; i++) {
        myContainer.innerHTML += "<li>" + fruits[i] + "</li>";
         }
    
        
    var myContainer2 = document.querySelector("#container2");

    myContainer2.innerHTML = "<ul>"+"<li>"+directory[0].name+"</li>"+"<li>"+directory[1].name+"</li>"+
                                    "<li>"+directory[2].name + "</li>"+
                                    "<ul>"+
                                    "<li>"+directory[2].files[0].name+"</li>"+
                                    "<li>"+directory[2].files[1].name+"</li>"+
                                    "</ul>"+
                                    "<li>"+directory[3].name+"</li>"+
                                    "<li>"+directory[4].name + "</li>"+
                                    "<ul>"+
                                    "<li>"+directory[4].files[0].name+"</li>"+
                                    "<li>"+directory[4].files[1].name+"</li>"+
                                    "<li>"+directory[4].files[2].name+"</li>"+
                                    "</ul>"+
                                    "</ul>";





   
                             


}

