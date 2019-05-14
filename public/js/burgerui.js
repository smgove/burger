$(function() {
    $('.devour-burger').on('click', function(event) {
        var burgerId = $(this).data('id');
        $.ajax('/api/burgers/' + burgerId, {
            type: "PUT",
            data: {
                id: burgerId,
                devoured: true
            }
        }).then(() => {
            console.log('devoured');
            window.location.reload();
        });
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#burg').val().trim();
        if(name.length != 0) {
            $.ajax('/api/burgers', {
                type: "POST",
                data: {
                    burger_name: name
                }
            }).then(() => {
                console.log('Burger Created!');
                window.location.reload();
            });
        }
    });
});