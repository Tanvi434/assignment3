
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const projects = [
    { title: 'Project 1', description: 'Description for Project 1', details: 'Detailed information about Project 1.' },
    { title: 'Project 2', description: 'Description for Project 2', details: 'Detailed information about Project 2.' },
    { title: 'Project 3', description: 'Description for Project 3', details: 'Detailed information about Project 3.' },
    { title: 'Project 4', description: 'Description for Project 4', details: 'Detailed information about Project 4.' }
];


function loadProjects() {
    const projectsSection = document.getElementById('projects');
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button onclick="showModal(${index})">More Info</button>
        `;
        projectsSection.appendChild(projectElement);
    });
}


function showModal(index) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h3>${projects[index].title}</h3>
        <p>${projects[index].details}</p>
        <button onclick="closeModal()">Close</button>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});