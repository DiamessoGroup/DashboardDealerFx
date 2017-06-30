$(document).ready( function() {
            
            /*Toggle Menu Button*/
            $('#menuButton').click( function() {
                $('nav').toggle();
            });
            
            /*Close Menu Button*/
            $('#closeMenu').click( function() {
                $('nav').hide();
            });
            
            /*To Do List Action*/
            var template = function(text) {
                return '<div class="w3-card-2 w3-light-blue w3-padding w3-margin"><p>' + text + '<i class="fa fa-close w3-right w3-margin-right closex" style="font-size:20px;cursor:pointer"></i></p></div>';
            };
            
            $(document).on('click','#buttonToDo', function() {
                $text = "";
                $text = $('#inputToDo').val();
                if ($text !== "") {
                    $html = template($text);
                    $('#itemToDo').append($html);
                    $('#inputToDo').val("");
                }
            });
            
            $(document).on('click','.closex',function(){
                $(this).closest('div').hide();
            });
            
            /*Sort List Items*/
            $(function() {
                $( ".sortable" ).sortable();
                $( ".sortable" ).disableSelection();
            });
        });