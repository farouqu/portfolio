const form = document.getElementById("contact-form");
const form_feedback = document.getElementById("form-feedback");
const name = document.getElementById("form-name");
const email = document.getElementById("form-email");
const title = document.getElementById("form-title");
const message = document.getElementById("form-message");

async function postForm(url,data) {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    credentials: "same-origin",
    body: data
  })

  if (response.ok) {
    const response_data = await response.json();
    console.log(response_data);
  } else {
    console.log("Ooops");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = JSON.stringify({ name: `${name.value}`, email: `${email.value}`, title: `${title.value}`, message: `${message.value}` });
  postForm("/submit-form", formData);

})