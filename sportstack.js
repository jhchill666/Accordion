;( function( $, window, undefined ) {


    var SportStack = function( options, element ) {
        this.$el = $(element);
        this._init(options);
    };

    SportStack.prototype = {
        _init : function(options) {
            this.options = $.extend( true, {}, options );
            this._config();
            this._initEvents();
        },
        _config : function() {
            this.$items = this.$el.find( '.item-header' );
        },
        _initEvents : function() {
            this.$items.on('click.sportstack', function() {
                var $item = $(this).parent(),
                    hasClass = $item.hasClass('expanded'),
                    method = hasClass ? "removeClass" : "addClass";
                $item[method]("expanded"); 
            });
        }
    };


    $.fn.sportstack = function( options ) {
        return this.each(function() {
            new SportStack(options, this);
        });
    };


} )( jQuery, window );