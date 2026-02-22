document.querySelector('.hamburger').addEventListener("click", () => {
    // Toggles the 'sidebarGo' class to show/hide sidebar
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        // If sidebar is hidden, show Hamburger icon
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        // If sidebar is visible, show Cross icon
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
});