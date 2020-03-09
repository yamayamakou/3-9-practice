$(function(){
  
  let $img = $('img');
  
  $('#AA').click(function(){
    $img.fadeIn('slow');
    $('B').css('color','red');
    $img.fadeOut('slow');
    $img.fadeIn('slow');
    
  });
  
});

$(function(){
  
  let $b = $('#B');
  
  $b.click(function(){
    $b.css('color','red').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  })
  
});

$(function(){
  $('.C').click(function(){
    $('.C').css('font-size','45px');
    $('.C').html('<a href="#">かきくけこ</a>');
  });
});

$(function(){
  $('.D').click(function(){
    $(this).css('background-color','blue');
    $(this).css('font-size','45px');
    $(this).html('<a href="#">さしすせそ</a>');
  });
});

$(function(){
  $('#buc').click(function(){
    $('#buc').find('a').css('color','green').css('font-size','30px').html('<p>Final Fantasy</p>');
  });
});

$(function(){
  let $cca = $('#cca');
  let $aac = $('#aac');
  
  $cca.hover(
  
    function(){
      $aac.fadeIn(1000);
    },
    function(){
      $aac.fadeOut(1000);
    }
    
  )
});
