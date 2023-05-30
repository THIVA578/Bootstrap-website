

$(document).ready(function() {
    $('i').click(function(event) {
        event.stopPropagation();

      
            $('.list-box').toggleClass('show')
           
                
                $('i').toggleClass('fa-sharp fa-xmark');
       
    });

            
                $(document).click(function(event) {
                    
                    if( $('.list-box').hasClass('show'))
                    {
                       
                            $('.list-box').removeClass('show');
                            $('i').toggleClass('fa-sharp fa-xmark')

                       
                    }
                    
                });
                    // if (!$(event.target).closest('i').length) {
                       
                    //     $('.list-box').removeClass('show');
                        
                    //     if(!$('.list-box').hasClass('show'))
                    //     {
                    //         $('i').toggleClass('fa-sharp fa-xmark')
            
                    //     }
                   
                    // }

                 
               

            

});







