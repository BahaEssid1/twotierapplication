const API_URL = "http://localhost:3000";

const form = document.getElementById("contactForm");
const list = document.getElementById("contactList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    form.reset();
    loadContacts();
});

async function loadContacts() {
    const res = await fetch(`${API_URL}/contacts`);
    const contacts = await res.json();

    list.innerHTML = "";
    contacts.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.name} — ${c.email}`;
        list.appendChild(li);
    });
}

// Load contacts on page load
loadContacts();
