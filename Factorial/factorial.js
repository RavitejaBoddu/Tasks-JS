function getFactorial(){
    var num = document.getElementById('fact-input').value;

    var result = num;
    if(num<0){
        alert("Please enter positive integers");
        return 0;
    }else if(num==0 || num ==1){
       return result = 1;
    }

    /* Using While loop */
    // while(num>1)
    // {
    //     num--;
    //     result = result * num;
    // }
    for(var i = num - 1; i >= 1; i--){
        result = result * i ;
    }
    var res = document.getElementById('result');
    res.innerHTML = result;
}