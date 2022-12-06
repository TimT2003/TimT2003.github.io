var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $subscribeWindow = $(".subscribe_window");
var $popThankYouWindow = $(".thank_you_window");
var $popClose = $(".close-btn");
var $popUp = $('#popup');
var $subscribe = $('#subscribe')
$(function() {
  $popClose.on("click", function() {
    $popOverlay.fadeOut();
    $popWindow.fadeOut();
  });
 
  $(document).on("click", function(event) {
    if ($(event.target).closest($popWindow).length) return;
    if ($(event.target).closest($popUp).length) return;
    event.stopPropagation();
  });
 
$(".subscribe-form").submit(function() {
    var th = $(this);
    $.ajax({
      url: "https://api.slapform.com/rpo22@yandex.ru", 
      dataType: "json",
      method: 'POST',
      data: th.serialize()
    })
   
      setTimeout(function() {
        th.trigger("reset");
      }, 1000); return false;
  });
});
   
$popUp.on('click', function(){
});
