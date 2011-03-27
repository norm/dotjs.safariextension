var dotjs = 'http://localhost:3131/'+window.location.host.replace('www.','');
$('head').append("<link rel='stylesheet' href='" + dotjs + '.css' + "'>");
$.ajax({
  url: dotjs + '.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d) })
  },
  error: function(){
    console.log('no dotjs server found at localhost:3131')
  }
})
