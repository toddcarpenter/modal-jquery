var modal = (function () {
  var $window = $(window),
    $body = $('body'),
    $modal = $('<div class="modal" style="position:relative; z-index:1; background:white; padding: 20px;"></div>'),
    $close = $('<a class="modClose" style="cursor:pointer; position:absolute; top:10px; right:10px;">X</a>'),
    $content = $('<div class="content"></div>'),
    $bg = $('<div class="bg" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.5);"></div>');

  $modal.append($content, $close);

  $close.on('click', function (e) {
    e.preventDefault();
    modal.close();
  });

  $bg.on('click', function () {
    modal.close();
  });

  return {
    open: function (settings) {
      var modW = settings.width || auto,
        modH = settings.height || auto;

      $content.empty().append(settings.content);

      $modal.css({ width: modW, height: modH });
      $body.append($modal, $bg);

      modal.center();

      $window.on('resize', modal.center);
    },
    close: function () {
      $modal.detach();
      $bg.detach();
    },
    center: function () {

      var modW = $modal.outerWidth(),
        modH = $modal.outerHeight() + 50,
        winW = $window.width(),
        winH = $window.height();

      $modal.css({ top: (winH - modH) / 2, left: (winW - modW) / 2 });
    }
  }
}());