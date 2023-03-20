function marksScore() {

    var marks=parseInt(document.getElementById("mks").value);
 //It gets the value of input submitted by the user
    //It gets the value of input submitted by the user
 
  var marks=parseInt(document.getElementById("mks").value);
 
 
 if (marks >= 0 && marks <= 100) {
 //checks if the input value lies in the range of 0-100
     if (marks>79&& marks<=100){
         document.getElementById("grade").innerHTML="Grade: A";  //if the condition is true it returns Grade A
     }else if(marks>59 && marks<=79){
         document.getElementById("grade").innerHTML="Grade: B";
     }else if(marks>49 && marks <=59) {
         document.getElementById("grade").innerHTML="Grade: C";
     } else if (marks>39 && marks<=49){
         document.getElementById("grade").innerHTML="Grade: D";
     }else {
         document.getElementById("grade").innerHTML="Grade: E";
     }
 } else{
     document.getElementById("grade").innerHTML="Please Enter Marks in range of 0-100";
 }
 }
 