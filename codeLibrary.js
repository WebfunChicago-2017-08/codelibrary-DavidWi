$(document).ready(function(){
    
    $("#click").click(function(){
        alert("This section has been clicked");
    })
    $("#hide").click(function(){
        $("#hide").hide();
    })
    $("#show p").hide();
    $("#showButton").click(function(){
        $("#show p").show("slow");
    })
    $("#toggle").click(function(){
        $("#toggle").toggle();
    })
    var up = false;
    $("#slideButton").click(function(){
        if(up){
            $("#slide p").slideDown("slow");
            up = false;
        }
        else{
            $("#slide p").slideUp("slow");
            up = true;
        }
    })
    $("#slideToggle").click(function(){
        $("#slideToggle p").slideToggle();
    })
    var fade = false;
    $("#fading").click(function(){
        if(fade){
            $("#fading p").fadeIn("slow");
            fade = false;
        }
        else{
            $("#fading p").fadeOut("slow");
            fade = true;
        }
    })
    $("#addClass").click(function(){
        $("#addClass p").addClass("nc");
    })
    $("#before").click(function(){
        $("#before p").before("This ");$(this).css({"color": "white", "font-size": "20px"});
    })
    $("#after").click(function(){
        $("#after p").after(" section");$(this).css({"color": "white", "font-size": "20px"});
    })
    $("#append").click(function(){
        $("#append p").append(" section");
    })
    $("#html").click(function(){
        $("#html p").html("This is the new html section");
    })
    $("#attr").click(function(){
        $("#attr p").attr("class","nc");
    })
    $("#val button").click(function(){
        var textarea =  $("#val input").val()
        $("#val p").text(textarea);
    })
    $("#text").click(function(){
        $("#text p").text("This is the new text section");
    })
    $("#data").click(function(){
        $("#data p span").text(" data");
    })

});

