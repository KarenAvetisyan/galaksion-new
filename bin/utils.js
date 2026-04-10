const fs = require('fs');

const awaitTo = (promise) =>
    promise.then((data) => [null, data]).catch((err) => [err]);

const readFile = async (filename, ...rest) =>
    awaitTo(
        new Promise((resolve, reject) =>
            fs.readFile(filename, ...rest, (err, data) =>
                err ? reject(err) : resolve(data),
            ),
        ),
    );

const writeFile = async (filename, data, ...rest) =>
    awaitTo(
        new Promise((resolve, reject) =>
            fs.writeFile(filename, data, ...rest, (err) =>
                err ? reject(err) : resolve(true),
            ),
        ),
    );

module.exports = { readFile, writeFile };
