/* ----------------------- Project Filter Project ------------------------- */
let mixer = mixitup('.project-gallery');


/* ----------------------- Project PopUp Project -------------------------- */
$(document).ready(function(){
    $('.card-popup').magnificPopup(
        {
            type: 'image',
            delegate: 'i',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 50,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        }
    );
})

/* --------------------------- Alert Animation ---------------------------- */

function validation() {
    var NameContact = document.querySelector("#name").value;
    var EmailContact = document.querySelector("#email").value;
    var MessageContact= document.querySelector("#message").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(EmailContact.match(mailformat) && NameContact && EmailContact && MessageContact) {
        swal("Berhasil!", "Klik button untuk kembali!", "success");
        document.querySelector("#name").reset();
        document.querySelector("#email").reset();
        document.querySelector("#message").reset();
    } else {
        return;
    }
}
