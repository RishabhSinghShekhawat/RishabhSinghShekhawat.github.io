function face(){
var a= $("#vin").clone()
    var person1=prompt(" Please enter your name");
    var person2=prompt(" Add caption in curley braces");
    var person3=prompt(" Add image");
    var person4=prompt(" Add background image");

    
    $("#ng").text(person1);
    $("#rishabh").text(person2);

 
    $("#vinayak").attr("src",person3);
    $("#dadhich").css('background-image','url('+person4)+')';

   $("#xyz").append(a);

}




