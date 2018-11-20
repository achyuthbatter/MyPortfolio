$(function(){
        var numOne;
        var numTwo;
        var operator;
        var total;
        var clickDigit;
        var currentVal = 0;
        var newVal;
        var flag = 0;
        var totalflag = 0;
        var $result = $("#textzone");
        var $plus =$(".plus").val();
        var $minus =$(".minus").val();
        var $multiply =$(".multiply").val();
        var $divide =$(".divide").val();
        var $decimal =$(".dot").val();
        var $Pi =$(".Pi").val();
    
function reset(){
        numOne=null;
        numTwo=null;
        operator=null;
        $result.val("0");
        newVal = '0';
}
 
reset();
 
$("#numbers button").on('click', function(){
        
        if(total > 0){
            $result.val('');
        }
        clickDigit = $(this).text();
        console.log("Click digit is" +clickDigit);
        
        currentVal = $result.val();   
        console.log("current value is" +currentVal);
 
        if (currentVal === "0"){
                newVal = clickDigit;
                console.log("new value is" +newVal);
                 flag += 1;
        }
        else {
            newVal = currentVal + clickDigit;
            console.log("new value is"+newVal);
        }
        $result.val(newVal);
       
});
 
$("#operations input").on('click', function(){
        operator = $(this).val();
        console.log("operator is" +operator);
        console.log("flag is" +flag);
        if(operator === $decimal){
            
        }
        else if(flag > 1){
            if(operator === $plus){
                numTwo=parseFloat($result.val());
                numOne = numOne + numTwo;
                console.log("inside flag plus numone is"+numOne);
            }
            else if(operator === $minus){
                numTwo=parseFloat($result.val());
                numOne = numOne - numTwo; 
                console.log("inside flag minus numone is"+numOne);
            }
            else if(operator === $multiply){
                numTwo=parseFloat($result.val());
                numOne = numOne * numTwo;
            }
            else if(operator === $divide){
                numTwo=parseFloat($result.val());
                numOne = numOne / numTwo;
            }
            
        }
        else{
            numOne=parseFloat($result.val());
        }
        console.log("number one is" +numOne);
        $result.val("0");
        
});
$("#Mathop input").on('click', function(){
        operator = $(this).val();
        numOne=parseFloat($result.val());
        $result.val("0");  
});
 $(".Pi").on('click', function(){
        $result.val('3.14159265');
 });
 $(".plusminus").on('click', function(){ 
     console.log(total);
     console.log(totalflag);
     if(totalflag > 0){
         newVal = total * -1;
         $result.val(newVal);
         totalflag = 0;
     }
     else{
        newVal = newVal * -1;
        $result.val(newVal);  
     }  
 });
$(".powert").on('click', function(){
    if(totalflag > 0){
        var e = total * total * total;
        $result.val(e);
        totalflag = 0;
    }
    else{
        e = newVal * newVal * newVal;
        $result.val(e);
    }
});
$(".sqrt").on('click', function(){
    if(totalflag > 0){
        var t = Math.sqrt(total);
        $result.val(t);
        totalflag = 0;
    }
    else{
        t = Math.sqrt(newVal);
        $result.val(t);   
    }
});
$(".power").on('click', function(){
   if(totalflag > 0){
       var e = total * total;
       $result.val(e);
       totalflag = 0;
   }
    else{
       e = newVal * newVal;
       $result.val(e); 
    }
});
$(".fraction").on('click', function(){
    if(totalflag > 0){
        var e = 1 / total;
        $result.val(e);
        totalflag = 0;
    }
    else{
        e =1 / newVal;
        $result.val(e);
    }
});
$(".Sin").on('click', function(){
    if(totalflag > 1){
        var res = Math.sin(total * Math.PI / 180);
        $result.val(res);
        totalflag = 0;
    }
    else{
     res = Math.sin(newVal * Math.PI / 180);
     $result.val(res);   
    }
});
$(".Cos").on('click', function(){
    if(totalflag > 1){
        var c = Math.cos(total * Math.PI / 180);
        $result.val(c);
        totalflag = 0;
    }
    else{
       c = Math.cos(newVal * Math.PI / 180);
       $result.val(c); 
    }
});
$(".Tan").on('click', function(){
    if(totalflag > 1){
        var c = Math.tan(total * Math.PI / 180);
        $result.val(c);
        totalflag = 0;
    }
    else{
       c = Math.tan(newVal * Math.PI / 180);
       $result.val(c); 
    }
});
$(".Log").on('click', function(){
   if(totalflag > 1){
        var c = Math.log(total * Math.PI / 180);
        $result.val(c);
        totalflag = 0;
    }
    else{
       c = Math.log(newVal * Math.PI / 180);
       $result.val(c); 
    }
});    
$(".Exp").on('click', function(){
   if(totalflag > 1){
        var c = Math.exp(total);
        $result.val(c);
        totalflag = 0;
    }
    else{
       c = Math.exp(newVal);
       $result.val(c); 
    }
});

$(".Result").on('click', function(){
        numTwo = parseFloat($result.val());
        console.log("number two is" +numTwo); 
        console.log("operator is" +operator);
        flag = 0;
        if (operator === $plus){
                total = numOne + numTwo;
                totalflag += 1;
        }
        else if (operator === $minus){
                total = numOne - numTwo;
                totalflag += 1;
        }
        else if (operator === $multiply){
                total = numOne * numTwo; 
                totalflag += 1;
        }
        else if (operator === $divide){
                total = numOne / numTwo;
                totalflag += 1;
        }
        else if(operator === "%"){
            total = (numTwo / 100 ) * numOne; 
            totalflag += 1;
        }
        else if(operator === $Pi){
            total = numOne * 3.14159265.toPrecision(8);
            totalflag += 1;
        }
        else if(operator === $decimal){
            total = (numOne * 1) + (numTwo * 1);
            console.log(numOne);
            console.log(numTwo);
        }
        console.log("total is" +total);
		$result.val(total);
        console.log("totalflag is" +totalflag);
});

$(".Cancel").on('click', function(){
   reset(); 
   //console.log(newVal);
});
$(".Ce").on('click', function(){
    newVal = '0';
    $result.val(newVal);
    
    //console.log(newVal);
});
$(".Bspace").on('click', function(){
    var el = $("#textzone").val();
    el = el.substring(0, el.length - 1);
    $result.val(el);
});
$("#header").hide().fadeIn(1500);
$("#footer").hide().fadeIn(2800);
$(".container").hide().fadeIn(100);
});