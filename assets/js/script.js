<script>
        // Load Header and Footer
        function loadComponent(url, elementId) {
            fetch(url)
                .then(response => response.text())
                .then(html => document.getElementById(elementId).innerHTML = html)
                .catch(error => console.error('Error loading component:', error));
        }
        window.onload = () => {
            loadComponent('/header.html', 'header');
            loadComponent('/footer.html', 'footer');
        };
    </script>
