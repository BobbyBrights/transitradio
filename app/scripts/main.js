console.log('\Transit Radio');

/*
* splash
*/
$(document).ready(function() {
   window.setTimeout('some();', 5000);
 }
)

function some() {
   $('#trsplash').fadeOut('slow');
}

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

$('#nav-episode3').on('click', function () {
      $('#episodes').scrollTo($('#episode3'), 500);
      return false;
  });

$('#nav-episode4').on('click', function () {
      $('#episodes').scrollTo($('#episode4'), 500);
      return false;
  });

$('#nav-episode5').on('click', function () {
      $('#episodes').scrollTo($('#episode5'), 500);
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
* Initialize Flickity + fucking fouc
*/

// show
var $carousel = $('.box__slideshow-flickity').removeClass('is-hidden');
// trigger redraw for transition
$carousel[0].offsetHeight;
// init Flickity
$carousel.flickity({
  // options
  cellAlign: 'center',
  freeScroll: true,
  wrapAround: true,
  imagesLoaded: true,
  pageDots: false,
  percentPosition: false,
  contain: true
});

// getting around that focus click thing
var textBox = document.querySelector('.box__text');
var slideshowBox = document.querySelector('.box__slideshow');

textBox.addEventListener('click', function() {
    textBox.classList.add('.box__text--focus');
    slideshowBox.classList.remove('.box__slideshow--focus');
});

slideshowBox.addEventListener('click', function() {
    textBox.classList.remove('.box__text--focus');
    slideshowBox.classList.add('.box__slideshow--focus');
});
