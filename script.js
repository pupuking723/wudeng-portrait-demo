const dialog = document.querySelector('#booking-dialog');
const form = document.querySelector('#booking-form');
const status = form.querySelector('.form-status');

document.querySelectorAll('[data-open-booking]').forEach((button) => {
  button.addEventListener('click', () => {
    status.textContent = '';
    dialog.showModal();
  });
});

document.querySelector('[data-close-booking]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    '你好，我想咨询拍摄档期。',
    `称呼：${data.get('name')}`,
    `类型：${data.get('type')}`,
    `日期：${data.get('date')}`,
    data.get('note') ? `补充：${data.get('note')}` : '',
  ].filter(Boolean).join('\n');

  try {
    await navigator.clipboard.writeText(message);
    status.textContent = '预约信息已复制，可以直接发送给摄影师。';
  } catch {
    status.textContent = message;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const backdrop = document.querySelector('.final-backdrop');
window.addEventListener('scroll', () => {
  const rect = backdrop.parentElement.getBoundingClientRect();
  const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
  backdrop.style.transform = `translateY(${progress * -14}px) scale(1.03)`;
}, { passive: true });
