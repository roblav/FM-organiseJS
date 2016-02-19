

$(document).ready(function(){
    // put event handlers for header links here
    $('[rel=js-controls]').on('click', 'a', function(evnt){
        evnt.preventDefalut();
        evnt.stopPropagation();
        evnt.stopImmediatePropagation();
        //get the a href value
        var content = $(evnt.target).attr('href');
        //Use ajax to add page content to modal box
        $( '[rel=js-modal]' ).load( content );
        //Display modalbox
        $( '[rel=js-modal]' ).show();
    });
});