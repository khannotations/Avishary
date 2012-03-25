$(document).ready(function() {
  
  url = $("#url").html();
  var featherEditor = new Aviary.Feather({
    apiKey: '73b7c873b',
    apiVersion: 2,
    onSave: function(imageID, newURL) {
        var img = document.getElementById(imageID);
        img.src = newURL;
    },
    postUrl: url
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