function showSection(sectionId) {
    // Ukryj wszystkie sekcje
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id !== sectionId) {
            section.classList.remove('active');
            // Ukryj po zakończeniu animacji
            setTimeout(() => {
                section.style.display = 'none';
            }, 500); // Czas odpowiada animacji CSS
        }
    });

    // Pokaż wybraną sekcję
    const targetSection = document.getElementById(sectionId);
    if (!targetSection.classList.contains('active')) {
        targetSection.style.display = 'block'; // Najpierw pokaż sekcję
        setTimeout(() => {
            targetSection.classList.add('active'); // Następnie dodaj animację
        }, 10); // Krótkie opóźnienie dla efektu animacji
    }
}