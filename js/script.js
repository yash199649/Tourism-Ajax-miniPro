function loadData(){
var $search = $('#searchTextField').val();
console.log($search);
 var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=' + $search + '';
 $('#map1').html('');
$('#map1').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');




 var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "3f7abae4407c4c89b6095a7b9e4386e4",
    'q': $search
});
    console.log(url);
  $.getJSON( url, function( data ) {
 var articles = data.response.docs;
     console.log(articles);
 for(var i =0 ; i < articles.length;i++ ){
     var article=articles[i];
     $('.featured').append('<li><div class="featured-box"><div class="featured-box-col1 wow fadeInRight delay-02s"><i class="fa-magic"></i></div><div class="featured-box-col2 wow fadeInRight delay-02s"><a href="'+article.web_url+'"><h3>'+article.headline.main+'</h3></a><p>'+article.snippet+'</p></div></li>');
 };
      
   
      
}).error(function(e){
      $('.featured').text('New York Times Articles could not be retrieved ' );
  }); 
    
  var wikiRequestTimeout= setTimeout(function(){
       $('feature3').text('Failed to get wikipedia Resources !!!') 
    },8000);
var wikiUrl1 = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $search.split(",",1)[0] + ' &format=json&callback=wikiCallback';
console.log($search.split(",",1)[0]);
    $.ajax({
       
        url:wikiUrl1,
        dataType:"jsonp",
        success:function(response){

            var articleList1 = response[1];
            console.log(articleList1);
            for(var i = 0; i< articleList1.length;i++) {
               var articleStr1=articleList1[i]; 
                var url = 'http://en.wikipedia.org/wiki/'  + articleStr1;
                $('.feature3').append('<li><div class="featured-box"><div class="featured-box-col1 wow fadeInRight delay-02s"><i class="fa fa-rss" aria-hidden="true"></i></div><div class="featured-box-col2 wow fadeInRight delay-02s"><a href="' + url + '"><h3>'+articleStr1+'</h3></a></div></li>');
            };
        }
    }); 




$( "#bar" ).click(function() {
  $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=bars+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');
});
$( "#cafe" ).click(function() {
  $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=cafe+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');
});
$( "#hotels" ).click(function() {
  $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=hotels+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');
});
$( "#restraunt" ).click(function() {
  $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=restaurnt+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');
});
$( "#attractions" ).click(function() {
  $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=attractions+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');
});
$( "#search" ).click(function() {
 /* $('#hidden-section').css("display","block");
  var svu='https://www.google.com/maps/embed/v1/search?key=AIzaSyBL_CXFDFal1X-FwrWqiODYKXbNxwXDz_s &q=attractions+in+' + $search + '';
$('#maps5').html('');
$('#maps5').append('<iframe id="map" src="'+svu+'" width="100%" height="100%"></iframe>');*/
$('.search1').html('');
$('.search1').append('<div class="form-group" id="searchbox"><br><br><br><input type="text" name="" id= "searchTextField2"class="form-control"  placeholder="Enter the detail.." autocomplete2="on"></div>');

});


}

//$('#form-container').submit(loadData);
$('form').submit(function (evt) {
   evt.preventDefault(); //prevents the default action
loadData();
});