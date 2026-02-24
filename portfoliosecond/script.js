// Initial State: Hide the cross icon
document.querySelector('.cross').style.display = 'none';

// --- SIDEBAR TOGGLE LOGIC ---
document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');

    sidebar.classList.toggle('sidebarGo');
    
    if (sidebar.classList.contains('sidebarGo')) {
        // Sidebar is HIDDEN
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        // Sidebar is VISIBLE
        ham.style.display = 'none';
        setTimeout(() => {
            cross.style.display = 'inline';
        }, 300);
    }
});

// --- SECTION SWITCHING ENGINE ---
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        // Scroll to top of the new section for better mobile experience
        window.scrollTo(0, 0);
    }
}

// Logic for Sidebar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const id = link.getAttribute('href').replace('#', '');
        showSection(id);

        // AUTO-CLOSE sidebar after clicking a link
        document.querySelector('.sidebar').classList.add('sidebarGo');
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    });
});

// --- BUTTON LOGIC (HOME PAGE) ---

// 1. Download CV Button
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        showSection('cv-section');
    });
}

// 2. Contact Me Button (Added this part)
const contactMeBtn = document.getElementById('contactMeBtn');
if (contactMeBtn) {
    contactMeBtn.addEventListener('click', () => {
        showSection('contact');
    });
}