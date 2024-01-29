const path = require("path");

module.exports = {
    mode:'develpoment',
//    here is the entry point 
// we can set multiple entry point by make entry : => an object
    entry :{ 
        bundle:path.resolve(__dirname,'src/index.js'),
    
},
output:{
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },

    module :{
        rules : [
            // test regular expresion => any files with these extention we will apply these loaders
            {
        test: /\.css$/,
        use: ['style-loader' , 'css-loader' , 'sass-loader']}
        ]
    }
}


// loaders for css and sass to bundle these files