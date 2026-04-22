$(document).ready(function () {

    $("#imgList div").draggable({
        helper: "clone",
        revert: "invalid"
    });

    $(".deposer").droppable({
        accept: "#imgList div",
        tolerance: "pointer",

        over: function () {
            $(this).css("background-color", "#1a1a2e");
        },
        out: function () {
            $(this).css("background-color", "");
        },

        drop: function (event, ui) {
            let zone = $(this);

            // Calculer la position exacte du drop dans la zone
            let zoneOffset = zone.offset();
            let posX = ui.offset.left - zoneOffset.left;
            let posY = ui.offset.top - zoneOffset.top;

            // Cloner et positionner correctement
            let clone = ui.draggable.clone();
            clone.css({
                position: "absolute",
                left: posX + "px",
                top: posY + "px",
                margin: 0
            });

            // La zone doit être en position relative
            zone.css("position", "relative");
            zone.append(clone);

            // Rendre le clone draggable dans la zone
            clone.draggable({
                containment: zone
            });

            // Cacher l'original
            ui.draggable.hide();
        }
    });

});