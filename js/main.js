class RowSlide {
    constructor(container){
        this.width = 1088;
        this.container = container;
        this.rightArrow = this.container.children('.right-arrow');
        this.leftArrow = this.container.children('.left-arrow');
        this.row = this.container.children('.row-show');
        this.performAction();
    }
    performAction(){
        this.row.scroll(()=>{
            let availableLeft = this.row.get(0).scrollWidth - (this.row.get(0).scrollLeft + this.width);
            if(availableLeft == 0){
                this.rightArrow.removeClass('active');
            };
            if(availableLeft > 0){
                this.rightArrow.addClass('active');
            };
            if(availableLeft == this.width){
                this.leftArrow.removeClass('active');
            };
            if(availableLeft < this.width){
                this.leftArrow.addClass('active');
            };
        });
        this.rightArrow.click(()=>{
            this.row.animate({scrollLeft:this.width},500,'swing');
        });
        this.leftArrow.click(()=>{
            this.row.animate({scrollLeft:-this.width},500,'swing');
        });
    }
}
$(document).ready(()=>{
    /*
    Name : Nav-Bar kit
    */
   let nav = $('nav');
   let navBar = $('#nav-bar');
   let bars = $('.bars');
   let logo = $('.logo');
   let escapeNav = $('#escape-effect-nav');
//    $(window).scroll(()=>{
//        if($(this).scrollTop() > 0){
//            if(!nav.hasClass('active')){
//                nav.addClass('active')
//            }
//        }
//        if($(this).scrollTop() === 0){
//            if(nav.hasClass('active')){
//                nav.removeClass('active')
//            }
//        }
//    })
    function toggleNav(){
        navBar.toggleClass('active');
        bars.toggleClass('nav-bar');
        logo.toggleClass('nav-bar');
    }
    function removeNav(){
        navBar.removeClass('active');
        bars.removeClass('nav-bar');
        logo.removeClass('nav-bar');
    }
    bars.click(()=>{
        toggleNav();
        escapeNav.toggleClass('active');
    });
    escapeNav.click(()=>{
        removeNav();
        escapeNav.removeClass('active');
    })
    /*
    Name : Product kit
    */
   // $('.product').each((i,e)=>{
       //     $(e).css({"animation-delay":.1 + (i*.05) + 's'});
       // });
       /*
       Name : User-Form kit
       */
    let escapeEffect = $('#escape-effect-form');
    let userBtn      = $('#user');
    userBtn.click(()=>{
        escapeEffect.addClass('active');
        $(userBtn.data('pop-up-form')).addClass('active');
    });
    escapeEffect.click(()=>{
        escapeEffect.removeClass('active');
        $(userBtn.data('pop-up-form')).removeClass('active');
    });
    /*
        Name : Row-Show kit
    */
    new RowSlide($('#row-1'));
    // new RowSlide($('#row-2'));

});