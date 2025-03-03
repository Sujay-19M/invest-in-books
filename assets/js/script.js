// Load header & footer dynamically
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '../header.html');
    loadComponent('footer', '../footer.html');
});

function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        });
}
