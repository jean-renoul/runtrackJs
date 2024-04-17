$(document).ready(function() {
    $("button").click(function melanger() {
    var images = $("img");
    var imagesArray = $.makeArray(images);
    imagesArray.sort(function() {
        return Math.random() - 0.5;
    });
    
    $(".conteneurs").empty();
    imagesArray.forEach(function(image, index) {
        if (index < $(".conteneurs").length) {
            $(".conteneurs").eq(index).append(image);
            imageDrop();
            imageDrag();
        }
    });
    checkWin();
    });
    
    function imageDrag(){
        $("img").draggable({
            revert: "invalid",
            helper: "clone"
        });
    }

    function imageDrop(){
        $(".conteneurs").droppable({
            accept: "img",
            drop: function(event, ui) {
                var $droppable = $(this);
                var $draggable = ui.draggable;
                
                if ($draggable.is("img")) {
                    var $droppableImage = $droppable.find("img");
                    var $draggableParent = $draggable.parent();
                    
                    $draggableParent.append($droppableImage);
                    $droppable.empty();
                    $droppable.append($draggable);

                    checkWin();
                }
            }
        });
    }

    function checkWin() {
        var correctCount = 0;
        $(".conteneurs").each(function() {
            var conteneurOrder = parseInt($(this).attr("order"));
            var imageOrder = parseInt($(this).find("img").attr("order"));
            console.log("conteneurOrder:", conteneurOrder, "imageOrder:", imageOrder);
                
            if (conteneurOrder == imageOrder) {
                correctCount ++;
                console.log(correctCount);
            }
            if (correctCount === 5) {
                setTimeout(function() { alert("Bravo, vous avez gagné !"); }, 10);
            }
        });
        }
});
