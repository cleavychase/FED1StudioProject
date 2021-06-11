function () {
    //jQuery lightbox
    //When the user clicks a thumbnail img display the lightbox container and insert an img tag into it.

    $(".thumb").on("click", function () {
        let imgSrc = $(this).attr("src");


        //Plug the img into #lightbox-content, using imgSrc as the src
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

        //make the lightbox visible by fading it in
        $("#lightbox-container").fadeIn(500);

        //close the container when the user clicks anywhere within it:
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
}