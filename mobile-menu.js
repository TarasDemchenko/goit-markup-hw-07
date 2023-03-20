(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-o]"),
		closeModalBtn: document.querySelector("[data-modal-close-o]"),
		modal: document.querySelector("[data-modal-o]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden-o");
	}
})();
