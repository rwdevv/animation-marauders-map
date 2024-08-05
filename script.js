$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


const artyom = new Artyom();
var commands = [
 {
	 indexes:["não fazer nada de bom"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["feito"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"pt-br",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Pronto para trabalhar!");
        });
    },250);
}

startContinuousArtyom();