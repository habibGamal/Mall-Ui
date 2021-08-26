class RowSlide {
    constructor(container){
        this.width = container.width();
        this.container = container;
        this.rightArrow = this.container.children('.right-arrow');
        this.leftArrow = this.container.children('.left-arrow');
        this.row = this.container.children('.row-show');
        this.performAction();
    }
    performAction(){
        this.row.scroll(()=>{
            let availableLeft = this.row.get(0).scrollWidth - (this.row.get(0).scrollLeft + this.width);
            console.log(availableLeft,this.row.get(0).scrollWidth,this.width);
            if(availableLeft == 0){
                this.rightArrow.removeClass('active');
            };
            if(availableLeft > 0){
                this.rightArrow.addClass('active');
            };
            if(availableLeft == this.row.get(0).scrollWidth - this.width){
                this.leftArrow.removeClass('active');
            };
            if(availableLeft < this.row.get(0).scrollWidth - this.width){
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
    let navBar = $('#nav-bar');
    let bars = $('.bars');
    let logo = $('.logo');
    let escapeNav = $('#escape-effect-nav');
   
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
    // search toggle in small screens
    $('.circle.search-icon').click(()=>{
        $('#search').addClass('active');
        $('#search-input').focus();
        $('.circle.search-icon').addClass('active');
    })
    $('#search-input').blur(()=>{
        $('#search').removeClass('active');
        $('.circle.search-icon').removeClass('active');
    });
    /*
    Name : Product kit
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