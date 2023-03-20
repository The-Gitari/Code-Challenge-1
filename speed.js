function speedDetector(){
    const speed=parseInt(document.getElementById("spd").value);}

    if (speed<70){
        document.getElementById("speed").innerHTML="OK";  //if the condition is true it returns Grade A
        document.getElementById("speed").innerHTML="OK";  //if the condition is true it returns OK
    } else{
        const demeritPoints = (speed - 70) / 5;}

        if (demeritPoints<=12){

        document.getElementById("speed").innerHTML=`Points: ${demeritPoints}`;  //if the condition is true it returns Grade A
        document.getElementById("speed").innerHTML=`Points: ${demeritPoints}`;  //if the condition is true it returns demerit points

        }else {

            document.getElementById("speed").innerHTML="License Suspended"; 
            document.getElementById("speed").innerHTML="License Suspended"; //if the demerit points is more than 12


        }