var holder = [];

$.each( $('.dropzone'), function(index,val) {
  $(val).addClass('dropzone' + index);
});

for (i = 0; i < $('.dropzone').length; i++ ) {
  
  holder[i] = $('.dropzone')[i];
  
    holder[i].ondragover = function () { $(this).find('.tile').addClass('hover'); return false; };
    holder[i].ondragleave = function () { $(this).find('.tile').removeClass('hover'); return false; };
    holder[i].ondrop = function (e) {
      var dropImage = $(this).find('.dropImage'),
          imageWrapper = $(this).find('.imageWrapper'),
          dragDropInstructions = $(this).find('.dragDropInstructions');
      
      $(this).find('.tile').removeClass('hover');
      $(imageWrapper).removeClass('predrop');
      $(dragDropInstructions).hide();
      e.preventDefault();
      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
        $(dropImage).attr('src',event.target.result);
      };
      reader.readAsDataURL(file);
      return false;
    };
 
}