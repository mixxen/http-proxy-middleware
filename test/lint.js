var exec = require('child_process').exec;

var majorVersion = parseInt(process.versions.node[0], 10);
var command = '"node_modules/.bin/eslint" --config=.eslintrc.json --format=codeframe index.js lib examples --color';

// Skip eslint on older node versions: < node@4.0.0
// https://travis-ci.org/chimurai/http-proxy-middleware/builds/212791414

if (majorVersion > 0) {
    exec(command, execHandler);
} else {
    console.log('Skipping ESLint on older Node versions');
}

function execHandler(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
}
