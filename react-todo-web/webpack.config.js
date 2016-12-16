const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'client',

    displayModules: false,
    entry: {
        index: 'components/index.jsx',
        dashboard: 'components/dashboard.jsx',
        vendor: __dirname + '/src/vendor.jsx'
    },

    devtool: 'source-map',
    output: {
        path: __dirname + "/target/classes/static",
        filename: '[name].bundle.js'
    },

    resolve: {
        root: [
            __dirname + "/src",
            __dirname + "/src/components"
        ]
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass!import-glob"
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }
        ]
    },

    sassLoader: {
        includePaths: [__dirname, "./src/components"]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.ProvidePlugin({
            $: "jquery",
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new ExtractTextPlugin(
            "styles.css"
        ),
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            title: "Home Page",
            filename: 'index.html',
            chunks: ['vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            title: "Dashboard",
            filename: 'dashboard.html',
            chunks: ['vendor', 'dashboard']
        })
    ],

    devServer: {
        port: 3000,
        hot: true,
        inline: true,
        noInfo: true,
        host: '0.0.0.0',
        watchOptions: {
            aggregateTimeout: 1000
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    }
};

