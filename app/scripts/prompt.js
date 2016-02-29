(function($) {
    $.fn.writeText = function(content, callback) {
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
        }, 70);
    };

})(jQuery);