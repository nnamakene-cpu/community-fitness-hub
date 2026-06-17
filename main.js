// Mobile menu
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (btn && menu){
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Simple dynamic news list
const newsItems = [
  { title: 'April timetable updated', date: '2026-03-01', link: 'news.html#apr-timetable' },
  { title: 'New coach: Sam W.', date: '2026-02-18', link: 'news.html#coach-sam' }
];
const newsList = document.getElementById('news-list');
if (newsList){
  newsItems.forEach(n => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${n.link}">${n.title}</a> <time datetime="${n.date}">(${n.date})</time>`;
    newsList.appendChild(li);
  });
}
