/* 
*  EDIT BY ALEXANDER ERIC
*  NOT PORNHUB DEVELOPER 
*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "useri_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>NAMA</th><th>NO-AKAUN</th><th>BAL-AKAUN-MYR</th><th>KAD-PENGENALAN </th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("NO-AKAUN")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("BAL-AKAUN-MYR")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("KAD-PENGENALAN")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}