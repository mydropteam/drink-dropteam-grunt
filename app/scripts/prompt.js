(function($) {
    $.fn.writeText = function(content, speed, callback) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        var timer = setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
            else {
                callback();
                clearInterval(timer);
            }
        }, speed);
    };

})(jQuery);