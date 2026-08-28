$(".flipbook").turn();

$(".toc-link").on("click", function(e) {
    e.preventDefault();
    $(".flipbook").turn("page", $(this).data("page"));
});


/* =====================================
   HAL / 画像モーダル
===================================== */

const workModal = document.getElementById("workModal");
const modalTitle = document.getElementById("modalTitle");
const modalImageElement = document.getElementById("modalImageElement");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");


/* =====================================
   映画サイトモーダル
===================================== */

const movieModal = document.getElementById("movieModal");
const movieModalTitle = document.getElementById("movieModalTitle");
const movieWebsiteFrame = document.getElementById("movieWebsiteFrame");


/* =====================================
   VIEWボタン
   Flipbookより先に処理する
===================================== */

document.addEventListener("pointerdown", function(e) {

    const work = e.target.closest(".work-preview");

    if (!work) return;


    /* -----------------------------
       映画サイト
    ----------------------------- */

    if (work.classList.contains("movie-work-preview")) {

        e.preventDefault();
        e.stopImmediatePropagation();

        const title = work.dataset.movieTitle;
        const url = work.dataset.movieUrl;

        movieModalTitle.textContent = title;

        movieWebsiteFrame.src = url;

        movieModal.classList.add("active");

        movieModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "movie-modal-open"
        );

        return;
    }


    /* -----------------------------
       HAL
    ----------------------------- */

    e.preventDefault();
    e.stopImmediatePropagation();

    const title = work.dataset.title;
    const image = work.dataset.image;

    modalTitle.textContent = title;

    modalImageElement.src = image;

    modalImageElement.alt = title;

    workModal.classList.add("active");

    workModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}, true);


/* =====================================
   HALモーダルを閉じる
===================================== */

function closeWorkModal() {

    workModal.classList.remove("active");

    workModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


modalClose.addEventListener(
    "click",
    closeWorkModal
);


modalOverlay.addEventListener(
    "click",
    closeWorkModal
);


document.addEventListener("keydown", function(e) {

    if (
        e.key === "Escape" &&
        workModal.classList.contains("active")
    ) {
        closeWorkModal();
    }

});


/* =====================================
   映画サイトモーダルを閉じる
===================================== */

function closeMovieModal() {

    movieModal.classList.remove(
        "active"
    );

    movieModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "movie-modal-open"
    );

    movieWebsiteFrame.src =
        "about:blank";

}


document
    .querySelector(".movie-modal-close")
    .addEventListener(
        "click",
        closeMovieModal
    );


document
    .querySelector(".movie-modal-overlay")
    .addEventListener(
        "click",
        closeMovieModal
    );


document.addEventListener(
    "keydown",
    function(e) {

        if (
            e.key === "Escape" &&
            movieModal.classList.contains("active")
        ) {
            closeMovieModal();
        }

    }
);