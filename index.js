let id=null
$('.sidenav_button img').click(()=>{
  $('.sidebar').css('width','400px')
   $('.dark-bg').css('display','block')
    mymove();
})

function mymove(){
    console.log('started');
    let elem=$('.sidebar .sidebar-icon');
//     elem.animate({
//        transform:"rotate(20deg)"
// },5000);
elem.removeClass("removeanimate");
elem.addClass("animate")

}
function notmove(){
    let elem=$('.sidebar .sidebar-icon');
    elem.removeClass("animate");
    elem.addClass("removeanimate")
}
$('.sidebar .sidebar-icon').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
    notmove();
})
$('.dark-bg').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
    notmove();
})

// FOR SMALLER SCREEN
$('#icon_img').click(()=>{
    $('.sidebar').css('width','100%')
    $('.dark-bg').css('display','block')
})


$(function() {
    var Accordion = function(el, multiple) {
       this.el = el || {};
       this.multiple = multiple || false;
        
       var links = this.el.find('.link');
 
       links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
 
    Accordion.prototype.dropdown = function(e) {
       var $el = e.data.el;
          $this = $(this),
          $next = $this.next();
 
       $next.slideToggle();
       $this.parent().toggleClass('open');
 
       if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
       };
    }  
 
    var accordion = new Accordion($('#accordion'), false);
 });
 
 $(function() {
    var Accordion = function(el, multiple) {
       this.el = el || {};
       this.multiple = multiple || false;
        
       var links = this.el.find('.link1');
 
       links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
 
    Accordion.prototype.dropdown = function(e) {
       var $el = e.data.el;
          $this = $(this),
          $next = $this.next();
 
       $next.slideToggle();
       $this.parent().toggleClass('open');
 
       if (!e.data.multiple) {
          $el.find('.submenu1').not($next).slideUp().parent().removeClass('open');
       };
    }  
 
    var accordion = new Accordion($('#accordion1'), false);
 });