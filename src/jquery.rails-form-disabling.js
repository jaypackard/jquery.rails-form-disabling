/*!
 * jQuery Disabling v 1.0.0
 * https://github.com/jaypackard/jquery.disabling
 *
 * Copyright 2014 Jay Packard
 * Released under the MIT license
 */
(function($) {
  $.fn.rails_form_disabling = function(options) {
    var $this = $(this);
    
    $this.click(function() {
       perform($(this));
    });  

    $this.each(function() {
       perform($(this));
    });

    return $this;
  };

  function perform($obj) {
    if ($obj.is(':checked')) {
      $obj.siblings('[name$="[_destroy]"]').val(0);
      $obj.siblings().attr('disabled', false);
    }
    else {
      $obj.siblings('[name$="[_destroy]"]').val(1);
      $obj.siblings().attr('disabled', $obj.siblings('[name$="[id]"]').val() == '');
    }
  }
})(jQuery);