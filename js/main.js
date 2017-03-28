/**
 * Created by merve on 3/28/17.
 */
$(document).on('click' , '.icon_close', function (e) {
  $("#chat_window_1").hide();
} );

$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});


$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '#btn-chat' , function() {
    //$(".msg_container_base").append("<p>"+$(".chat_input").val() +"</p>")

    var clone = $( ".base_sent" ).eq(0).clone();
    clone.find('.msg_sent').html($(".chat_input").val());
    clone.appendTo( ".msg_container_base" );

    var clone = $(".base_receive").eq(0).clone();
    clone.find('.msg_receive').html("selam");
    clone.appendTo(".msg_container_base");


});
