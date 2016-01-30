var articles = [];

function Article (opts) {
  this.title = opts.author;
  this.category = opts.category;
  this.author = opts.author;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.data('title', this.title);
  $newArticle.data('category', this.category);
  $newArticle.data('author', this.author);
  $newArticle.data('publishedOn', this.publishedOn);
  $newArticle.data('body', this.body);

  $newArticle.find('h1').html(this.title);
  $newArticle.find('a').html(this.author);

  $newArticle.find('section.article-body').html(this.body);
  $newArticle.find('time[pubdat]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
