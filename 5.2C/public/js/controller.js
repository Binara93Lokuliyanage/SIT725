$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('select').formSelect();
    $('.modal').modal();

    getProjects((data) => {
        addCards(data);
    });

    $('#formSubmit').click(() => {
        const formData = createCardData();
        addCards([formData]);
    });
});