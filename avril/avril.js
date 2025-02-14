document.getElementById('loveButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = "¡El amor está en el aire! ❤️";
    message.classList.remove('hidden');
});

