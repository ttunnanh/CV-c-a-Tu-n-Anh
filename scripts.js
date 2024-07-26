document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Toggle project details
    const projectElements = document.querySelectorAll('.project');
    for (const project of projectElements) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Xem chi tiết';
        toggleButton.className = 'toggle-button';
        project.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', () => {
            const description = project.querySelector('p:nth-of-type(1)');
            if (description.style.display === 'none') {
                description.style.display = 'block';
                toggleButton.textContent = 'Ẩn chi tiết';
            } else {
                description.style.display = 'none';
                toggleButton.textContent = 'Xem chi tiết';
            }
        });
    }

    // Display current year in the footer
    const footer = document.querySelector('footer');
    if (footer) {
        const yearSpan = document.createElement('span');
        yearSpan.textContent = new Date().getFullYear();
        footer.appendChild(yearSpan);
    }
});
