const core = require('@actions/core');
const github = require('@actions/github');
const { readFileSync } = require("fs");
const { parseString } = require("xml2js");

try {
    const path = core.getInput("path");

    const file = readFileSync(path);

    parseString(file, (err, result) => {
        core.setOutput("version", result["Project"]["PropertyGroup"][0]["Version"][0]);
    });

} catch (error) {
    console.log(error)
    //core.setFailed(error.message);
}