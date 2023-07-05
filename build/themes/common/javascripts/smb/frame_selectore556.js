  /* Relative Path: Frame Selector */
  $(function() {
      // Handler for Shape Links
      $('#shapePnl a').click(function() {
          var shapeName = $(this).attr('class').split(' ')[0];
          $(this).addClass('selected').siblings().removeClass('selected');
          $('#facePnl').attr('class', shapeName);
          $('#infoPnl div.' + shapeName).show().siblings().hide();
      });

      // Handler for Frame Links
      $('#framePnl span[class*="frm"]').click(function() {
          var frameName = $(this).attr('class');
          $('#framePnl a.selected').removeClass('selected');
          $(this).parent().addClass('selected');
          $('#lrgFrame').attr('class', frameName);
      });

      // Frame Carousel With Rewind
      var width = 720;
      var current = 1;
      var count = $('ul#frameSets li').size();
      $('a.prvSet').click(function() {
          if (current > 1) {
              $('ul#frameSets li').animate({
                  left: '+=' + width + 'px'
              }, 500);
              current--;
          } else {
              $('ul#frameSets li').animate({
                  left: '-' + (count - 1) * width + 'px'
              }, 500);
              current = count;
          }
          return false;
      });
      $('a.nxtSet').click(function() {
          if (current < count) {
              $('ul#frameSets li').animate({
                  left: '-=' + width + 'px'
              }, 500);
              current++;
          } else {
              $('ul#frameSets li').animate({
                  left: '0px'
              }, 500);
              current = 1;
          }
          return false;
      });




      // Show Frame Selector
      $('a.lnchFrmSlctr').click(function(e) {
          (e.preventDefault) ? e.preventDefault(): e.returnValue = false;
          $.fancybox({
              'autoSize': false,
              'speedIn': 600,
              'speedOut': 200,
              'transitionIn': 'elastic',
              'type': 'inline',
              'href': '#frameSelector',
              'width': '815',
              'height': '508'
          });
          return false;
      });

      // Show 3D Spine
      $('button.lnch3dspine').click(function(e) {
          (e.preventDefault) ? e.preventDefault(): e.returnValue = false;
          $.fancybox({
              'autoSize': false,
              'speedIn': 600,
              'speedOut': 200,
              'transitionIn': 'elastic',
              'type': 'inline',
              'href': '#frameSelector',
              'width': '902',
              'height': '833'
          });
          return false;
      });

      // Show Pet Selector
      $('button.lnchpetselector').click(function(e) {
          (e.preventDefault) ? e.preventDefault(): e.returnValue = false;
          $.fancybox({
              'autoSize': false,
              'speedIn': 600,
              'speedOut': 200,
              'transitionIn': 'elastic',
              'type': 'inline',
              'href': '#frameSelector',
              'width': '940',
              'height': '750'
          });
          return false;
      });
  });