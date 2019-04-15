// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function clicked(){
    console.log("button was clicked");
}

function SendTest(){
    var text = $("txtName").val();
    
    $.ajax({
        type: "POST",
        url: "/Employee/Create",
        contentType: "application/json; charset=utf-8",
        data: text,
        success: function(res){
            console.log("Post ended")
            console.log("Server says",res);
        }
    });
}