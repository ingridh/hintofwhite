$(document).ready(function(){


	
	$('li.signup a').bind('mouseover',function(e){
		$('#login').hide()
		$('#signup').show()
		 e.stopPropagation(); 
	});
		
	$('li.login a').bind('mouseover',function(e){
		$('#signup').hide()
		$('#login').show()
		 e.stopPropagation(); 
	});

	$('#signup,#login,#top-nav').bind('mouseleave',function(){
		$('#signup').hide();
		$('#login').hide();
	
	});

});

String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
};

(function($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function (amount) {
    return this.each(function () {
      var segmentGap = 100 / (amount - 1) + "%"
        , segment = "<div class='ui-slider-segment' style='margin-left: " + segmentGap + ";'></div>";
      $(this).prepend(segment.repeat(amount - 2));
    });
  };

  $(function() {
  


    // jQuery UI Sliders
    var $sizeSlider = $("#size-slider");
    if ($sizeSlider.length) {
      $sizeSlider.slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min"
      }).addSliderSegments($sizeSlider.slider("option").max);
    }


    // Placeholders for input/textarea
    $("input, textarea").placeholder();


    $(".btn-group a").on('click', function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $('a[href="#fakelink"]').on('click', function (e) {
      e.preventDefault();
    });

    // Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();
    
  });
  
})(jQuery);
