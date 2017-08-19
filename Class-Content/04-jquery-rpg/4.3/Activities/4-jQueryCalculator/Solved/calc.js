var calculator = {
  "number1":"",
  "number2":"",
  "operator":"",
  "calculate":function(){
    var num1 = parseInt(this.number1);
    var num2 = parseInt(this.number2);
    switch(this.operator){
      case "plus":
        return num1+num2;
      case "minus":
        return num1-num2;
      case "times":
        return num1*num2;
      case "divide":
        return num1/num2;
      case "power":
        return Math.pow(num1,num2);
    }
  },
  "clear":function(){
    this.number1 = "";
    this.number2 = "";
    this.operator = "";
  }
};
$(document).ready(function(){
  $(".number").on("click",function(){
    var newNum = $(this).val();
    if(calculator.operator == ""){
      calculator.number1 += newNum;
      $("#first-number").text(calculator.number1);
    }
    else{
      calculator.number2 += newNum;
      $("#second-number").text(calculator.number2);
    }
  });
  $(".operator").on("click",function(){
    calculator.operator = $(this).val();
    $("#operator").text($(this).find("h1").text())
  });
  $("#button-equal").on("click",function(){
    $("#result").text(calculator.calculate())
  });
  $("#button-clear").on("click",function(){
    calculator.clear();
    $("#first-number,#second-number,#operator,#result").empty();
  });
});
