const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //para extraer el css y ponerlo en un archivo aparte
const CopyWebpackPlugin = require('copy-webpack-plugin'); //para copiar archivos de la carpeta public a dist
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //para minificar el css
// const TerserPlugin = require('terser-webpack-plugin'); //para minificar el js
const Dotenv = require('dotenv-webpack'); //para usar las variables de entorno
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //para analizar el bundle

//********** NOTAS:

//entry: inica el archivo de entrada
//output: indica el archivo de salida
//resolve: extensiones de los archivos que vamos a utilizar

//el type es para que el intelisense de vscode nos ayude a completar el codigo de webpack es opcional

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    mode: 'development', //solo configuracion para desarrollo
    devtool: 'source-map', //para que nos muestre los errores en el codigo original
    // watch: true, //para que webpack este escuchando los cambios
    resolve: {
        extensions: [".js"],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@templates': path.resolve(__dirname, 'src/templates'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,           // Test declara que extensión de archivos aplicara el loader
                exclude: /node_modules/,   // Exclude permite omitir archivos o carpetas especificas
                use: {                     // Use es un arreglo u objeto donde dices que loader aplicaras
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css|.styl$/i, //reconoce los archivos css y stylus
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader" //para que funcione stylus-loader
                ]
            },
            {
                //de esta forma se optimza las imagenes
                test: /\.png/, //reconoce los archivos png
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext]",
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new Dotenv(),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static:
        {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        watchFiles: path.join(__dirname, "./**"), //observa los cambios en todos nuestros archivos y actualiza el navegador
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true, //Hace que se abra en el navegador
    },
    
    // NOTA: no es necesaria la optimizacion en modo desarrollo
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin(), //para minificar el css
    //         new TerserPlugin() //para minificar el js
    //     ]
    // }
};
