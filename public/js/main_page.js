var elements = document.getElementsByClassName("read_btn");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){
      location.href ="read_blogs";
    });
}
