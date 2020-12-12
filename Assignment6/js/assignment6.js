//HyunKyu Nam
//141031161
//hnam7@myseneca.ca

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function() {

	httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = showContents;

	httpRequest.open('GET', "https://reqres.in/api/users?page=1", true );

	httpRequest.send();


}




function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
	var url = "https://reqres.in/api/users?page=" + pageNum;

	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"

			var tbl = document.querySelector("#data");
			tbl.innerHTML = "";

			for(var i=0; i<jsData.data.length; i++){

				var row = document.createElement("tr");
				var col = document.createElement("td");
				var col2 = document.createElement("td");
				var col3 = document.createElement("td");
				var col4 = document.createElement("td");
				
				var userid = document.createTextNode(jsData.data[i].id);
				var first = document.createTextNode(jsData.data[i].first_name);
				var last = document.createTextNode(jsData.data[i].last_name);
				var image = document.createElement("img");

				image.setAttribute("src", jsData.data[i].avatar);

				col.appendChild(userid);
				col2.appendChild(first);
				col3.appendChild(last);
				col4.appendChild(image);

				row.appendChild(col);				
				row.appendChild(col2);
				row.appendChild(col3);
				row.appendChild(col4);

				tbl.appendChild(row);
			}




		} else {
			console.log('There was a problem with the request.');
		}
	}
}	