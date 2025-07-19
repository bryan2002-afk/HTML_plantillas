        const searchBox = document.getElementById('searchBox');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        // Expandir al hacer clic en el botón
        searchBtn.addEventListener('click', () => {
            if (!searchBox.classList.contains('expanded')) {
                searchBox.classList.add('expanded');
                searchInput.focus();
            } else {
                const query = searchInput.value.trim();
                if (query) {
                    alert("Buscando: " + query); // Aquí puedes hacer una redirección o buscar en vivo
                } else {
                    alert("Por favor, escribe algo para buscar.");
                }
            }
        });

        // Contraer si se hace clic fuera
        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target)) {
                searchBox.classList.remove('expanded');
                searchInput.value = '';
            }
        });
