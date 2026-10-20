// Anos de atuação na Segurança Pública (desde 03/05/2000)
const inicio = new Date(2000, 4, 3);
const agora = new Date();
let anos = agora.getFullYear() - inicio.getFullYear();
if (agora < new Date(agora.getFullYear(), 4, 3)) anos--;
document.querySelectorAll('[data-anos]').forEach(el => { el.textContent = anos; });
document.getElementById('ano').textContent = agora.getFullYear();

// Menu mobile
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Vídeos: só carrega o player do YouTube após o clique (mais rápido e mais privado)
document.querySelectorAll('.video').forEach(box => {
  const id = box.dataset.yt;
  const start = box.dataset.start ? `&start=${encodeURIComponent(box.dataset.start)}` : '';
  box.style.backgroundImage = `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('aria-label', 'Reproduzir vídeo');
  b.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
  b.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start}`;
    f.title = 'Podcast com Ricardo Neves';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    box.replaceChildren(f);
  });
  box.appendChild(b);
});
