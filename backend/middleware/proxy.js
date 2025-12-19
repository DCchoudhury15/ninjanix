const { createProxyMiddleware } = require("http-proxy-middleware");
const services = require("../config/services");

function createServiceProxy(serviceName) {
    const service = services[serviceName];

    if (!service) {
        throw new Error(`Service ${serviceName} not found`);
    }

    return createProxyMiddleware({
        target: service.baseURL,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return path.replace(`/${serviceName}`, "");
        },
    });
}

module.exports = { createServiceProxy };
