var express = require("express");
var app     = express();
var path    = require("path");
const port = 80;
const expressLayouts = require('express-ejs-layouts');
var price       =   require("./js_backend/price.js");

var timeout = require('connect-timeout');

app.use(timeout('5s'));

const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 1 * 30 * 1000, // 15 minutes
  max: 200 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);



//const helmet = require("helmet");
//app.use(helmet());

app.use(express.static(__dirname+"/"));

//set view engine
// app.use(expressLayouts);
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/',function(req,res){
//  res.sendFile(path.join(__dirname+'/html/index.html'));
//    // res.send("aaaa");
// });

 
 

app.get('/farms',function(req,res){
   var data = Array();
     data['setting']=Array();
     data['farm']=JSON.parse(JSON.stringify(price.poolinfo));
     data['rate']=price.rate_lp;
     data['nero']=price.price.NERO;
     data['rewardblock']=price.rewardblock;
     data['t']=new Date();
     data["title"] = "Farm Liquidity";
     data["url"] = "Farms";
     
     console.log(data['farm']);
 
     
    res.render('pages/farm',{'data' :   data });
 });
 
 app.get('/help',function(req,res){
  var data = Array();
    data['setting']=Array();
    data['nero']=price.price.NERO;
    data['t']=new Date();
    data["title"] = "Help";
    data["url"] = "Help";
    
   
    
   res.render('pages/help',{'data' :   data });
});
 
 app.get('/',function(req,res){
   var data = Array();
   data['setting']=Array();
   data['t']=new Date();
   data['nero']=price.price.NERO;
   data["title"] = "Home";
   data["url"] = "Home";
   
    res.render('pages/home',{'data' : data});
 });
 
 
 


app.listen(port, () => console.info(`App listen on port ${port}`));