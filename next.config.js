/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/src/assets')],
    },
    // experimental: {
    //     disableOptimizedLoading: true,
    // },
}

module.exports = nextConfig
