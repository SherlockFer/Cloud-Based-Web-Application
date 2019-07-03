var timestamp;

function getTimestamp(){
  date=new Date();
  timestamp=date.getTime();
  document.getElementById('variable').value=timestamp;
}

function UTCISO(){
  iso();
  utc();
}

function cleardata(){

  document.getElementById('status').innerHTML = "";
  document.getElementById('time').innerHTML = "";
  document.getElementById('status2').innerHTML = "";
  document.getElementById('time2').innerHTML = "";
  document.getElementById('error').innerHTML = "";
  document.getElementById('error2').innerHTML = "";
  
}

function utc(){
  document.getElementById('error').innerHTML = "";
  document.getElementById('error2').innerHTML = "";
  //read from input 
  var timestamp=+document.getElementById('variable').value;
    
    //create a url request
    var request_url = "http://localhost:8080/utc/"+encodeURIComponent(timestamp);
  
    //create a http request 
    var request = new XMLHttpRequest();

    //a http get
    request.open('GET', request_url, true);
  
    request.onload = function() {

      //if it is success
      if (request.status == 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        //alert(data.results[0].formatted);
        console.log(data);
        
        //fill in data to show the current date
        var sucess = data.sucess;
        var time = data.time;

        // Placing formatted data on the front ed
        document.getElementById('status').innerHTML = sucess;
        document.getElementById('time').innerHTML = time;
       
      } else if (request.status <= 500){ 
      // We reached our target server, but it returned an error
        document.getElementById('error').innerHTML = "unable to retrieve data! Response code: " + request.status;
        console.log("unable to retrieve data! Response code: " + request.status);
        var data2 = JSON.parse(request.responseText);
        console.log(data2.status.message);
        document.getElementById('status').innerHTML = "";
        document.getElementById('time').innerHTML = "";
      } else {
        console.log("server error");
        document.getElementById('status').innerHTML = "";
        document.getElementById('time').innerHTML = "";
      }
    };

    request.onerror = function() {
        // There was a connection error of some sort
        console.log("unable to connect to server");        
    };

    request.send();

}
    
function iso(){
  document.getElementById('error').innerHTML = "";
  document.getElementById('error2').innerHTML = "";
  var timestamp=+document.getElementById('variable').value;

  var request_url = "http://localhost:8080/iso/"+encodeURIComponent(timestamp);

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {

    if (request.status == 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
      //alert(data.results[0].formatted);
      console.log(data);
      
      //fill in data to show the current date
      var sucess = data.sucess;
      var time = data.time;

      // Placing formatted data on the front ed
      document.getElementById('status2').innerHTML = sucess;
      document.getElementById('time2').innerHTML = time;
     
    } else if (request.status <= 500){ 
    // We reached our target server, but it returned an error
      document.getElementById('error2').innerHTML = "unable to retrieve data! Response code: " + request.status;
      console.log("unable to retrieve data! Response code: " + request.status);
      var data2 = JSON.parse(request.responseText);
      console.log(data2.status.message);
      document.getElementById('status2').innerHTML = "";
      document.getElementById('time2').innerHTML = "";
    } else {
      console.log("server error");
      document.getElementById('status2').innerHTML = "";
      document.getElementById('time2').innerHTML = "";
    }
  };

  request.onerror = function() {
      // There was a connection error of some sort
      console.log("unable to connect to server");        
  };

  request.send();

}

  



