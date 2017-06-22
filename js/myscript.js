//slider

$(window).on("load", function() {
    showDivs(1);

    //toggle project details
    $( ".detail-btn" ).click(function(e) {
      var element = e.target.id
      $('.'+element).fadeToggle("slow");
      $(this).text(function(i, text){
        return text === "Show Details" ? "Hide Details" : "Show Details";
      })
    });
    //toggle project details
    $( ".project-hero-img" ).click(function(e) {
      var element = e.target.id
      $('.'+element).fadeToggle("slow");
      $("#"+element+".detail-btn").text(function(i, text){
        return text === "Show Details" ? "Hide Details" : "Show Details";
      })
    });

    //small device menu hide
    $(".menu-overlay").find('a').on('click', function() {
      $('.menu-overlay').animate({'opacity': 'hide', 'paddingBottom': 0}, 900);
      $('#close-btn').hide();
      $('#menu-btn').show();
    });


  $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
    });

    //Hamburger and Menu
    $('#menu-btn').click(function(e){
      $('#menu-btn').hide();
      $('#close-btn').show();
      e.preventDefault();
      $('.menu-overlay').animate({'opacity': 'show', 'paddingTop': 0}, 900);
    });

    $('#close-btn').click(function(e){
      $('#close-btn').hide();
      $('#menu-btn').show();
      e.preventDefault();
      $('.menu-overlay').animate({'opacity': 'hide', 'paddingBottom': 0}, 900);
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navigation a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.navigation ul li a').removeClass("active");
        currLink.addClass("active");
    }
    else{
        currLink.removeClass("active");
    }
  });
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
