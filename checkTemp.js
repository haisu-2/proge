function checkTemp(temp) {
if (temp <= 20 && temp >= 0) {
        console.log("-1")
        return -1
    }
     else if ( temp <= 40 && temp >= 21 ) {
        console.log("0")
         return 0
    }
    else if (temp <= 60 && temp >= 41) {
        console.log("1") 
        return 1
    }
}
