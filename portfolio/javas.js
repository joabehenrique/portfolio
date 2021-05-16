$(document).ready(function(){
    $('.secao_project').slick({
        variableWidth: true,
        dots: true,
        speed:600,
        initialSlide:3,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility:true,  
        infinite:false
    });
});

$(document).ready(function(){
    $(".secao_curriculo").click(function() {
        window.location.href = 'image/Currículo.pdf' ;
    });
});

$(document).ready(function(){
    $(".github").click(function() {
        var diretorio = $(this).attr('data-arg');
        window.location.href = 'https://github.com/henriquecido/'+diretorio;
    });
});

