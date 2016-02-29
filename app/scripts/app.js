(function($) {


    $(document).ready(function() {
        console.log('ok ok ?');
        $('.prompt-link').click(function() {
            console.log('clicked ');
            var command = $(this).attr('data-prompt');
            console.log('Command : ' + command);

            if (command == 'grunt-cli') {
                $('#start .console p').writeText('npm install -g grunt-cli', function() {
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
                });
            }

            if (command == "grunt-init") {

            }
        });
    });
})(jQuery);