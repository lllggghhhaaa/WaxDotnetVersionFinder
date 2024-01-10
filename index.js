const core = require('@actions/core');
const { EOL } = require("os")
const { readFileSync, appendFileSync } = require("fs");
const { parseString } = require("xml2js");

try {
    const path = core.getInput("path");
    const file = readFileSync(path);

    parseString(file, (err, result) => {
        setOutput("version", result["Project"]["PropertyGroup"][0]["Version"][0]);
    });

} catch (error) {
    console.log(error)
}

function setOutput(key, value) {
    const output = process.env['GITHUB_OUTPUT']
    appendFileSync(output, `${key}=${value}${EOL}`)
}