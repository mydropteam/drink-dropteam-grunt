(function($) {


    $(document).ready(function() {
        $('.prompt-link').on('click', onPromptLinkClicked);

        $('#displayer-sprite').on('click', function() {
            pluginPanelReset(function() {
                $('#plugin-sprite').fadeIn();
            });
        });
        $('#displayer-jshint').on('click', function() {
            pluginPanelReset(function() {
                $('#plugin-jshint').fadeIn();
            });
        });
        $('#displayer-svg').on('click', function() {
            pluginPanelReset(function() {
                $('#plugin-svg').fadeIn();
            });
        });

        function onPromptLinkClicked() {

            console.log('prompt-link clicked');
            var command = $(this).attr('data-prompt');

            var clear = true;
            if (typeof $(this).attr('data-prompt-clear') !== "undefined") {
                if ($(this).attr('data-prompt-clear').length > 0 && $(this).attr('data-prompt-clear') == "false") {
                    clear = false;
                }
            }

            if (clear == true && $('#start .console p').html().length > 0) {
                $('#start .console-inner').html('<p></p>');
            }

            if (command == 'grunt-cli') {
                $('#start .console p').writeText('npm install -g grunt-cli', 100, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">GET</span> https://registry.npmjs.org/grunt-cli <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">304</span> https://registry.npmjs.org/grunt-cli <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">GET</span> https://registry.npmjs.org/nopt <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">GET</span> https://registry.npmjs.org/findup-sync <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">GET</span> https://registry.npmjs.org/resolve <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">200</span> https://registry.npmjs.org/findup-sync <br/>');
                    $('#start .console p').append('npm <span class="green">http</span> <span class="purple">GET</span> https://registry.npmjs.org/findup-sync/-/findup-sync-0.1.3.tgz <br/>');
                    $('#start .console p').append('... <br/>');
                    $('#start .console p').append('/usr/local/bin/grunt -> /usr/local/lib/node_modules/grunt-cli/bin/grunt <br/>');
                    $('#start .console p').append('grunt-cli@0.1.13 /usr/local/lib/node_modules/grunt-cli <br/>');
                    $('#start .console p').append('├── resolve@0.3.1 <br/>');
                    $('#start .console p').append('├── nopt@1.0.10 (abbrev@1.0.7) <br/>');
                    $('#start .console p').append('└── findup-sync@0.1.3 (lodash@2.4.2, glob@3.2.11) <br/>');
                    $('#start .console p').after('<p></p>');
                });
            }

            if (command == "grunt-init-install") {
                $('#start .console p').writeText('npm install -g grunt-init', 100, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('/usr/local/bin/grunt-init -> /usr/local/lib/node_modules/grunt-init/bin/grunt-init <br/>');
                    $('#start .console p').append('grunt-init@0.3.2 /usr/local/lib/node_modules/grunt-init <br/>');
                    $('#start .console p').append('├── semver@1.0.14 <br/>');
                    $('#start .console p').append('├── colors@0.6.2 <br/>');
                    $('#start .console p').append('├── async@0.2.10 <br/>');
                    $('#start .console p').append('├── hooker@0.2.3 <br/>');
                    $('#start .console p').append('├── lodash@2.4.2 <br/>');
                    $('#start .console p').append('├── grunt@0.4.5 (which@1.0.9, dateformat@1.0.2-1.2.3, eventemitter2@0.4.14, getobject@0.1.0, rimraf@2.2.8, async@0.1.22, grunt-legacy-util@0.2.0, exit@0.1.2, nopt@1.0.10, minimatch@0.2.14, glob@3.1.21, lodash@0.9.2, coffee-script@1.3.3, underscore.string@2.2.1, iconv-lite@0.2.11, findup-sync@0.1.3, js-yaml@2.0.5, grunt-legacy-log@0.1.3) <br/>');
                    $('#start .console p').append('└── prompt@0.1.12 (pkginfo@0.3.1, async@0.1.22, winston@0.5.11) <br/>');
                    $('#start .console p').after('<p></p>');
                });
            }

            if (command == "grunt-init-tpl") {
                $('#start .console p').writeText('git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile', 30, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append("Cloning into '/Users/demo/.grunt-init/gruntfile'... <br/>");
                    $('#start .console p').append("remote: Counting objects: 29, done. <br/>");
                    $('#start .console p').append("remote: Total 29 (delta 0), reused 0 (delta 0), pack-reused 29 <br/>");
                    $('#start .console p').append("Unpacking objects: 100% (29/29), done. <br/>");
                    $('#start .console p').append("Checking connectivity... done <br/>");
                    $('#start .console p').after('<p></p>');
                });
            }

            if (command == "grunt-init") {
                $('#start .console p').writeText('grunt-init gruntfile', 30, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('<u>Running "init:gruntfile" (init) task</u><br/>');
                    $('#start .console p').append('This task will create one or more files in the current directory, based on the<br/>');
                    $('#start .console p').append('environment and the answers to a few questions. Note that answering "?" to any<br/>');
                    $('#start .console p').append('question will show question-specific help and answering "none" to most questions will leave its value blank.<br/>');
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('<b>"gruntfile" template notes:</b><br/>');
                    $('#start .console p').append('This template tries to guess file and directory paths, but you will most likely<br/>');
                    $('#start .console p').append('need to edit the generated Gruntfile.js file before running grunt. <u>If you run</u><br/>');
                    $('#start .console p').append('<u>grunt after generating the Gruntfile, and it exits with errors, edit the file!</u><br/>');
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('<b>Please answer the following:</b><br/>');
                    $('#start .console p').append('[?] Is the DOM involved in ANY way? (<span data-prompt="grunt-init-q1" data-prompt-clear="false" class="prompt-link grunt-init-q1">Y/n</span>) <span class="grunt-init-q1-r"></span>');
                    $('.grunt-init-q1').on('click', onPromptLinkClicked);
                });
            }
            if (command == "grunt-init-q1") {
                $('.grunt-init-q1-r').writeText('Y', 110, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('[?] Will files be concatenated or minified? (<span data-prompt="grunt-init-q2" data-prompt-clear="false" class="prompt-link grunt-init-q2">Y/n</span>) <span class="grunt-init-q2-r"></span>');
                    $('.grunt-init-q2').on('click', onPromptLinkClicked);

                    //var scroll = $('#start .console-inner');
                    //var scrollTo = scroll[0].scrollHeight;
                    //scroll.scrollTop(scrollTo);
                });
            }
            if (command == "grunt-init-q2") {
                $('.grunt-init-q2-r').writeText('Y', 110, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('[?] Will you have a package.json file? (<span data-prompt="grunt-init-q3" data-prompt-clear="false" class="prompt-link grunt-init-q3">Y/n</span>) <span class="grunt-init-q3-r"></span>');
                    $('.grunt-init-q3').on('click', onPromptLinkClicked);

                    //var scroll = $('#start .console-inner');
                    //var scrollTo = scroll[0].scrollHeight;
                    //scroll.scrollTop(scrollTo);
                });
            }
            if (command == "grunt-init-q3") {
                $('.grunt-init-q3-r').writeText('Y', 110, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('[?] <span class="green">Do you need to make any changes to the above before continuing?</span> (<span data-prompt="grunt-init-q4" data-prompt-clear="false" class="prompt-link grunt-init-q4">y/N</span>) <span class="grunt-init-q4-r"></span>');
                    $('.grunt-init-q4').on('click', onPromptLinkClicked);

                    //var scroll = $('#start .console-inner');
                    //var scrollTo = scroll[0].scrollHeight;
                    //scroll.scrollTop(scrollTo);
                });
            }
            if (command == "grunt-init-q4") {
                $('.grunt-init-q4-r').writeText('N', 110, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('Writing Gruntfile.js...<span class="green">OK</span><br/>');
                    $('#start .console p').append('Writing package.json...<span class="green">OK</span><br/>');
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('<b>Initialized from template "gruntfile".</b><br/>');
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('<span class="green">Done, without errors.</span><br/>');
                    $('#start .console p').after('<p></p>');

                    var scroll = $('#start .console-inner');
                    var scrollTo = scroll[0].scrollHeight;
                    scroll.scrollTop(scrollTo);
                });
            }

            if (command == "grunt-plugin") {
                $('#start .console p').writeText('npm install grunt-contrib-jshint --save-dev', 100, function() {
                    $('#start .console p').append('<br/>');
                    $('#start .console p').append('npm WARN <span class="purple">package.json</span> Drink-Dropteam--Grunt@1.0.0 No repository field. <br/>');
                    $('#start .console p').append('grunt-contrib-jshint@1.0.0 node_modules/grunt-contrib-jshint <br/>');
                    $('#start .console p').append('├── hooker@0.2.3 <br/>');
                    $('#start .console p').append('├── chalk@1.1.1 (escape-string-regexp@1.0.5, supports-color@2.0.0, strip-ansi@3.0.1, ansi-styles@2.2.0, has-ansi@2.0.0) <br/>');
                    $('#start .console p').append('└── jshint@2.9.1 (strip-json-comments@1.0.4, exit@0.1.2, shelljs@0.3.0, console-browserify@1.1.0, lodash@3.7.0, minimatch@2.0.10, htmlparser2@3.8.3, cli@0.6.6) <br/>');
                    $('#start .console p').after('<p></p>');
                });
            }

        }

        function pluginPanelReset(callback) {
            $('#grunt-face, #plugin-sprite, #plugin-jshint, #plugin-svg').css('display', 'none');
            callback();
        }
    });
})(jQuery);