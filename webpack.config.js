module.exports = {
    module: {
        rules: [
            {
                exclude: [/\.(js|mjs|jsx|ts|tsx|md)$/, /\.html$/, /\.json$/],
                loader: 'file-loader',
            },
            {
                loader: 'raw-loader',
                test: /\.md/i
            }
        ]
    }
}