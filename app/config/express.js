module.exports = function(app, express) {
  // Serve static assets from the app folder. 
  // This enables things like javascript and stylesheets to be loaded as expected.
  // You would normally use something like nginx for this normally,
  // but this makes for a simpler demo app to just let express do it.
  app.use(express.static(__dirname + '/../../public'));

  // Set the view directory, this enables us to use the .render method inside routes
  app.set('views', __dirname + '/../views'); 

  // Set the template engine to ejs
  app.set('view engine', 'ejs');
  app.engine('.ejs', require('ejs').__express);
}
