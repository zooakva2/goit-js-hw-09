document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const formDataKey = 'feedback-form-state';
  let formData = JSON.parse(localStorage.getItem(formDataKey)) || {};

  if (formData.email !== undefined && formData.email.trim() !== '') {
    emailInput.value = formData.email.trim();
  }
  if (formData.message !== undefined && formData.message.trim() !== '') {
    messageInput.value = formData.message.trim();
  }

  form.addEventListener('input', event => {
    if (event.target === emailInput) {
      formData.email = emailInput.value.trim();
    } else if (event.target === messageInput) {
      formData.message = messageInput.value.trim();
    }

    localStorage.setItem(formDataKey, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill out both fields!');
      return;
    }
    console.log('Submitted data:', formData);
    localStorage.removeItem(formDataKey);
    emailInput.value = '';
    messageInput.value = '';
  });
});
