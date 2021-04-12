function gallery() {
    ///init masonry
    var $grid = $('div.gallery').masonry({
        itemSelector: 'a.gallery-item',
        gutter: 'div.gutter-sizer',
        stagger: 30
    });



    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    //// //magnific popup
    $('.gallery').magnificPopup({
        delegate: '.gallery-item',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        image: {
            verticalFit: true,
            titleSrc: 'caption',
            cursor: null
        },

    });
}
