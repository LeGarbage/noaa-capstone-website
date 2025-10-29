document.getElementById("feedback-button").addEventListener("click", openFeedbackForm)

const overlay = document.createElement('div')
overlay.id = 'feedbackOverlay'
Object.assign(overlay.style, {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
});
document.body.appendChild(overlay);

const formContainer = document.createElement('div')
Object.assign(formContainer.style, {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    position: 'relative'
});

const closeBtn = document.createElement('span')
closeBtn.innerHTML = '&times;'
Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'var(--main-font)'
});
closeBtn.addEventListener('click', () => overlay.style.display = 'none')
formContainer.appendChild(closeBtn)

// --- Form HTML ---
const form = document.createElement('form')
form.innerHTML = `
    <h3 style="margin-top:0;">Contact Us</h3>
    <label>Name</label>
    <input type="text" id="name" required placeholder="Name (required)" style="width:95%;padding:8px;margin-bottom:10px;">

    <label>Email</label>
    <input type="email" id="email" required placeholder="Email (required)" style="width:95%;padding:8px;margin-bottom:10px;">

    <label>Subject</label>
    <input type="text" id="subject" placeholder="Subject (optional)" style="width:95%;padding:8px;margin-bottom:10px;">

    <label>Message</label>
    <textarea id="message" rows="4" required placeholder="Give your feedback here (required)" style="width:95%;padding:8px;margin-bottom:15px;"></textarea>

    <button type="submit" style="
        background-color:var(--blue);
        color:white;
        border:none;
        border-radius:6px;
        padding:10px 15px;
        cursor:pointer;
        width:100%;
        ">Send</button>
`

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: form.elements["name"].value.trim(),
        email: form.elements["email"].value.trim(),
        subject: form.elements["subject"].value.trim(),
        message: form.elements["message"].value.trim(),
    }
    overlay.style.display = 'none';

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result.error || 'Unknown error');

        alert("Your feedback is appreciated");
        form.reset();
    } catch (err) {
        console.error("Feedback send error:", err);
        alert("Your feedback could not be processed");
    }
});

formContainer.appendChild(form)

overlay.appendChild(formContainer)

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.style.display = 'none'
});

// --- Add to document ---
document.body.appendChild(overlay)

function openFeedbackForm() {
    overlay.style.display = "flex"
}
