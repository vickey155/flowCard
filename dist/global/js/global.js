"use strict";

;
$(function () {
  var isTouch = 'ontouchstart' in document.documentElement ? 'touchend' : 'click',
      _on = $.fn.on;

  if (!$.fn.onClick) {
    $.fn.onClick = function () {
      arguments[0] = arguments[0] === 'click' ? isTouch : arguments[0];
      return _on.apply(this, arguments);
    };
  }

  $(".header-purple,.header-white").onClick('click', 'img', function () {
    window.history.go(-1);
  });
});

var layer = function () {
  console.log(99);

  var layeSurerInit = function layeSurerInit(errTip) {
    var temp = '<div class="layer-pop"><div class="layer-box">' + '<div class="layer-cont"><p>' + errTip + '</p></div>' + '<div class="layer-btn"><a href="javascript:void(0);" class="sure-btn">确定</a>' + '</div></div></div>';
    $('body').append(temp);
  };

  var layerClose = function layerClose(cb) {
    $(document).onClick('click', '.layer-pop .sure-btn', function () {
      var self = $(this);
      setTimeout(function () {
        self.closest('.layer-pop').remove();
        typeof cb == 'function' && cb();
      }, 200);
    });
    $(document).onClick('click', '.layer-pop .close-btn', function () {
      var self = $(this);
      setTimeout(function () {
        self.closest('.layer-pop').remove();
      }, 200);
    });
  };

  var layeConfirmInit = function layeConfirmInit(errTip) {
    var temp = '<div class="layer-pop"><div class="layer-box">' + '<div class="layer-cont"><p>' + errTip + '</p></div>' + '<div class="layer-btn"><a href="javascript:void(0);" class="close-btn">取消</a><a href="javascript:void(0);" class="sure-btn">确定</a>' + '</div></div></div>';
    $('body').append(temp);
  };

  return {
    sure: function sure(tips, cb) {
      layeSurerInit(tips);
      layerClose(cb);
    },
    confirm: function confirm(tips, cb) {
      layeConfirmInit(tips);
      layerClose(cb);
    }
  };
}();

var countTime = function () {
  var t = 120;

  var _init = function init(time) {
    $("#codeBtn").onClick('click', function () {
      var self = $(this);
      $("#codeBtn").hide();
      t = time || 120;
      $("#codeTimeBtn").html('<i>' + t + '</i>秒').show();
      countTime(t);
    });
  };

  var countTime = function countTime(time) {
    var timer = setInterval(function () {
      if (t == 0) {
        clearInterval(timer);
        $("#codeTimeBtn").hide();
        $('#codeBtn').html('重新发送验证码').show();
        return false;
      }

      t--;
      $("#codeTimeBtn").find('i').html(t);
    }, 1000);
  };

  return {
    init: function init(time) {
      _init(time);
    }
  };
}();