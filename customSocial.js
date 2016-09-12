/**
 * customSocial.js plugin
 * 
 * (C) 2016 Brightcove Inc. 
 * IMA3 plugin must be loaded first
 */

(function(window, document, vjs, undefined) {
    customSocial = function(options) {

		debug = function(msg) {
            if (options.debug) {
                videojs.log(msg);
            }
        };
		debug('customSocial: initializing plugin.')
		debug(options)
		
		var player = videojs('p1');
        player.on('loadedmetadata', function() {

        	// Set the mediainfo based values
        	options.title = player.mediainfo.name;
            options.description = player.mediainfo.description;
            options.url = document.referrer;

        	debug('customSocial: onloadedmetadata processing.')

			embedMacros = options.embedMacros || {}
			embed    = options.embedCode

	        for (var key in embedMacros) {

	            val = eval(embedMacros[key])
	            if ( embedMacros.hasOwnProperty(key) ) {
	            	debug('customSocial: replacing ' + key + ' -> ' + val)
					embed = embed.replace(key, encodeURIComponent(val));
	            }
	        }
			options.embedCode = embed
			debug('customSocial: initialzing standard plugin with new options')
			debug(options)
			player.social(options)
		});
    }
 // register the plugin with the player
    videojs.plugin("customSocial", customSocial);
}) (window, document, videojs);