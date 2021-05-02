'use strict'

function Search(text) {
  $(".keyword_list").each(function(index,element){
    let keyward = $(element).text();
    if(keyward.indexOf(text) === -1){
      $(element).parent().css("display","none");
    }else{
      $(element).parent().css("display","block");
    }
  });
}

$(".input_text").on("input", function(event){
    let text = $(".input_text").val();
    if(text === ""){
        $(".filter_img").css("display", "block");
    }else{
        Search(text);
    }
});