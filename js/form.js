$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/romantulchak1999@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email:$('#email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
        .done(function() {
            $('form')[0].reset();
            $('#form-result').html('<p>Thank you!</p>');
        })
        .fail(function(xhr, status, error){
            $('#form-result').html(`<p>Sorry, there is an error</p>`);
        });
}