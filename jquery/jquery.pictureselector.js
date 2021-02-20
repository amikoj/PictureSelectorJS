(function (window, document, $) {
    var PicSeletor = function (options) {
        this.options = options;
        this.initDow();
    }


    PicSeletor.prototype = {
        initDow: function(){
            // 初始化dom 结构

        }

    }

    // 插件选择器属性扩展
    $.fn.pictureSelector = function (options) {
        const defaultOptions = {};
        const opt = $.extend({},defaultOptions,options);
        return new PicSeletor(opt);
    }

})(window, document, jQuery);

