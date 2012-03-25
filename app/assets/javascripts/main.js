$(document).ready(function() {
  
  url = $("#url").html();
  tit = $("#tit").html();
  var featherEditor = new Aviary.Feather({
    apiKey: '73b7c873b',
    apiVersion: 2,
    onSave: function(imageID, newURL) {
        var img = document.getElementById(imageID);
        img.src = newURL;
        $("#t").attr("src", "http://www.tumblr.com/share?u="+encodeURIComponet(newURL)+"&t="+encodeURIComponet("Avishary"))
    },
    //appendTo: "aviary", 
    maxSize: 500
  });

  function launchEditor(id, src) {
    featherEditor.launch({
        image: id,
        url: src
    });
    return false;
  }

  $("#edit").click(function() {
    return launchEditor("img", url)
  })

})