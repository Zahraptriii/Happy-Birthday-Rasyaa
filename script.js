const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
let isPlaying = false;

// Toggle musik
function toggleMusic() {
  if (isPlaying) {
    music.pause();
    btn.innerText = 'Dengarkan Musik 🎵';
  } else {
    music.play();
    btn.innerText = 'Hentikan Musik 🔇';
  }
  isPlaying = !isPlaying;
}

// Show pesan + pindahkan tombol musik ke bawah kertas
function showMessage() {
  const paper = document.getElementById('paper');
  const musicSection = document.querySelector('.music-section');
  
  // Pindahin tombol musik ke bawah kertas
  paper.insertAdjacentElement('afterend', musicSection);
  
  // Tampilkan kertas pesan
  paper.style.display = 'block';
  setTimeout(() => paper.classList.add('show'), 50);

  // Efek ngetik + fade tiap huruf
  typeMessage("Happy Birthday Rasyaa🤍✨ Semogaa di usia baruu ini Rasyaa selalu di kelilingi hal-hal baikk, sehat terus, dan punyaa banyak alasan untuk tetap tersenyum🌷💐 walaupun sekarangg kitaa udaa asingg, aku gaa pernah lupa sama hari inii.. bahagiaa teruss yaa dengan semuaa hal baikk yg menunggu mu di depan sanaa🤍🤍 Ada banyakk hal yang pengen aku ceritainn, tapii aku sadar keadaan kitaa udaa gaa samaa lagii.. aku tau kitaa juga udah gaa di titik yang samaa kayak duluu, tapi aku gaa pernah nyesel kenal Rasyaa.. Rasya pernah buat aku ngerasa berartii, di hargaii, di cintaii, dan semua ituu gaa akan pernah aku lupainn.. Aku ingat semuaa momen yang pernah kita lewati bersamaa, kadang kenangan itu muncul tiba-tiba, bikin aku senyum sendirii, tapi juga nyesek.. walau gituu, aku selaluu bersyukur karena pernah punya ceritaa itu sama Rasyaa.. Rasyaa adalah salah satu bagian terindah dari hidup aku, dan aku gaa akan pernah lupaa🤍💐 Semogaa semua harapan Rasyaa di umur baru ini bisa tercapai sesuai yang Rasya mauu.. semoga banyak pencapaian yang datang di hidup Rasyaa.. semogaa selalu dikasih kelancaran dalam segala urusan dan kegiatan.. sukses terus dalam pendidikan maupun hidup mu ke depan nyaa ✨💐💐 akuu mungkin udah ga bersama mu lagii, tapi dari jauh aku selalu doain yang terbaikk buat Rasyaa 💐💐 Akuu masih berharap kitaa bisaa samaa-samaa lagii.. entah kapan dan entah gimanaa, semogaa suatu harii kita bisa ketemu lagii dalam versi terbaikk kita berduaa.. Jaga dirii baik-baikk yaa, kurangii bandel nyaa.. Walaupun kitaa udah gaa bersama lagii, bagian terbaik dari hidup akuu selalu ada di memori tentang Rasyaa💐💐 Makasii karenaa pernah jadii rumah paling nyaman buatt akuu.. dan maaff selama mengenal aku banyak hal yang Rasyaa sesalii.. maaf jugaa selama mengenal akuu banyak sikap aku yang buat Rasyaa kecewaa.. terakhir, I love youu, and I'll always love youu 🤍🌷💐");
}

function typeMessage(text) {
  let i = 0;
  const speed = 50;
  const target = document.getElementById('typed-text');
  target.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      const span = document.createElement('span');
      span.textContent = text.charAt(i);
      span.classList.add('fade-letter');
      span.style.animationDelay = `${i * 0.03}s`; 
      target.appendChild(span);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
