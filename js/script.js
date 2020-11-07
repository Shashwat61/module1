$(document).ready(function(){
  $("carouselbutton").carousel({interval:50});
  $("#carouselbutton").click(function(){
if($("#carouselbutton").children("span").hasClass('fa-pause')){
$("#mycarousel").carousel('pause');
$("#carouselbutton").children("span").removeClass('fa-pause');
$("#carouselbutton").children("span").addClass('fa-play')
}
else if ($("#carouselbutton").children("span").hasClass('fa-play')){
$("#mycarousel").carousel('cycle');
$("#carouselbutton").children("span").removeClass('fa-play');
$("#carouselbutton").children("span").addClass('fa-pause')
}
  });

});



$(document).ready(function(){
$("#toOpen").click(function(){
$("#loginModal").modal('show');
});

$("#closeModal").click(function(){
$("#loginModal").modal('hide');
});

$("#cancelLogin").click(function(){
$("#loginModal").modal('hide');
});


$("#reserve").click(function(){
$("#reservetable").modal('show');
});
$("#closeReserve").click(function(){
$("#reservetable").modal('hide');
});

$("#cancelReserve").click(function(){
$("#reservetable").modal('hide');
});
});
