const path = require("path");
const cracoPlugin = require("craco-less")
module.exports = {
    plugins: [
        {
            plugin: cracoPlugin
        }
    ],
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
}