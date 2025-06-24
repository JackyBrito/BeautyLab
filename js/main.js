// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Lógica para el Modal de la Galería
    const galleryModal = document.getElementById('galleryModal');
    galleryModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // El enlace <a> que activó el modal
        const imageUrl = button.getAttribute('data-bs-image'); // Extrae la URL de la imagen del atributo data-bs-image
        const modalImage = galleryModal.querySelector('#modalImage');
        modalImage.src = imageUrl; // Actualiza el src de la imagen en el modal
    });

    // Lógica para actualizar el año del copyright automáticamente
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});