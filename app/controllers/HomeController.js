module.exports = function(dependencies) {
  var dep = dependencies;

  function about(req, res) {
    res.sendFile('about.html', {root: dep.PATHS.PUBLIC});
  }

  function chat(req, res) {
    res.render('index');
  }

  function index(req, res) {
    res.sendFile('index.html', {root: dep.PATHS.PUBLIC});
  }

  return {
    about: about,
    chat: chat,
    index: index
  };
};

