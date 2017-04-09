// Skip ESLint on older node versions: < node@4.0.0
// https://travis-ci.org/chimurai/http-proxy-middleware/builds/212791414

var exec = require('child_process').exec;
var command = '"node_modules/.bin/eslint" --config=.eslintrc.json --format=codeframe index.js lib examples --color';
var majorVersion = parseInt(process.versions.node[0], 10);

if (majorVersion > 0) {
    exec(command, execHandler);
} else {
    console.log('ESLint: Skipping ESLint on older Node versions');
}

function execHandler(error, stdout, stderr) {
    if (error !== null) {
        console.log('ESLint exec error: ' + error);
    }

    if (stdout) {
        console.log(stdout);
    } else {
        console.info('ESLint: No linting issues found.');
    }
}
