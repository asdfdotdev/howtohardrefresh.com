/**
 * @package How to Hard Refresh
 * @copyright 2017 ChristopherL (https://github.com/chrislarrycarl)
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */

;(function ($) {

    $(function () {
        var browser = platform.name.toLowerCase(),
            os = platform.os.family.toLowerCase();

        if (os.indexOf('windows') > -1) {
            os = 'windows';
        }
        else if (os.indexOf('linux') > -1 || os.indexOf('ubuntu') > -1) {
            os = 'linux';
        }
        else {
            os = 'mac';
        }

        if (browser == 'ie') {
            browser = 'internet-explorer';
        }
        else {
            browser = browser.replace(' ', '-').toLowerCase();
        }

        $('.nav-browser a:first-child').trigger('click');
        $('.nav-os').each(function(){
            $(this).children('a:not(".hidden"):first').trigger('click');

            if ($(this).children('.icon-' + os + ':not(".hidden")').length) {
                $(this).children('.icon-' + os).trigger('click');
            }
        });

        if ($('.nav-browser .icon-' + browser).length) {
            $('.nav-browser .icon-' + browser).trigger('click');
        }
    });

    $('.nav-browser a').on('click', function(event){
        event.preventDefault();

        var browser = $(this).attr('data-browser');

        $('.nav-browser a').removeClass('active');
        $('.browser-instructions').removeClass('active');
        $('.browser-' + browser).addClass('active');

        $('.nav-browser .icon-' + browser).addClass('active');

        $('header h1 .on-browser').text($('.nav-browser .active').attr('data-browser').replace('-', ' '));

        if (typeof $('.browser-instructions.active .nav-os a.active').attr('data-os') !== 'undefined') {
            $('header h1 .on-os').text($('.browser-instructions.active .nav-os a.active').attr('data-os').replace('-', ' '));
        }
    });

    $('.nav-os a').on('click', function(event){
        event.preventDefault();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.browser-instructions').children('.os-instructions').removeClass('active');
        $(this).closest('.browser-instructions').children('.os-' + $(this).attr('data-os')).addClass('active');

        $('header h1 .on-os').text($('.browser-instructions.active .nav-os a.active').attr('data-os').replace('-', ' '));
    });


    // Event tracking
    $(function(){
        // global listener to track link clicks
        $('a').on('click',function(event){
            var clicked = $(this),
                link = clicked.attr('href');

            // not all links need to be forwarded after tracking, but some do
            if (clicked.attr('target') !== '_blank' &&
                typeof link != 'undefined' &&
                link.indexOf('javascript:') !== 0 &&
                link.indexOf('#') !== 0)
            {
                event.preventDefault();

                // when tracking complete event fires, send them on their way
                $(document).one('ga_track_complete', function(){
                    window.location.href = link;
                });
            }

            // fire tracker with link details
            $(document).trigger('ga_track', [{
                type:"link_click",
                identifier:{
                    dom_data:clicked.attr('data-event'),
                    dom_id:clicked.attr('id')
                },
                target:link}]
            );
        });

        // track newsletter signup, send event to both Optimizely and GA
        window['optimizely'] = window['optimizely'] || [];
        $('#mc-embedded-subscribe-form').one('submit', function(event){
            event.preventDefault();
            try {
                window.optimizely.push(["trackEvent", "newsletterSignUp"]);

                var op_experiment_id = window['optimizely'].data.state.activeExperiments[0],
                    op_variation_name = window['optimizely'].data.state.variationNamesMap[op_experiment_id];

                $(document).trigger('ga_track', [{
                    type: 'form_submission',
                    identifier: 'Newsletter Sign-Up Test: ' + op_variation_name
                }])
            }
            catch (err) {}
            finally {
                $(this).submit();
            }
        });

        // misc listner to track non link clicks (images, easter egg spans)
        $('img, span.egg, .play-button').on('click', function(event){
            if(! $(this).parent().is('a')){
                var clicked = $(this);

                // fire tracker with element details
                $(document).trigger('ga_track', [{
                    type:"other_click",
                    identifier:{
                        dom_data:clicked.attr('data-event'),
                        dom_id:clicked.attr('id')
                    },
                    target:clicked.attr('src')}]
                );
            }
        });

        // tracker listener - this is where the magic happens
        $(document).on('ga_track', function ga_track(event, tracker){

            // if this screws up it can have unsavory consequences, so we package it with error handling
            try {
                var ga_label = [];

                // if tracker identifier is an object validate and collect properties
                // valid properties include: dom_data, dom_id, and dom_name (each should contain associated attribute values)
                if (typeof tracker.identifier === 'object') {
                    if (validate_element(tracker.identifier.dom_data)) {
                        ga_label.push(tracker.identifier.dom_data);
                    }

                    if (validate_element(tracker.identifier.dom_id)) {
                        ga_label.push(tracker.identifier.dom_id);
                    }

                    if (validate_element(tracker.identifier.dom_name)) {
                        ga_label.push(tracker.identifier.dom_name);
                    }
                }
                // if tracker identifier is a string just add it directly to our label
                else if (typeof tracker.identifier === 'string') {
                    ga_label.push(tracker.identifier);
                }

                // if tracker target is set add it directly to our label
                if (tracker.target != null) {
                    ga_label.push(tracker.target);
                }

                // package tracker up and send it to google, fire the complete event as the callback
                ga('send', 'event', window.location.href, tracker.type, ga_label.join(' | '), {
                    'hitCallback': function () {
                        $(document).trigger('ga_track_complete');
                    }
                });
            }

                // we're not worried about dealing with errors for now, just send them on their way
                // this would be a good spot to add error logging for this stuff if you're so inclined
            catch(e) {}

                // some people have ad blocking enabled which causes the listener above to break links
                // (because the google analytics library doesn't load with most ad blocking) this fallback
                // will ensure that tracking doesn't break site functionality that depends on the track
                // complete event to fire, it will also help reduce click delay when the callback above doesn't
                // execute in a timely manner (that may result in lost tracking, but it's a slightly better ux)
            finally{
                setTimeout(function(){ $(document).trigger('ga_track_complete'); }, 500);
            }
        });

        /**
         * Validate tracker element to determine if it should be added to our event label.
         * This helps us avoid pushing usless data to google (nulls, undefineds, etc.)
         *
         * @param element       parameter of the object being validated
         * @returns {boolean}   whether the element is valid or not
         */
        function validate_element(element) {
            var valid = false;

            if (typeof element !== 'undefined' &&
                element !== undefined &&
                element != '')
            {
                valid = true;
            }

            return valid;
        }
    });

})(jQuery);
