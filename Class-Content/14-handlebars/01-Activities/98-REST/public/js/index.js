console.log("index.js loaded")
$("#add_color").click(function(){
    var color = $("#color_input").val();
    console.log(color);
    $.ajax({
        type: "POST",
        url: "/api/add/",
        contentType : 'application/json',
        data: JSON.stringify({"color":color}),
        success: function( data ) {
        console.log(data);
        },
        dataType: "json"
    });
});
$.get("/api/all/",function(data){
    console.log(data)
    $( "#results" ).html( data.map(function(item){
        return $("<div>").text(item.color)
    }) );
});