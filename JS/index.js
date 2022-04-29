 //comment
 var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
        alert('hello my dude');
     localStorage.setItem('alerted','yes');
    }

 var userName=('Kirk');
 document.getElementById("userName").innerHTML = userName;
//document.write('hello' + userName);//

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
//__________
  let tithe = myTithe();
  function myTithe(inputVal) {
    return inputVal * .10;             
  }

  document.getElementById('myTitheAmount').innerHTML = tithe;
  //
}