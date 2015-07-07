function blurImage() {
    var wallpaperWidth = $(".wallpaper-block").css("width"); //taking width of wallpaper
    $(".js-blurred-image").css("width", wallpaperWidth); //implementing width to blurred image
}
$(window).resize(function () {
    blurImage();
});