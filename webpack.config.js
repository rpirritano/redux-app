//define the exports needed
//telling web pack what file to start the bundle with and where to place it
//entry is where to start
//output : the path to place the file and file name, and public path so the dev server knows where to find

//devServer will tell how the devServer should opperate

//module key will be the instructions of what to do

//then change   "start": "babel-node ./src/" in the package.json
module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true, //use client entry point
    contentBase: "./dist", //where to find folder, by default, index.HTML will be served
    port: 3000 // what port to user
  },
  module: {
    loaders: [
      {
        test: /\.js$/, //any file that ends with .js
        exclude: /(node_modules)/, //exclude the files in node_modules
        loader: ['babel'],
        query: {
          presets: ['latest', 'stage-0']
        }
      },
      {
        test: /\.json$/, //any json files
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }

}
