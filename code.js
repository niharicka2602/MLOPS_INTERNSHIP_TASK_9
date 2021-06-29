function lw() {

    var i = document.getElementById("in1").value
    var idd = "0"
    var final = ""
    if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("create")) || (i.includes("generate")) || (i.includes("build")))) {
          var image = prompt("Enter image name: ")
      var deployment_name = prompt("Enter Deployment name: ")
      var idd = "1"
      var final = idd + " " + image + " " + deployment_name 
      
      }
  
    else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("create")) || (i.includes("generate")) || (i.includes("build")))) {
      var image = prompt("Enter image name: ")
      var pod_name = prompt("Enter pod name: ")
      var idd = "2"
      var final = idd + " " + image + " " + pod_name
      
      }
  
    else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("detach")))) {
      var pod_name = prompt("Enter pod name: ")
      var idd = "3"
      var final = idd + " " + pod_name
      
      }
  
    else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("detach")))) {
      var deployment_name = prompt("Enter Deployment name: ")
      var idd = "4"
      var final = idd + " " + deployment_name
      
      }
  
    else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("expose"))  || (i.includes("display")))) {
      var deployment_name = prompt("Enter Deployment name: ")
      var port_no = prompt("Enter port no on which you want yo export your deployment: ")
      var expose_type = prompt(" 1. NodePort \n 2. ClusterIP \n 3.External \n Enter the type which you want to export ")
      var idd = "5"
      var final = idd + " " + deployment_name + " " + port_no + " " + expose_type
      
      }
  
    else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("scale")) || (i.includes("increase")) || (i.includes("decrease")) || (i.includes("scale up")) || (i.includes("scale down")))) {
      var deployment_name = prompt("Enter Deployment name: ")
      var replica = prompt("Enter no. of replicas you need : ")
      var idd = "6"
      var final = idd + " " + deployment_name + " " + replica
      
      }
  
    else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
      var idd = "7"
      var final = idd 
      
      }
  
    else if (((i.includes("deployments"))|| (i.includes("deployment")) || (i.includes("deploy"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
      var idd = "8"
      var final = idd 
      
      }
    else if (((i.includes("services")) || (i.includes("services")) || (i.includes("svc"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
      var idd = "9"
      var final = idd 
      
      }
  
    else if (((i.includes("all")) || (i.includes("everything"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("destroy")))) {
      var idd = "10"
      var final = idd 
      
  }
  
    else {
      var idd = "404"
      var final = idd 
      
    }
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.0.105/cgi-bin/backend.py?x=" + final, true);
  
  xhr.send();
  
  // Output from above url
  
  xhr.onload = function () {
      var output = xhr.responseText;
      document.getElementById("d1").innerHTML = output;
  }
  
  }