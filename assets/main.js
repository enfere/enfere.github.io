$(document).ready(function() {
    $(".animsition").animsition();
    $(".app_icon").on("click", function() {
        if($(this).hasClass("unreleased")) {
            event.preventDefault();
            new tinyModal({
                title: "Hey!",
                content: "This app is not ready yet! Please check back!"
            }).show();
        }  
    });
});
$(window).load(function() {
    if($("#app_images").length) {
$(".carousel").carousel();
//        slidr.create('app_images').start();
    }
});
function tinyModal(t){if("object"!=typeof t)throw"Argument must be of type 'object'";this.options=null,this.options=$.extend({},this.defaults,t),this.outer=$("<div />").attr({"class":"tinyModalOuter",style:"opacity: 0.0"}),this.box=$("<div />").attr({"class":"tinyModalContainer"}).html('<a href="#" class="tinyModalClose">x</a><div class="tinyModalTitle">'+this.options.title+'</div><div class="tinyModalContent">'+this.options.content+"</div>").css({width:parseInt(this.options.width,10)+20+"px"});var t=this;this.box.find(".tinyModalClose").on("click",function(){event.preventDefault(), t.close()}),this.outer.html(this.box)}tinyModal.prototype.defaults={content:"",title:"",width:400,callback:null},tinyModal.prototype.close=function(){var t=this;this.outer.fadeTo(400,0,function(){t.outer.remove(),$("body").removeAttr("style")}),t.options.callback&&t.options.callback()},tinyModal.prototype.show=function(){$("body").prepend(this.outer).css({overflow:"hidden"}),this.outer.fadeTo(400,1,function(){$("input, textarea").blur(), $(".tinyModalClose").focus()})};