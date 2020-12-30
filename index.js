//Javascript for index.js and styles.css

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per + '%');
    $({animatedvalue: 0}).animate({animatedvalue: per},{
        duration: 1000,
        step: function(){
           $this.attr('per', Math.floor(this.animatedvalue) + '%'); 
        },
        complete: function(){
            $this.attr('per', Math.floor(this.animatedvalue) + '%'); 
        }
    });
});


//SELECTORS



//EVENTLISTNERS


//FUNCTIONS



//EXTRAS
var loader = document.body.getElementsByClassName('load');
loader.delay(7000).fadeOut(slow);
window.alert(10);






const logo = document.getElementsByClassName('.logo');
logo.color = red;



//FUNCTIONS



//EXTRAS
var loader = document.body.getElementsByClassName('load');
loader.delay(7000).fadeOut(slow);
alert(10);
