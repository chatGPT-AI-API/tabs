document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to the clicked button and corresponding pane
            const tabId = button.dataset.tab;
            button.classList.add('active');
            document.querySelector(`.tab-pane[data-tab="${tabId}"]`).classList.add('active');
        });
    });
});
