$(document).on('click', '.card', function () {
    openModal($(this).data("modal"));
});

function openModal(modal) {
    $(".modal-backdrop").addClass('show');
    var whichModal = $("#" + modal);
    whichModal.addClass('show');
}

$(document).on('click', '.modal-backdrop', function () {
    $(this).removeClass('show');
    $(".modal").removeClass('show');
});