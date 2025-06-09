'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");


for (const btnShowModal of btnsShowModal) {
    btnShowModal.addEventListener("click", openModal);
}

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}