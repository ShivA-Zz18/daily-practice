document.addEventListener('DOMContentLoaded', function () {
  const appointmentForm = document.getElementById("appointmentForm");
  const formMessage = document.getElementById("formMessage");
  const docUserInput = document.getElementById("docUser");
  const docPassInput = document.getElementById("docPass");
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const loginSection = document.getElementById("login");
  const doctorDashboardSection = document.getElementById("doctorDashboard");
  const appointmentsList = document.getElementById("appointmentsList");
  const loginMsg = document.getElementById("loginMsg");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const date = document.getElementById("date").value;
      const issue = document.getElementById("issue").value.trim();

      if (!name || !email || !date || !issue) {
        if (formMessage) {
          formMessage.style.color = "red";
          formMessage.textContent = "Please fill in all fields.";
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          if (formMessage) {
              formMessage.style.color = "red";
              formMessage.textContent = "Please enter a valid email address.";
          }
          return;
      }

      try {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push({ name, email, date, issue, id: Date.now() });
        localStorage.setItem('appointments', JSON.stringify(appointments));

        if (formMessage) {
          formMessage.style.color = "green";
          formMessage.textContent = `Thank you, ${name}. Your appointment has been saved.`;
        }
        appointmentForm.reset();
      } catch (error) {
        console.error("Error saving appointment to localStorage:", error);
        if (formMessage) {
          formMessage.style.color = "red";
          formMessage.textContent = "Could not save appointment. Please try again.";
        }
      }
    });
  } else {
    console.error("Appointment form not found.");
  }

  function loginDoctor() {
    const user = docUserInput ? docUserInput.value : "";
    const pass = docPassInput ? docPassInput.value : "";

    if (user === "doctor" && pass === "password123") {
      if (loginSection) loginSection.style.display = "none";
      if (doctorDashboardSection) doctorDashboardSection.style.display = "block";
      if (loginMsg) loginMsg.textContent = "";
      loadAppointments();
    } else {
      if (loginMsg) {
        loginMsg.textContent = "Invalid username or password.";
        loginMsg.style.color = "red";
      }
    }
  }

  function logoutDoctor() {
    if (doctorDashboardSection) doctorDashboardSection.style.display = "none";
    if (loginSection) loginSection.style.display = "block";
    if (docUserInput) docUserInput.value = "";
    if (docPassInput) docPassInput.value = "";
  }

  function loadAppointments() {
    if (!appointmentsList) {
      console.error("Appointments list element not found.");
      return;
    }
    appointmentsList.innerHTML = "";

    try {
      const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
      if (appointments.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No appointments scheduled.";
        li.className = "text-gray-500";
        appointmentsList.appendChild(li);
      } else {
        appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

        appointments.forEach(app => {
          const li = document.createElement("li");
          li.className = "p-2 border-b border-gray-200";
          li.textContent = `ID: ${app.id} - Name: ${app.name} (Date: ${app.date}) - Issue: ${app.issue}`;
          appointmentsList.appendChild(li);
        });
      }
    } catch (error) {
      console.error("Error loading appointments from localStorage:", error);
      const li = document.createElement("li");
      li.textContent = "Could not load appointments.";
      li.style.color = "red";
      appointmentsList.appendChild(li);
    }
  }

  if (loginButton) {
    loginButton.addEventListener("click", loginDoctor);
  } else {
    console.warn("Login button not found. Ensure it has ID 'loginButton'.");
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", logoutDoctor);
  } else {
    console.warn("Logout button not found. Ensure it has ID 'logoutButton'.");
  }

  if (loginSection) loginSection.style.display = "block";
  if (doctorDashboardSection) doctorDashboardSection.style.display = "none";
});
