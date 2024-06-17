$(document).ready(function() {
    $('.projects__gallery').slick({
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="slick-prev"></button>`,
        nextArrow: `<button type="button" class="slick-next"></button>`,
        dots: true,
        infinite: false,
        customPaging: function(slider, i) {
            return `<div class="custom-dot">
                        <div class="custom-dot-inner"></div>
                        <div class="custom-dot-spacer"></div>
                    </div>`;
        }
    });
});

$(document).ready(function() {
    $('.feedback__slides').slick({
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="slick-prev"></button>`,
        nextArrow: `<button type="button" class="slick-next"></button>`,
        dots: true,
        infinite: false,
        customPaging: function(slider, i) {
            return `<div class="custom-dot">
                        <div class="custom-dot-inner"></div>
                        <div class="custom-dot-spacer"></div>
                    </div>`;
        }
    });
});