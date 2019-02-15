function gallery(){
///init masonry
      var $grid = $('div.gallery').masonry({
      itemSelector:'a.gallery-item',
          stagger:30
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
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
            cursor:null
        },
        zoom: {
            enabled: true,
            duration: 250 // don't foget to change the duration also in CSS
        }
});
}