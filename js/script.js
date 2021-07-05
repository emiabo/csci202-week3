$( function() {
    $(".tri").draggable();
    $("a").draggable();
    $("#showbutton").click(function() {
        $("#original").toggle("clip");
    })
});