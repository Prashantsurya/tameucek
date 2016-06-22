function home(){
	var id = document.getElementById('div_main').innerHTML="<h1>TECHNICAL ADVANCEMENTS IN MECHANICAL ENGINEERING</h1><br><br>
                        <img src="img/gears.gif" />
                        <h1>22nd &23rd , July 2016</h1>";

}
function conf(){
	var id = document.getElementById('div_main').innerHTML="<h1>TECHNICAL ADVANCEMENTS IN MECHANICAL ENGINEERING</h1><br><br>
                        <img src="img/gears.gif" />
                        <h1>Prashant</h1>";
}

$(document).ready(function(){
    var $links = $('.link').click(function(e){
        $links.removeClass('highlight');
        $(this).addClass('highlight');
    });
});

