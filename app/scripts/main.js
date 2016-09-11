console.log('\Transit Radio');

/*
 * Menu items
*/

$('#nav-contributors').on('click', function () {
      $('#text').scrollTo($('#contributors'), 500);
      return false;
  });

$('#nav-documentarists').on('click', function () {
      $('#text').scrollTo($('#documentarists'), 500);
      return false;
  });

$('#nav-credits').on('click', function () {
      $('#text').scrollTo($('#credits'), 500);
      return false;
  });

$('#nav-episode1').on('click', function () {
      $('#episodes').scrollTo($('#episode1'), 500);
      return false;
  });

$('#nav-episode2').on('click', function () {
      $('#episodes').scrollTo($('#episode2'), 500);
      return false;
  });

/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});

/*
* Initialize Flickity
*/
$('.box__slideshow-flickity').flickity({
  // options
  cellAlign: 'center',
  freeScroll: true,
  wrapAround: true,
  setGallerySize: false,
  contain: true
});
