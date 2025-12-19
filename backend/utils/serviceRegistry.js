const services = require("../config/services");

function getService(name) {
    return services[name];
}

module.exports = { getService };
