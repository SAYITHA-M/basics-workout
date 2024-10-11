// let classStartTime=9;
// let lunchTime=12;
// let lunchEndTime=13;
// let afterLunchTime=16;
// let teaBreakTime=17;
// let eveningClassTime=19;
let time=19;
if(time<=24)
    {
     
    
    if((time >= 9)&&(time <= 11)){
        console.log("Morning Session ");
    }
    
    else if((time >= 12)&&(time <= 13)){
        console.log("Lunch Time");
    }
    else if((time > 13)&&(time <= 15)){
        console.log("Afternoon Session");
    }
    else if((time >= 16)&&(time <= 17)){
        console.log("Tea Break");
    }
        else if((time > 17)&&(time <= 18)){
            console.log("Evening Session");
        }
        else if(time <=24){
            console.log("Close Time");
        }
    }
    else {
        console.log("enter correct time ");
    }
       

