var window_height = parseInt($(window).height());
console.log(window_height);
var wraper_height = parseInt($('.wraper').height());
var header_height = parseInt($('.header').height());
console.log(header_height);
var footer_height = parseInt($('.footer').height());
console.log(footer_height);
var content_height = window_height - header_height - footer_height-40;
if (wraper_height < window_height) {
    $('.content').css('minHeight', content_height + 'px');
}