/*
 * jPreLoader - jQuery plugin
 * Create a Loading Screen to preload images and content for you website
 *
 * Name:			jPreLoader.js
 * Author:		Kenny Ooi - http://www.inwebson.com
 * Date:			July 11, 2012		
 * Version:		2.1
 * Example:		http://www.inwebson.com/demo/jpreloader-v2/
 *	
 */

(function ($) {
    var items = new Array(),
            errors = new Array(),
            onComplete = function () {
            },
            current = 0;

    var jpreOptions = {
        showPercentage: true,
        autoClose: true,
        closeBtnText: 'Start!',
        onetimeLoad: false,
        splashFunction: function () {
        }
    }

    //create jpreLoader UI
    var createContainer = function () {

        jOverlay = $('<div></div>')
                .attr('id', 'jpreOverlay')
                .css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 9999999
                })
                .appendTo('body');

        jLoader = $('<div></div>')
                .attr('id', 'jpreLoader')
                .appendTo(jOverlay);

        jBar = $('<div></div>')
                .attr('id', 'jpreBar')
                .css({
                    width: '0%'
                })
                .appendTo(jLoader);

        if (jpreOptions.showPercentage) {
            jPer = $('<div></div>')
                    .attr('id', 'jprePercentage')
                    .appendTo(jLoader)
                    .html('Loading...');
        }
        if (!jpreOptions.autoclose) {
            jButton = $('<div></div>')
                    .attr('id', 'jpreButton')
                    .on('click', function () {
                        loadComplete();
                    })
                    .appendTo(jLoader)
                    .text(jpreOptions.closeBtnText)
                    .hide();
        }
    }

    //get all images from css and <img> tag
    var getImages = function (element) {

        $(element).find('*:not(script)').each(function () {
            var url = "";

            if ($(this).css('background-image').indexOf('none') === -1 && $(this).css('background-image').indexOf('-gradient') === -1) {

                url = $(this).css('background-image');
                if (url.indexOf('url') !== -1) {
                    var temp = url.match(/url\((.*?)\)/);
                    url = temp[1].replace(/\"/g, '');
                }
            } else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof ($(this).attr('src')) != 'undefined') {
                url = $(this).attr('src');
            }

            if (url.length > 0) {
                items.push(url);
            }

        });
    }

    //create preloaded image
    var preloading = function () {

        if (items.length === 0) {
            completeLoading();
        } else {
            for (var i = 0; i < items.length; i++) {
                if (loadImg(items[i]))
                    ;
            }
        }
    }
    var loadImg = function (url) {
        var imgLoad = new Image();
        $(imgLoad)
                .load(function () {
                    completeLoading();
                })
                .error(function () {
                    errors.push($(this).attr('src'));
                    completeLoading();
                })
                .attr('src', url);
    }

    //update progress bar once image loaded
    var completeLoading = function () {
        current++;

        var per = Math.round((current / items.length) * 100);
        $(jBar).stop().animate({
            width: per + '%'
        }, 500, 'linear');

        if (jpreOptions.showPercentage) {
            $(jPer).text("Loading " + per + "%");
        }

        //if all images loaded
        if (current >= items.length) {
            current = items.length;

            if (jpreOptions.showPercentage) {
                $(jPer).text("100%");
            }

            //max progress bar
            $(jBar).stop().animate({
                width: '100%'
            }, 500, 'easeOutCubic', function () {
                //autoclose on
                if (jpreOptions.autoClose)
                    loadComplete();
                else
                    $(jButton).fadeIn(1000);
            });
        }
    }

    //triggered when all images are loaded
    var loadComplete = function () {
        $(jOverlay).fadeOut(800, function () {
            $(jOverlay).remove();
            onComplete();	//callback function
        });
    }


    $.fn.jpreLoader = function (options, callback) {
        if (options) {
            $.extend(jpreOptions, options);
        }
        if (typeof callback === 'function') {
            onComplete = callback;
        }

        //show preloader once JS loaded
        $('body').css({
            'display': 'block'
        });

        return this.each(function () {
            createContainer();
            getImages(this);
            preloading();
        });
    };

})(jQuery);