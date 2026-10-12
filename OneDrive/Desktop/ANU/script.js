// Modal Functions
function openModal(projectKey) {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-description');

  if (projectKey === 'sentiment') {
    title.innerText = "Sentiment Analysis Web App";
    desc.innerText = "Built with Flask and Python, this application analyzes text inputs in real-time to compute sentiment polarity scores with visual analytics interfaces.";
  } else if (projectKey === 'securedata') {
    title.innerText = "SecureData CDP System";
    desc.innerText = "Implemented robust database masking protocols, batch data processors, and privacy controls to handle customer records securely.";
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}

// Close Modal when clicking outside container
window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Quick Action Terminal Commands
function runCommand(cmd) {
  const output = document.getElementById('terminal-output');
  
  if (cmd === 'about') {
    output.innerHTML += `<p class="term-line">> <span class="highlight">MIRIYALA ANUSHA</span>: CSE Student specializing in Software Engineering & AI.</p>`;
  } else if (cmd === 'skills') {
    output.innerHTML += `<p class="term-line">> Skills: Python, Web Dev, SQL, Cybersecurity, Networking.</p>`;
  } else if (cmd === 'contact') {
    output.innerHTML += `<p class="term-line">> Contact: Reach out via LinkedIn or Email.</p>`;
  } else if (cmd === 'clear') {
    output.innerHTML = `<p class="term-line">Type <span class="highlight">'help'</span> or click buttons below for quick commands.</p>`;
  }
}