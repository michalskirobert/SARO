function getName(){
  var name = document.getElementById("name").value;
  if (name.endsWith("a") && !name.match('Kosma') && !name.match("Kuba")){
  result = document.getElementById("result").innerHTML = name + " is female";
}else{ 
    result = document.getElementById("result").innerHTML = name + " is male";
}
}