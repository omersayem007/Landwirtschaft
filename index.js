 var mapimg ;
var clat=0;
var clon=0;

var ww = 1024;
var hh = 512;
//35.8617° N, 104.1954°e
var lat = 35.8617;
var lon= 104.1954;

var zoom = 1;

var earthquakes;

function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clat + ',' + clon + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw');
 
  earthquakes =loadStrings(" ")
  
}
function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup(){
  
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
var cy = mercY(clat);
  
    var x = mercX(lon) - cx;
var y = mercY(lat) - cy;
  
  fill(225,0,255,200);
  ellipse(x,y,8,8);
  
  
}
