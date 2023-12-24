$(document).ready(function () {
    console.log('i am in a new file now');
    //your jquery code here
    console.log("we are using jquery");

    //jquery syntax looks like this
    //$('selector').action()


    //$('p').click();//click on p


    $('p').click(function () {
        console.log('you clicked on p', this);
        // $('p').hide(); //hide
        //$(this).hide();//badha hide no thay
        //$('#id').hide();
        // $('.class').hide();
    });//do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    // });

    // $('p').mouseenter(function () {
    //     console.log('you enterd', this);
    // });//line ni ander mousekey jay tare

    // $('p').mousedown(function () {
    //     console.log('mouse down', this);
    // });//click 

    // $('p').mouseleave(function () {
    //     console.log('mouse leave', this);
    // });//line mathi click bar jay tare 

    // $('p').hover(function () {
    //     console.log('hoverd enterd', this);//line ni ander mousekey jay tare
    // },
    // function () {
    //     console.log('hoverd leave', this);
    // });//line mathi click bar jay tare 

    // there are three main types of selector in jquery
    // 1.element selector
    // 2.id selector
    //3.class selector

    // 1.element selector. This is an example of element selector
    // $('p').click();

    // 2.id sector - this is an example of id selector
    //$('roy').click();

    // 3.class sector - this is an example of id selector
    // $('.odd').click();

    //others selector
    //$('*').click();
    // $('p.odd').click();
    //$('p:first').click();

    //events in jquery
    //MouseEvent=click,dblclick,mouseenter,mouseleave
    //KeyboardEvent=keypress,keydown,MediaKeyStatusMap
    //formevent=submt,change,focus,blur
    //document/window events=load,resize,scroll,unload

    // demoing on method
    $('p').on({
        click: function () {
            console.log('Thanks for clicking', this);
        },
        mouseleave: function () {
            console.log("mouse leave");
        }
    })
    // $('#abc').hide(2000, function(){
    //     console.log('hidden');
    // });
    // $('#abc').show(2000, function(){
    //     console.log('show');
    // });

    $('#but').click(function () {
        $('#abc').fadeOut(5000);
    })
    //fadeIn()
    //fadeOut()
    //fadeToggle()
    //fadeTo()

    //slide methods - speed and callback parameters are optional
    // $('#abc').slideUp(1000)
    // $('#abc').slideDown(1000)
    // $('#abc').slideToggle(1000,function(){
    //     console.log("Done");
    // })

    // Animate function in query
    // $('#abc').animate({
    //     opacity:0.3,
    //     height:'150px',
    //     width:'350px'
    // },2000)

    // $('#abc').animate({ opacity: 0.3 }, 4000);
    // $('#abc').animate({ opacity: 0.9 }, 1000);
    // $('#abc').animate({ width: '350px' }, 12000);

    // $('#ta').val()
    // $('#ta').val('akshay')
    // $('#ta').val('akshay3')
    // $('#ta').html('akshay3')
    // $('#ta').html('akshay4')
    // $('#inp').html('name')
    // $('#inp').val('name')
    // $('#inp').empty()
    // $('#abc').empty()
    // $('#abc').text('you are good')
    //$('#abc').remove()
    // $('#abc').addClass('myclass')
    // $('#abc').removeClass('myclass')
    // $('#abc').css('background-color','yellow')

});
