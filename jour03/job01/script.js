function addPara() {
    $("<p>")
        .attr("id", "p")
        .html("<b>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.</b>")
        .appendTo("body");
}

function hide() {
    $("html").hide();
}

$("#button1").click(function() {
    addPara();
});

$("#button2").click(function() {
    hide();
});