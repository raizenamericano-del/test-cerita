const POLLINATIONS = "https://image.pollinations.ai/prompt";

const IMAGES = {
  bg_gate: `${POLLINATIONS}/anime%20school%20gate%20morning%20cherry%20blossom%20visual%20novel%20background`,
  bg_class: `${POLLINATIONS}/anime%20classroom%20morning%20sunlight%20visual%20novel%20background`,
  bg_cafeteria: `${POLLINATIONS}/anime%20school%20cafeteria%20lunch%20visual%20novel%20background`,
  bg_library: `${POLLINATIONS}/anime%20school%20library%20afternoon%20visual%20novel%20background`,
  bg_rooftop: `${POLLINATIONS}/anime%20school%20rooftop%20sunset%20visual%20novel%20background`,
  bg_field: `${POLLINATIONS}/anime%20school%20field%20sports%20day%20visual%20novel%20background`,
  bg_festival: `${POLLINATIONS}/anime%20school%20festival%20night%20lights%20visual%20novel%20background`,
  bg_rain: `${POLLINATIONS}/anime%20school%20gate%20rain%20night%20lonely%20visual%20novel%20background`,
  bg_night: `${POLLINATIONS}/anime%20school%20corridor%20night%20moonlight%20visual%20novel%20background`,
  bg_park: `${POLLINATIONS}/anime%20park%20evening%20romantic%20visual%20novel%20background`,
  bg_graduation: `${POLLINATIONS}/anime%20school%20graduation%20ceremony%20cherry%20blossom%20visual%20novel%20background`,
  bg_hospital: `${POLLINATIONS}/anime%20hospital%20room%20night%20visual%20novel%20background`,
  bg_street: `${POLLINATIONS}/anime%20city%20street%20night%20neon%20visual%20novel%20background`,
  bg_room: `${POLLINATIONS}/anime%20bedroom%20gamer%20posters%20night%20visual%20novel%20background`,
  bg_scarlet: `${POLLINATIONS}/anime%20secret%20base%20warehouse%20dramatic%20lighting%20visual%20novel%20background`,
  bg_wolf: `${POLLINATIONS}/anime%20abandoned%20building%20dark%20gritty%20visual%20novel%20background`,
  char_rifki: `${POLLINATIONS}/anime%20boy%20shy%20cute%20glasses%20high%20school%20uniform%20visual%20novel%20character`,
  char_sinta: `${POLLINATIONS}/anime%20girl%20cool%20leader%20beautiful%20long%20black%20hair%20high%20school%20uniform%20visual%20novel%20character`,
  char_rama: `${POLLINATIONS}/anime%20boy%20funny%20friend%20high%20school%20uniform%20visual%20novel%20character`,
  char_dinda: `${POLLINATIONS}/anime%20cute%20school%20girl%20cheerful%20high%20school%20uniform%20visual%20novel%20character`,
  char_rendy: `${POLLINATIONS}/anime%20boy%20arrogant%20rival%20gang%20leader%20high%20school%20uniform%20visual%20novel%20character`,
  char_arya: `${POLLINATIONS}/anime%20mysterious%20school%20boy%20hoodie%20high%20school%20visual%20novel%20character`,
  cg_hand: `${POLLINATIONS}/anime%20romantic%20holding%20hands%20sunset%20close%20up%20visual%20novel%20cg`,
  cg_rain: `${POLLINATIONS}/anime%20couple%20under%20umbrella%20rain%20romantic%20visual%20novel%20cg`,
  cg_kiss: `${POLLINATIONS}/anime%20first%20kiss%20cherry%20blossom%20romantic%20visual%20novel%20cg`,
  cg_festival: `${POLLINATIONS}/anime%20couple%20festival%20yukata%20fireworks%20romantic%20visual%20novel%20cg`,
  cg_tragic: `${POLLINATIONS}/anime%20sad%20scene%20hospital%20night%20emotional%20visual%20novel%20cg`,
  cg_graduation: `${POLLINATIONS}/anime%20graduation%20couple%20cherry%20blossom%20emotional%20visual%20novel%20cg`,
  cg_arya: `${POLLINATIONS}/anime%20mysterious%20boy%20revealing%20secret%20dramatic%20visual%20novel%20cg`,
  cg_scarlet: `${POLLINATIONS}/anime%20girl%20leader%20gang%20dramatic%20pose%20red%20lighting%20visual%20novel%20cg`,
  cg_wolf: `${POLLINATIONS}/anime%20boy%20rival%20gang%20dark%20alley%20dramatic%20visual%20novel%20cg`,
  cg_lonely: `${POLLINATIONS}/anime%20lonely%20boy%20empty%20classroom%20sunset%20sad%20visual%20novel%20cg`,
  cg_broken: `${POLLINATIONS}/anime%20torn%20photo%20memories%20rain%20window%20sad%20visual%20novel%20cg`,
  cg_ldr: `${POLLINATIONS}/anime%20couple%20airport%20goodbye%20emotional%20visual%20novel%20cg`,
  cg_perfect: `${POLLINATIONS}/anime%20wedding%20church%20beautiful%20romantic%20visual%20novel%20cg`,
  cg_true: `${POLLINATIONS}/anime%20couple%20starry%20sky%20true%20love%20magical%20visual%20novel%20cg`,
  cg_friends: `${POLLINATIONS}/anime%20group%20friends%20laughing%20school%20rooftop%20visual%20novel%20cg`
};

const CHARACTERS = {
  Rifki: { name: "Rifki", color: "#6ee7de", img: IMAGES.char_rifki, bio: "Siswa kelas 11 yang pemalu, suka game, dan tidak percaya diri. Menyembunyikan perasaannya pada Sinta." },
  Sinta: { name: "Sinta", color: "#ff6b9d", img: IMAGES.char_sinta, bio: "Ketua OSIS sekaligus pemimpin geng Scarlet. Dingin, dominan, tapi menyimpan luka masa lalu." },
  Rama: { name: "Rama", color: "#ffe66d", img: IMAGES.char_rama, bio: "Sahabat Rifki yang periang. Selalu mendukung Rifki meski sering becanda." },
  Dinda: { name: "Dinda", color: "#a18cd1", img: IMAGES.char_dinda, bio: "Teman kelas yang ceria. Menjadi jembatan komunikasi Rifki dan Sinta." },
  Rendy: { name: "Rendy", color: "#e74c3c", img: IMAGES.char_rendy, bio: "Pemimpin geng Wolf. Arrogant dan memiliki dendam pada Scarlet." },
  Arya: { name: "Arya", color: "#95a5a6", img: IMAGES.char_arya, bio: "Siswa misterius yang tahu banyak rahasia. Identitasnya tersembunyi." }
};

const ENDINGS = {
  happy: { title: "Happy Ending", desc: "Rifki dan Sinta akhirnya bersama. Cinta mereka mengalahkan segala rintangan. Mereka berjanji untuk saling mendukung selamanya.", img: IMAGES.cg_kiss, condition: s => s.love >= 70 && s.trust >= 60 },
  true_love: { title: "True Love Ending", desc: "Di bawah langit berbintang, mereka menemukan makna cinta sejati. Tak ada rahasia lagi di antara mereka.", img: IMAGES.cg_true, condition: s => s.love >= 90 && s.trust >= 80 && s.courage >= 70 && s.secret_arya },
  perfect: { title: "Perfect Ending", desc: "Segalanya sempurna. Cinta, persahabatan, dan masa depan yang cerah. Mereka menikah setelah lulus kuliah.", img: IMAGES.cg_perfect, condition: s => s.love >= 95 && s.courage >= 90 && s.reputation >= 90 && s.trust >= 90 && s.friendship >= 90 },
  graduation: { title: "Graduation Ending", desc: "Mereka berpisah setelah wisuda, tapi kenangan indah tetap abadi. Mereka berjanji akan bertemu lagi suatu hari nanti.", img: IMAGES.cg_graduation, condition: s => s.friendship >= 70 && s.love >= 40 && s.love < 80 },
  ldr: { title: "LDR Ending", desc: "Jarak memisahkan mereka, tapi hati tetap bersatu. Rifki berjanji akan kembali untuk Sinta.", img: IMAGES.cg_ldr, condition: s => s.love >= 60 && s.love < 85 && s.courage < 70 },
  friend: { title: "Friend Ending", desc: "Mereka memutuskan untuk tetap bersahabat. Terkadang, persahabatan adalah bentuk cinta yang lebih abadi.", img: IMAGES.cg_friends, condition: s => s.friendship >= 80 && s.love < 50 },
  scarlet: { title: "Scarlet Ending", desc: "Rifki bergabung dengan Scarlet dan menjadi tangan kanan Sinta. Cinta mereka tumbuh di tengah kekuasaan.", img: IMAGES.cg_scarlet, condition: s => s.scarlet_path && s.love >= 50 },
  wolf: { title: "Wolf Ending", desc: "Rifki berpaling ke Wolf. Dendam dan ambisi menghancurkan segalanya, termasuk cintanya pada Sinta.", img: IMAGES.cg_wolf, condition: s => s.wolf_path },
  secret_arya: { title: "Secret Arya Ending", desc: "Arya mengungkapkan identitasnya sebagai adik Sinta yang hilang. Keluarga Scarlet akhirnya bersatu kembali.", img: IMAGES.cg_arya, condition: s => s.secret_arya && s.love >= 50 },
  tragic: { title: "Tragic Ending", desc: "Sebuah kecelakaan merenggut segalanya. Cinta yang belum sempat diungkapkan, menjadi penyesalan seumur hidup.", img: IMAGES.cg_tragic, condition: s => s.tragic_flag },
  lonely: { title: "Lonely Ending", desc: "Rifki tidak berhasil mendekati siapapun. Dia terus menyendiri di bangku sekolah, menyesali kesempatan yang hilang.", img: IMAGES.cg_lonely, condition: s => s.love < 30 && s.friendship < 30 && s.courage < 30 },
  broken: { title: "Broken Promise Ending", desc: "Sebuah janji yang dilanggar. Kepercayaan hancur, dan cinta pun sirna bagai embun di pagi hari.", img: IMAGES.cg_broken, condition: s => s.broken_promise && s.love >= 40 }
};

const ACHIEVEMENTS = [
  { id: "first_meet", title: "Pertemuan Tak Terduga", desc: "Bertemu dengan Sinta untuk pertama kalinya.", icon: "💘" },
  { id: "courage_50", title: "Berani Sekali", desc: "Courage mencapai 50.", icon: "🦁" },
  { id: "love_50", title: "Cinta Bersemi", desc: "Love mencapai 50.", icon: "🌹" },
  { id: "love_max", title: "Cinta Sempurna", desc: "Love mencapai 100.", icon: "💖" },
  { id: "trust_50", title: "Mulai Percaya", desc: "Trust mencapai 50.", icon: "🤝" },
  { id: "reputation_50", title: "Terkenal", desc: "Reputation mencapai 50.", icon: "⭐" },
  { id: "friendship_max", title: "Sahabat Sejati", desc: "Friendship mencapai 100.", icon: "👫" },
  { id: "quiz_master", title: "Ahli Membaca Pikiran", desc: "Menyelesaikan Tebak Pikiran Sinta dengan sempurna.", icon: "🧠" },
  { id: "qte_master", title: "Reflek Kilat", desc: "Menyelesaikan QTE tanpa gagal.", icon: "⚡" },
  { id: "memory_master", title: "Ingatan Fotografis", desc: "Menyelesaikan Memory Match.", icon: "🃏" },
  { id: "chat_master", title: "Chat Expert", desc: "Menyelesaikan Chat Challenge.", icon: "💬" },
  { id: "courage_challenge", title: "Pemberani", desc: "Menyelesaikan Courage Challenge.", icon: "🛡️" },
  { id: "chapter_5", title: "Setengah Perjalanan", desc: "Mencapai Chapter 5.", icon: "🎪" },
  { id: "chapter_10", title: "Hampir Tamat", desc: "Mencapai Chapter 10.", icon: "🏁" },
  { id: "secret_arya", title: "Terungkap", desc: "Membuka rahasia Arya.", icon: "🔍" },
  { id: "true_route", title: "Jalan yang Benar", desc: "Membuka True Route.", icon: "🌟" },
  { id: "cg_10", title: "Kolektor Visual", desc: "Mengumpulkan 10 CG.", icon: "🖼️" },
  { id: "all_cg", title: "Galeri Lengkap", desc: "Mengumpulkan semua CG.", icon: "🎨" },
  { id: "first_save", title: "Kenangan Tersimpan", desc: "Melakukan save pertama.", icon: "💾" },
  { id: "all_endings", title: "Master of Fate", desc: "Melihat semua ending.", icon: "🏆" },
  { id: "rain_scene", title: "Hujan dan Air Mata", desc: "Melewati scene hujan emosional.", icon: "🌧️" },
  { id: "festival_date", title: "Kencan Festival", desc: "Berhasil mengajak Sinta ke festival.", icon: "🎆" }
];

const CHAT_CONVERSATIONS = [
  {
    id: "chat1",
    with: "Sinta",
    avatar: IMAGES.char_sinta,
    messages: [
      { from: "them", text: "Kamu belum tidur?", delay: 1000 },
      { from: "them", text: "Aku lihat status online-mu.", delay: 2000 },
    ],
    choices: [
      { text: "Aku masih mikirin kamu...", love: 10, trust: 5 },
      { text: "Lagi ngerjain tugas.", love: 2, trust: 2 },
      { text: "Main game.", love: 0, trust: 0 }
    ]
  },
  {
    id: "chat2",
    with: "Sinta",
    avatar: IMAGES.char_sinta,
    messages: [
      { from: "them", text: "Besok jangan lupa bawa berkas yang kemarin.", delay: 500 },
      { from: "them", text: "Dan... terima kasih untuk hari ini.", delay: 1500 },
    ],
    choices: [
      { text: "Sama-sama. Aku senang bisa bantu.", love: 8, trust: 5 },
      { text: "Iya, jangan khawatir.", love: 3, trust: 3 },
      { text: "Cuma tugas kok.", love: 0, trust: -2 }
    ]
  },
  {
    id: "chat3",
    with: "Rama",
    avatar: IMAGES.char_rama,
    messages: [
      { from: "them", text: "Bro, lu beneran suka Sinta?!", delay: 500 },
      { from: "them", text: "Gue kaget setengah mati!", delay: 1000 },
    ],
    choices: [
      { text: "Jangan kasih tahu siapa-siapa!", friendship: 5, trust: 3 },
      { text: "Kok tahu?", friendship: 3, trust: 2 },
      { text: "Gila kali. Gak kok.", friendship: -2, trust: -2 }
    ]
  },
  {
    id: "chat4",
    with: "Dinda",
    avatar: IMAGES.char_dinda,
    messages: [
      { from: "them", text: "Sinta senyum-senyum sendiri pas disebut nama kamu!", delay: 1000 },
      { from: "them", text: "Ada sesuatu nih~", delay: 1500 },
    ],
    choices: [
      { text: "Serius?!", love: 5, friendship: 3 },
      { text: "Jangan bikin gosip.", love: 0, friendship: -1 },
      { text: "Mungkin dia cuma seneng aja.", love: 2, friendship: 2 }
    ]
  },
  {
    id: "chat5",
    with: "Arya",
    avatar: IMAGES.char_arya,
    messages: [
      { from: "them", text: "Kamu terlalu dekat dengan Sinta.", delay: 1000 },
      { from: "them", text: "Itu berbahaya. Hati-hati.", delay: 2000 },
    ],
    choices: [
      { text: "Kamu siapa sebenarnya?", trust: 0, courage: 5 },
      { text: "Aku bisa jaga diri sendiri.", trust: 2, courage: 3 },
      { text: "Terima kasih peringatannya.", trust: 5, courage: 0 }
    ]
  }
];

function getScene(chapterId, sceneId) {
  const ch = STORY.chapters.find(c => c.id === chapterId);
  return ch ? ch.scenes.find(s => s.id === sceneId) : null;
}

function getChapter(id) { return STORY.chapters.find(c => c.id === id); }

const STORY = {
  chapters: [
    {
      id: 1, title: "Pertemuan Tak Terduga",
      scenes: [
        {
          id: "1-1", bg: IMAGES.bg_gate, chars: ["Rifki"],
          diag: [
            ["narrator", "Senin pagi. Angin musim semi membawa bunga sakura beterbangan di gerbang sekolah."],
            ["Rifki", "Hah... liburan sudah berakhir. Aku belum siap menghadapi dunia...", "shy"],
            ["narrator", "Rifki, siswa kelas 11 yang pemalu, berjalan dengan kepala menunduk sambil memegang tas ranselnya erat-erat."],
            ["narrator", "Tiba-tiba, seseorang menabraknya dari depan. Buku-buku beterbangan."],
            ["Sinta", "Hati-hati! Kamu tidak lihat jalan?!", "cool"],
            ["Rifki", "Ma-maaf! Aku tidak sengaja!", "shy"],
            ["narrator", "Rifki mengangkat kepalanya. Matanya bertemu dengan sepasang mata hitam yang tajam dan dingin."],
            ["Sinta", "...", "cool"],
            ["Sinta", "Kamu... anak kelas 11, ya? Aku belum pernah lihat kamu di rapat OSIS.", "cool"],
            ["Rifki", "Aku... bukan anggota OSIS. Nama ku Rifki.", "shy"],
            ["Sinta", "Sinta. Ketua OSIS. Jangan lupa.", "cool"],
            ["narrator", "Sinta berjalan pergi tanpa menoleh lagi. Rifki masih terpaku di tempatnya berdiri."]
          ],
          choices: [
            { text: "Pungutin bukunya yang jatuh", next: "1-2", stat: { love: 5, courage: 5, reputation: 3 } },
            { text: "Biarkan saja, pergi ke kelas", next: "1-3", stat: { love: 0, courage: 0, reputation: 0 } },
            { text: "Panggil dia dan berkenalan lebih jauh", next: "1-4", stat: { love: 10, courage: 10, reputation: 5 } }
          ]
        },
        {
          id: "1-2", bg: IMAGES.bg_gate, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rifki berlari kecil mengejar Sinta yang sudah berjalan menjauh."],
            ["Rifki", "Eh, Sint-Sinta! Bukumu!", "shy"],
            ["Sinta", "...", "cool"],
            ["Sinta", "Oh. Terima kasih.", "cool"],
            ["narrator", "Sinta mengambil buku itu. Jari mereka saling bersentuhan sekilas."],
            ["Sinta", "Kamu... Rifki, ya? Jangan terlalu sering melamun di jalan. Bahaya.", "cool"],
            ["Rifki", "I-iya...", "shy"],
            ["narrator", "Untuk pertama kalinya, Sinta menunjukkan senyum tipis. Sangat tipis, tapi cukup membuat dunia Rifki berhenti berputar sejenak."]
          ],
          choices: [
            { text: "Senyum balik", next: "1-5", stat: { love: 5, trust: 3 } },
            { text: "Tunduk dan pergi", next: "1-3", stat: { love: 2, trust: 0 } }
          ]
        },
        {
          id: "1-3", bg: IMAGES.bg_class, chars: ["Rifki"],
          diag: [
            ["narrator", "Rifki memutuskan untuk pergi ke kelas. Hatinya masih berdebar-debar."],
            ["Rama", "Woi Rifki! Lu kenapa muka merah gitu?!", "funny"],
            ["Rifki", "Bukan apa-apa. Aku cuma... kehabisan napas jalan kaki.", "shy"],
            ["Rama", "Jangannn... lu ketemu cewek cantik ya? Haha!", "funny"],
            ["Rifki", "Diam!", "shy"],
            ["narrator", "Rama, sahabat Rifki yang periang, menepuk punggungnya keras-keras."],
            ["Rama", "Tapi serius, lu harus lebih percaya diri, bro. Kita kelas 11 sekarang!", "funny"]
          ],
          choices: [
            { text: "Iya, aku harus berubah", next: "1-5", stat: { courage: 5, friendship: 3 } },
            { text: "Gampang bagi kamu yang ngomong", next: "1-6", stat: { courage: 0, friendship: 0 } }
          ]
        },
        {
          id: "1-4", bg: IMAGES.bg_gate, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Sinta! M-maukah kamu... ehm... mau tidak mau... berkenalan denganku?!", "shy"],
            ["Sinta", "...", "cool"],
            ["narrator", "Sinta berhenti berjalan. Dia menatap Rifki dengan ekspresi datar."],
            ["Sinta", "Berani sekali kamu panggil aku dengan nama langsung.", "cool"],
            ["Rifki", "Maaf! Aku...", "shy"],
            ["Sinta", "Tapi... tidak apa-apa. Aku suka keberanianmu. Jarang ada yang berani begitu padaku.", "cool"],
            ["narrator", "Sinta mengulurkan tangannya."],
            ["Sinta", "Senang berkenalan, Rifki.", "cool"],
            ["Rifki", "S-senang berkenalan...", "shy"]
          ],
          choices: [
            { text: "Jabat tangan dengan erat", next: "1-5", stat: { love: 10, trust: 5, courage: 5 } }
          ]
        },
        {
          id: "1-5", bg: IMAGES.bg_cafeteria, chars: ["Rifki", "Rama"],
          diag: [
            ["narrator", "Jam istirahat. Kantin sekolah ramai seperti biasa."],
            ["Rama", "Nih, gue beliin lu nasi goreng. Sebagai ucapan selamat hidup!", "funny"],
            ["Rifki", "Selamat hidup apa?", "shy"],
            ["Rama", "Lu ketemu jodoh lu tadi pagi!", "funny"],
            ["Rifki", "Bukan jodoh! Dia cuma... ketua OSIS.", "shy"],
            ["Rama", "Dan lu masih inget dia ketua OSIS. Artinya lu perhatian banget, bro.", "funny"],
            ["narrator", "Tiba-tiba, suasana kantin menjadi hening. Semua murid menatap ke satu arah."],
            ["narrator", "Sinta memasuki kantin. Aura dinginnya membuat semua orang berhati-hati."],
            ["Sinta", "...", "cool"],
            ["Rama", "Woi, dia ke sini! Ke arah kita!", "funny"],
            ["Rifki", "Jangan bercanda...", "shy"]
          ],
          choices: [
            { text: "Tunduk dan sembunyikan wajah", next: "1-7", stat: { love: 0, courage: -2 } },
            { text: "Lihat dia dan angguk sopan", next: "1-8", stat: { love: 5, courage: 3, reputation: 5 } },
            { text: "Tawarkan tempat duduk", next: "1-9", stat: { love: 8, courage: 8, reputation: 10 } }
          ]
        },
        {
          id: "1-6", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Yah, lu mah gitu terus. Gak mau keluar dari zona nyaman.", "funny"],
            ["Rifki", "Kamu tidak mengerti. Aku bukan tipe orang yang...", "shy"],
            ["Rama", "Yang apa? Yang dicintai? Bro, setiap orang berhak dicintai.", "funny"],
            ["Rifki", "...", "shy"],
            ["Rama", "Oke, gue kasih misi. Lu harus ngomong sama Sinta sebelum minggu ini berakhir.", "funny"],
            ["Rifki", "Apa?!", "shy"],
            ["Rama", "Itu tantangan persahabatan!", "funny"]
          ],
          choices: [
            { text: "Terima tantangan", next: "1-5", stat: { courage: 10, friendship: 5 } },
            { text: "Tolak mentah-mentah", next: "1-7", stat: { courage: -5, friendship: -2 } }
          ]
        },
        {
          id: "1-7", bg: IMAGES.bg_cafeteria, chars: ["Rifki"],
          diag: [
            ["narrator", "Rifki menundukkan kepalanya, berharap Sinta tidak melihatnya."],
            ["narrator", "Tapi Sinta berjalan melewatinya begitu saja."],
            ["Rama", "Bro... lu kelewatan. Dia lewat.", "funny"],
            ["Rifki", "Bagus...", "shy"],
            ["Rama", "Lu akan menyesal. Percaya gue.", "funny"],
            ["narrator", "Rifki menghela napas. Kesempatan pertama sudah hilang."]
          ],
          choices: [
            { text: "Lanjutkan hari", next: "1-10", stat: { love: 0, courage: 0 } }
          ]
        },
        {
          id: "1-8", bg: IMAGES.bg_cafeteria, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rifki menatap Sinta dan mengangguk sopan."],
            ["Sinta", "...", "cool"],
            ["narrator", "Sinta berhenti sejenak. Matanya menatap Rifki dengan tatapan aneh."],
            ["Sinta", "Kamu... anak yang tadi pagi, kan?", "cool"],
            ["Rifki", "I-iya. Rifki.", "shy"],
            ["Sinta", "Aku ingat. Hati-hati di jalan ya.", "cool"],
            ["narrator", "Sinta melanjutkan perjalanannya. Beberapa murid terlihat terkejut melihat Sinta berbicara dengan Rifki."],
            ["Rama", "Bro! Dia inget nama lu!", "funny"]
          ],
          choices: [
            { text: "Senang dalam hati", next: "1-10", stat: { love: 5, trust: 5 } }
          ]
        },
        {
          id: "1-9", bg: IMAGES.bg_cafeteria, chars: ["Rifki", "Sinta", "Rama"],
          diag: [
            ["Rifki", "Ehm... Sinta. Kalau kamu tidak keberatan, di sini ada tempat duduk.", "shy"],
            ["narrator", "Semua murid di kantin membeku. Tidak ada yang pernah berani mengajak Sinta duduk bersama."],
            ["Sinta", "...", "cool"],
            ["Sinta", "Kamu berani sekali, Rifki.", "cool"],
            ["Rama", "Gue tutup muka dulu bro...", "funny"],
            ["Sinta", "Tapi... baiklah. Aku akan duduk di sini. Hanya untuk 5 menit.", "cool"],
            ["Rifki", "S-serius?!", "shy"],
            ["narrator", "Sinta duduk di seberang Rifki. Suasana kantin kembali riuh, tapi tatapan iri melayang ke arah mereka."]
          ],
          choices: [
            { text: "Tanyakan tentang OSIS", next: "1-10", stat: { love: 5, trust: 3, reputation: 10 } },
            { text: "Diam dan makan", next: "1-10", stat: { love: 3, trust: 2 } }
          ]
        },
        {
          id: "1-10", bg: IMAGES.bg_class, chars: ["Rifki"],
          diag: [
            ["narrator", "Hari pertama berakhir. Rifki duduk sendirian di kelas yang sudah kosong."],
            ["narrator", "Ponselnya bergetar."],
            ["Rifki", "Pesan? Dari nomor tidak dikenal...", "shy"],
            ["narrator", "\"Hati-hati. Jangan terlalu dekat dengan Sinta. - A\""],
            ["Rifki", "Siapa ini...?", "shy"],
            ["narrator", "Rifki menatap layar ponselnya dengan perasaan campur aduk."],
            ["narrator", "Pertemuan tak terduga hari ini ternyata membuka tirai rahasia besar di sekolah ini."]
          ],
          choices: [
            { text: "Abaikan pesan itu", next: "2-1", stat: { courage: 5, trust: 0 } },
            { text: "Simpan dan waspada", next: "2-1", stat: { courage: 3, trust: 3 } },
            { text: "Balas pesan itu", next: "2-1", stat: { courage: 8, trust: -2 } }
          ]
        }
      ]
    },
    {
      id: 2, title: "Misi Rahasia",
      scenes: [
        {
          id: "2-1", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Bro, lu denger gak? Ada yang aneh di sekolah kita.", "funny"],
            ["Rifki", "Aneh gimana?", "shy"],
            ["Rama", "Geng rahasia. Namanya Scarlet. Dipimpin sama Sinta!", "funny"],
            ["Rifki", "Scarlet? Sinta? Kamu bercanda...", "shy"],
            ["Rama", "Serius! Mereka ngurusin masalah-masalah yang guru gak bisa. Tapi jangan bilang-bilang ya.", "funny"],
            ["narrator", "Rifki teringat pesan misterius semalam."],
            ["Rama", "Eh, ngomong-ngomong, Sinta cari lu. Katanya ada misi buat lu.", "funny"],
            ["Rifki", "Misi?!", "shy"]
          ],
          choices: [
            { text: "Terima misi", next: "2-2", stat: { courage: 10, reputation: 10, trust: 5 } },
            { text: "Ragu-ragu", next: "2-3", stat: { courage: 0, trust: 0 } },
            { text: "Tolak", next: "2-4", stat: { courage: -5, reputation: -5 } }
          ]
        },
        {
          id: "2-2", bg: IMAGES.bg_rooftop, chars: ["Rifki", "Sinta"],
          diag: [
            ["Sinta", "Kamu datang. Bagus.", "cool"],
            ["Rifki", "Kamu... memang mencariku?", "shy"],
            ["Sinta", "Aku butuh bantuanmu. Keahlianmu di komputer.", "cool"],
            ["Rifki", "Keahlian komputer?", "shy"],
            ["Sinta", "Ada data penting yang harus kurekover dari laptop yang rusak. Hanya kamu yang bisa.", "cool"],
            ["Rifki", "Kenapa aku?", "shy"],
            ["Sinta", "Karena aku percaya kamu tidak akan membocorkan rahasia ini.", "cool"],
            ["narrator", "Sinta menatap Rifki dengan mata yang tiba-tiba terlihat lembut."]
          ],
          choices: [
            { text: "Aku akan bantu", next: "2-5", stat: { love: 10, trust: 10, courage: 5 } },
            { text: "Tanyakan risikonya", next: "2-6", stat: { love: 5, trust: 5, courage: 3 } }
          ]
        },
        {
          id: "2-3", bg: IMAGES.bg_rooftop, chars: ["Rifki", "Sinta"],
          diag: [
            ["Sinta", "Kenapa wajahmu ragu?", "cool"],
            ["Rifki", "Aku... tidak yaku bisa membantu.", "shy"],
            ["Sinta", "Rifki. Aku tidak meminta bantuan pada orang yang tidak kupercaya.", "cool"],
            ["narrator", "Sinta melangkah mendekat. Aromanya seperti bunga di tengah salju."],
            ["Sinta", "Aku tahu kamu bisa. Aku sudah mengamatimu dari jauh.", "cool"],
            ["Rifki", "Mengamatiku...?", "shy"]
          ],
          choices: [
            { text: "Baiklah, aku akan coba", next: "2-5", stat: { love: 8, trust: 8, courage: 5 } }
          ]
        },
        {
          id: "2-4", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Bro! Lu tolak?! Gila!", "funny"],
            ["Rifki", "Aku tidak mau terlibat masalah...", "shy"],
            ["Rama", "Tapi ini kesempatan emas! Sinta sendiri yang minta!", "funny"],
            ["narrator", "Tiba-tiba, Dinda datang dengan wajah cemas."],
            ["Dinda", "Rifki! Sinta ditantang geng Wolf di perpustakaan! Kamu harus bantu!", "cheerful"],
            ["Rifki", "Apa?!", "shy"]
          ],
          choices: [
            { text: "Lari ke perpustakaan", next: "2-7", stat: { courage: 10, love: 5 } },
            { text: "Biarkan saja", next: "2-8", stat: { courage: -10, love: -5 } }
          ]
        },
        {
          id: "2-5", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Di sudut perpustakaan yang sepi, Sinta menyerahkan laptop hitam kepada Rifki."],
            ["Sinta", "Ini. Data di dalamnya sangat penting untuk Scarlet.", "cool"],
            ["Rifki", "Scarlet... jadi benar geng itu ada?", "shy"],
            ["Sinta", "Bukan geng. Kami adalah... penjaga keseimbangan.", "cool"],
            ["Rifki", "Penjaga keseimbangan?", "shy"],
            ["Sinta", "Ada hal-hal yang guru dan polisi tidak bisa selesaikan. Kami yang menangani.", "cool"],
            ["narrator", "Rifki mulai bekerja. Jarinya menari di keyboard. Sinta menatapnya dengan takjub."],
            ["Sinta", "Kamu... sangat berbeda saat fokus.", "cool"],
            ["Rifki", "E-eh? Maaf...", "shy"],
            ["Sinta", "Jangan minta maaf. Aku suka melihatnya.", "cool"]
          ],
          choices: [
            { text: "Senyum dan lanjutkan kerja", next: "2-9", stat: { love: 10, trust: 5 } },
            { text: "Tanyakan lebih banyak tentang Scarlet", next: "2-10", stat: { trust: 5, reputation: 5 } }
          ]
        },
        {
          id: "2-6", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Apa risikonya kalau aku gagal?", "shy"],
            ["Sinta", "Kamu akan dimusuhi oleh pihak yang tidak kami inginkan.", "cool"],
            ["Rifki", "Berbahaya...", "shy"],
            ["Sinta", "Tapi aku akan melindungimu. Itu janjiku.", "cool"],
            ["narrator", "Sinta menatap Rifki dengan serius. Matanya berkilauan seperti berlian hitam."],
            ["Rifki", "Baiklah. Aku percaya padamu.", "shy"]
          ],
          choices: [
            { text: "Mulai bekerja", next: "2-5", stat: { love: 5, trust: 10, courage: 5 } }
          ]
        },
        {
          id: "2-7", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["narrator", "Rifki berlari ke perpustakaan. Dia melihat Sinta sedang dihadang oleh Rendy dan dua anak lain."],
            ["Rendy", "Ketua Scarlet yang hebat. Sendirian tanpa pengawal?", "arrogant"],
            ["Sinta", "Aku tidak butuh pengawal untuk menghadapi kalian.", "cool"],
            ["Rendy", "Berani sekali. Tapi kali ini, kami datang dengan tawaran.", "arrogant"],
            ["Rifki", "H-hentikan!", "shy"],
            ["narrator", "Semua mata tertuju pada Rifki yang berdiri di pintu dengan napas terengah."],
            ["Rendy", "Siapa bocah ini?", "arrogant"],
            ["Sinta", "Rifki... kenapa kamu di sini?", "cool"]
          ],
          choices: [
            { text: "Pergi ke samping Sinta", next: "2-11", stat: { courage: 15, love: 10, trust: 10 } },
            { text: "Cari bantuan guru", next: "2-12", stat: { courage: 5, reputation: 5 } },
            { text: "Tantang Rendy", next: "2-13", stat: { courage: 20, reputation: 10, love: 5 } }
          ]
        },
        {
          id: "2-8", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Bro... lu beneran gak peduli?", "funny"],
            ["Rifki", "Dia bisa jaga diri sendiri...", "shy"],
            ["Rama", "Tapi dia butuh lu! Lu gak lihat cara dia ngeliatin lu kemarin?", "funny"],
            ["narrator", "Rifki menatap meja dengan penyesalan."],
            ["Rifki", "Aku... pengecut.", "shy"],
            ["Rama", "Masih bisa diperbaiki. Cepat, kita ke perpustakaan!", "funny"]
          ],
          choices: [
            { text: "Ikut Rama", next: "2-7", stat: { courage: 5, friendship: 5 } }
          ]
        },
        {
          id: "2-9", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Setelah satu jam, Rifki berhasil memulihkan data itu."],
            ["Rifki", "Selesai. File-nya ada di folder ini.", "shy"],
            ["Sinta", "Kamu... luar biasa.", "cool"],
            ["narrator", "Sinta tersenyum. Bukan senyum tipis, tapi senyum yang tulus dan hangat."],
            ["Sinta", "Terima kasih, Rifki. Scarlet berhutang padamu.", "cool"],
            ["Rifki", "Aku tidak minta imbalan.", "shy"],
            ["Sinta", "Tapi aku akan memberikannya. Besok, setelah sekolah. Temui aku di rooftop.", "cool"]
          ],
          choices: [
            { text: "Janji akan datang", next: "2-14", stat: { love: 10, trust: 10 } },
            { text: "Tanyakan imbalannya", next: "2-14", stat: { love: 5, trust: 5 } }
          ]
        },
        {
          id: "2-10", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Siapa saja anggota Scarlet?", "shy"],
            ["Sinta", "Tidak banyak. Hanya mereka yang benar-benar peduli pada keadilan.", "cool"],
            ["Sinta", "Ada Arya. Dia ahli intel. Dinda. Dia juru bicara kami.", "cool"],
            ["Rifki", "Dinda?!", "shy"],
            ["Sinta", "Kaget? Dia terlihat ceria, tapi dia sangat berani.", "cool"],
            ["Sinta", "Dan sekarang... ada kamu. Kalau kamu mau.", "cool"]
          ],
          choices: [
            { text: "Aku mau bergabung", next: "2-9", stat: { love: 5, trust: 10, reputation: 10, scarlet_path: true } },
            { text: "Aku perlu waktu berpikir", next: "2-9", stat: { love: 3, trust: 5 } }
          ]
        },
        {
          id: "2-11", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["Rifki", "Aku di sini untuk Sinta.", "shy"],
            ["Rendy", "Hah! Bocah pemalu membela ketua Scarlet? Lucu!", "arrogant"],
            ["Sinta", "Rifki... kamu tidak perlu...", "cool"],
            ["Rifki", "Aku perlu. Karena aku... aku peduli padamu.", "shy"],
            ["narrator", "Sinta terkejut. Wajahnya memerah sekilas."],
            ["Rendy", "Ugh, menjijikkan. Aku pergi dulu. Tapi ingat, Scarlet tidak akan aman selamanya.", "arrogant"],
            ["narrator", "Rendy pergi dengan kedua anak buahnya."],
            ["Sinta", "Kamu... mengatakannya.", "cool"],
            ["Rifki", "Maaf, aku terbawa suasana...", "shy"]
          ],
          choices: [
            { text: "Aku serius", next: "2-14", stat: { love: 15, trust: 10, courage: 10 } },
            { text: "Itu cuma untuk mengusir mereka", next: "2-14", stat: { love: 5, trust: 0 } }
          ]
        },
        {
          id: "2-12", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["narrator", "Rifki berlari mencari guru. Tapi ketika dia kembali dengan guru, Rendy sudah pergi."],
            ["Sinta", "Kamu membawa guru? Aku tidak butuh perlindungan seperti itu.", "cool"],
            ["Rifki", "Tapi aku khawatir...", "shy"],
            ["Sinta", "Khawatir itu baik. Tapi Scarlet punya caranya sendiri.", "cool"],
            ["narrator", "Sinta terlihat sedikit kecewa, tapi mengerti."]
          ],
          choices: [
            { text: "Minta maaf", next: "2-14", stat: { love: 3, trust: 5 } }
          ]
        },
        {
          id: "2-13", bg: IMAGES.bg_library, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["Rifki", "Aku tidak takut padamu, Rendy!", "shy"],
            ["Rendy", "Oh? Bocah ini punya nyali ternyata.", "arrogant"],
            ["Sinta", "Rifki, jangan!", "cool"],
            ["narrator", "Rifki mengepalkan tangan. Tubuhnya gemetar, tapi matanya menatap tajam."],
            ["Rendy", "Bagus. Aku suka tantangan. Kita akan bertemu lagi.", "arrogant"],
            ["narrator", "Rendy pergi. Sinta menatap Rifki dengan ekspresi campur aduk."],
            ["Sinta", "Kamu... sangat bodoh. Tapi sangat berani.", "cool"]
          ],
          choices: [
            { text: "Aku hanya melindungi yang kucintai", next: "2-14", stat: { love: 20, courage: 15, trust: 10 } }
          ]
        },
        {
          id: "2-14", bg: IMAGES.bg_rooftop, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rooftop setelah sekolah. Matahari terbenam mewarnai langit oranye."],
            ["Sinta", "Kamu datang.", "cool"],
            ["Rifki", "Aku janji, kan?", "shy"],
            ["Sinta", "Ini imbalanku.", "cool"],
            ["narrator", "Sinta mengulurkan sebuah kalung dengan liontin berbentuk bulan sabit."],
            ["Sinta", "Ini lambang Scarlet. Kalau kamu memakainya, berarti kamu bagian dari kami.", "cool"],
            ["Rifki", "Ini... terlalu berharga.", "shy"],
            ["Sinta", "Tidak seberharga bantuanmu. Dan...", "cool"],
            ["narrator", "Sinta berbisik pelan."],
            ["Sinta", "Tidak seberharga keberanianmu untuk berdiri di sisiku hari ini.", "cool"]
          ],
          choices: [
            { text: "Terima dan pakai kalung itu", next: "3-1", stat: { love: 15, trust: 15, courage: 10, scarlet_path: true } },
            { text: "Terima tapi simpan dulu", next: "3-1", stat: { love: 10, trust: 10 } },
            { text: "Tolak dengan sopan", next: "3-1", stat: { love: 5, trust: 5 } }
          ]
        }
      ]
    },
    {
      id: 3, title: "Rahasia Scarlet",
      scenes: [
        {
          id: "3-1", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["narrator", "Gudang tua di belakang sekolah. Tempat rahasia Scarlet berkumpul."],
            ["Arya", "Jadi ini anak baru yang kamu ceritakan?", "mysterious"],
            ["Sinta", "Rifki. Dia ahli komputer kita sekarang.", "cool"],
            ["Arya", "Hmph. Dia terlihat lemah.", "mysterious"],
            ["Rifki", "Aku...", "shy"],
            ["Sinta", "Jangan meremehkannya. Dia sudah membuktikan dirinya.", "cool"],
            ["narrator", "Arya menatap Rifki dengan mata menyipit. Ada sesuatu yang tersembunyi di balik tatapan itu."],
            ["Arya", "Baiklah. Tapi aku akan mengawasimu.", "mysterious"]
          ],
          choices: [
            { text: "Sapa Arya dengan ramah", next: "3-2", stat: { trust: 5, friendship: 3 } },
            { text: "Tatap Arya dengan tegas", next: "3-3", stat: { courage: 5, trust: 0 } },
            { text: "Diam saja", next: "3-2", stat: { trust: 0 } }
          ]
        },
        {
          id: "3-2", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Arya"],
          diag: [
            ["Rifki", "Senang berkenalan, Arya. Aku akan berusaha tidak mengecewakan.", "shy"],
            ["Arya", "...", "mysterious"],
            ["Arya", "Kamu sopan. Itu bagus. Tapi sopan saja tidak cukup di Scarlet.", "mysterious"],
            ["Arya", "Kamu harus siap mengorbankan apa pun untuk melindungi sesama.", "mysterious"],
            ["Rifki", "Aku mengerti.", "shy"],
            ["Arya", "Kamu tidak mengerti. Belum. Tapi kamu akan mengerti suatu hari nanti.", "mysterious"]
          ],
          choices: [
            { text: "Tanyakan masa lalu Arya", next: "3-4", stat: { trust: 3 } },
            { text: "Fokus pada tugas", next: "3-5", stat: { reputation: 5 } }
          ]
        },
        {
          id: "3-3", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Arya"],
          diag: [
            ["Rifki", "Aku tidak peduli kamu mengawasiku atau tidak. Aku di sini untuk membantu.", "shy"],
            ["Arya", "...", "mysterious"],
            ["Arya", "Heh. Ada api di matamu. Aku suka itu.", "mysterious"],
            ["Arya", "Tapi api bisa membakar yang memilikinya. Hati-hati.", "mysterious"],
            ["narrator", "Arya tersenyum misterius dan menghilang ke bayang-bayang."]
          ],
          choices: [
            { text: "Kejar Arya", next: "3-4", stat: { courage: 5, trust: 0 } },
            { text: "Biarkan dia pergi", next: "3-5", stat: { trust: 3 } }
          ]
        },
        {
          id: "3-4", bg: IMAGES.bg_night, chars: ["Rifki", "Arya"],
          diag: [
            ["Rifki", "Arya! Tunggu!", "shy"],
            ["Arya", "Kamu mengejariku? Berani sekali.", "mysterious"],
            ["Rifki", "Aku merasa... kamu mengenalku. Atau setidaknya, kamu mengenal seseorang yang kukenal.", "shy"],
            ["Arya", "...", "mysterious"],
            ["Arya", "Kamu terlalu peka. Itu berbahaya.", "mysterious"],
            ["narrator", "Arya melepas hoodie-nya sejenak. Ada bekas luka di lehernya."],
            ["Arya", "Rahasia bukan untuk dibagikan. Tapi... aku akan mengawasimu dari dekat, Rifki.", "mysterious"]
          ],
          choices: [
            { text: "Aku akan jaga rahasiamu", next: "3-5", stat: { trust: 10, secret_arya: true } },
            { text: "Kita semua punya luka", next: "3-5", stat: { trust: 5, friendship: 5 } }
          ]
        },
        {
          id: "3-5", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Dinda"],
          diag: [
            ["Dinda", "Rifki! Senang kamu bergabung! Aku Dinda!", "cheerful"],
            ["Rifki", "H-halo Dinda. Aku dengar kamu juga di Scarlet.", "shy"],
            ["Dinda", "Iya! Aku yang urus komunikasi dan intel publik.", "cheerful"],
            ["Sinta", "Dinda, jangan terlalu berisik. Kita ada misi malam ini.", "cool"],
            ["Dinda", "Oke oke. Tapi Rifki, kamu harus ikut! Misi pertama!", "cheerful"],
            ["Rifki", "Misi malam ini?", "shy"],
            ["Sinta", "Ada kasus perundungan di kelas 12. Korban takut melapor. Kita harus mengumpulkan bukti.", "cool"]
          ],
          choices: [
            { text: "Siap ikut", next: "3-6", stat: { courage: 10, reputation: 5 } },
            { text: "Tanyakan detailnya", next: "3-6", stat: { trust: 5 } },
            { text: "Tawarkan bantu dari komputer", next: "3-6", stat: { reputation: 10 } }
          ]
        },
        {
          id: "3-6", bg: IMAGES.bg_night, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Malam itu, Rifki dan Sinta menyelinap ke sekolah untuk mengambil rekaman CCTV."],
            ["Sinta", "Kamu takut?", "cool"],
            ["Rifki", "Sedikit. Tapi bersamamu... rasanya tidak terlalu menakutkan.", "shy"],
            ["Sinta", "...", "cool"],
            ["Sinta", "Kamu selalu tahu kata-kata yang tepat. Atau mungkin... kamu terlalu jujur.", "cool"],
            ["narrator", "Tiba-tiba, lampu koridor menyala. Seseorang datang!"],
            ["Rifki", "Sembunyi!", "shy"]
          ],
          choices: [
            { text: "Tarik Sinta ke ruangan kosong", next: "3-7", stat: { love: 10, courage: 10 } },
            { text: "Lari terpisah", next: "3-8", stat: { courage: 5, trust: -5 } }
          ]
        },
        {
          id: "3-7", bg: IMAGES.bg_night, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rifki menarik tangan Sinta ke ruang kelas yang gelap. Mereka bersembunyi di balik meja."],
            ["Sinta", "...", "cool"],
            ["Rifki", "Maaf. Aku panik.", "shy"],
            ["Sinta", "Tidak apa-apa. Kamu... melindungiku.", "cool"],
            ["narrator", "Di kegelapan, Rifki bisa merasakan detak jantung Sinta yang berdebar kencang."],
            ["Sinta", "Rifki. Aku... aku tidak terbiasa diperlakukan seperti ini.", "cool"],
            ["Rifki", "Seperti apa?", "shy"],
            ["Sinta", "Seperti... seseorang yang berharga dilindungi.", "cool"]
          ],
          choices: [
            { text: "Kamu berharga untukku", next: "3-9", stat: { love: 15, trust: 10 } },
            { text: "Kita saling melindungi", next: "3-9", stat: { love: 10, trust: 10 } }
          ]
        },
        {
          id: "3-8", bg: IMAGES.bg_night, chars: ["Rifki"],
          diag: [
            ["narrator", "Rifki berlari ke arah berbeda. Tapi ketika dia berhasil kabur, Sinta tidak ada di tempat pertemuan."],
            ["Rifki", "Sinta?!", "shy"],
            ["narrator", "Dia menunggu satu jam. Sinta tidak datang."],
            ["Rifki", "Aku meninggalkannya...", "shy"],
            ["narrator", "Ponselnya bergetar. Pesan dari Sinta: \"Aku aman. Tapi jangan pernah tinggalkan aku lagi.\""],
            ["Rifki", "Aku janji...", "shy"]
          ],
          choices: [
            { text: "Balas janji", next: "3-9", stat: { love: 5, trust: -5, broken_promise: true } }
          ]
        },
        {
          id: "3-9", bg: IMAGES.bg_room, chars: ["Rifki"],
          diag: [
            ["narrator", "Rifki di kamarnya, memegang kalung bulan sabit."],
            ["narrator", "Ponselnya bergetar. Chat dari Sinta."],
            ["narrator", "\"Terima kasih untuk hari ini. Aku... senang kamu di sini.\""],
            ["Rifki", "Aku juga...", "shy"],
            ["narrator", "Rifki tersenyum sendirian. Hubungan mereka semakin dekat."],
            ["narrator", "Tapi pesan misterius itu datang lagi: \"Awas. Scarlet akan jatuh. - A\""],
            ["Rifki", "Siapa sebenarnya yang mengirim ini...", "shy"]
          ],
          choices: [
            { text: "Coba lacak nomornya", next: "4-1", stat: { courage: 10, reputation: 5 } },
            { text: "Tunjukkan ke Sinta", next: "4-1", stat: { trust: 10 } },
            { text: "Simpan rahasia", next: "4-1", stat: { trust: -5, courage: 5 } }
          ]
        }
      ]
    },
    {
      id: 4, title: "Ancaman Wolf",
      scenes: [
        {
          id: "4-1", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Bro, lu denger? Wolf makin agresif.", "funny"],
            ["Rifki", "Aku tahu. Aku dapat pesan ancaman.", "shy"],
            ["Rama", "Serius?! Lu harus kasih tahu Sinta!", "funny"],
            ["Rifki", "Aku akan. Tapi aku juga ingin tahu siapa di balik ini.", "shy"],
            ["narrator", "Tiba-tiba, jendela kelas dilempar batu. Kertas tersangkut di kaca."],
            ["Rama", "Apa-apaan?!", "funny"],
            ["narrator", "Tulisan di kertas: \"Scarlet akan hancur. Dan kamu, Rifki, akan menjadi penyebabnya.\""]
          ],
          choices: [
            { text: "Ambil kertas itu", next: "4-2", stat: { courage: 10 } },
            { text: "Panggil guru", next: "4-3", stat: { reputation: 5 } },
            { text: "Foto dan kirim ke Sinta", next: "4-2", stat: { trust: 10 } }
          ]
        },
        {
          id: "4-2", bg: IMAGES.bg_rooftop, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["Sinta", "Ini serius. Wolf tidak pernah seberani ini.", "cool"],
            ["Arya", "Ada orang dalam. Seseorang memberi info ke Wolf.", "mysterious"],
            ["Rifki", "Orang dalam? Di Scarlet?", "shy"],
            ["Sinta", "Aku tidak percaya. Tapi bukti tidak bisa bohong.", "cool"],
            ["Arya", "Rifki. Kamu baru bergabung. Kamu yang paling mungkin...", "mysterious"],
            ["Sinta", "Arya! Cukup!", "cool"],
            ["narrator", "Sinta berdiri di depan Rifki, melindunginya dari tatapan curiga Arya."]
          ],
          choices: [
            { text: "Buktikan ketulusanku", next: "4-4", stat: { courage: 10, trust: 10 } },
            { text: "Tanyakan bukti Arya", next: "4-5", stat: { trust: 5 } },
            { text: "Diam dan terima tuduhan", next: "4-6", stat: { trust: -10, courage: -5 } }
          ]
        },
        {
          id: "4-3", bg: IMAGES.bg_class, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Guru datang! Wolf kabur!", "funny"],
            ["Rifki", "Tapi mereka tahu nama ku...", "shy"],
            ["Rama", "Berarti mereka memantaumu. Lu harus hati-hati, bro.", "funny"],
            ["Rifki", "Aku harus lebih kuat.", "shy"],
            ["Rama", "Gue latih lu! Latihan fisik!", "funny"]
          ],
          choices: [
            { text: "Latihan dengan Rama", next: "4-7", stat: { courage: 10, friendship: 5 } },
            { text: "Latihan sendiri", next: "4-7", stat: { courage: 5 } }
          ]
        },
        {
          id: "4-4", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["Rifki", "Aku akan buktikan bahwa aku bukan pengkhianat.", "shy"],
            ["Rifki", "Beri aku 24 jam. Aku akan temukan siapa pengkhianatnya.", "shy"],
            ["Arya", "Dan kalau gagal?", "mysterious"],
            ["Rifki", "Aku akan keluar dari Scarlet. Dan tidak akan pernah dekati Sinta lagi.", "shy"],
            ["Sinta", "Rifki! Jangan berjanji seperti itu!", "cool"],
            ["Rifki", "Aku harus. Untuk kepercayaan.", "shy"],
            ["Arya", "Bagus. Aku suka taruhan. 24 jam. Mulai sekarang.", "mysterious"]
          ],
          choices: [
            { text: "Mulai investigasi", next: "4-8", stat: { courage: 15, trust: 10 } }
          ]
        },
        {
          id: "4-5", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Arya"],
          diag: [
            ["Rifki", "Apa buktiku aku pengkhianat?", "shy"],
            ["Arya", "Kamu terlalu dekat dengan Sinta. Terlalu cepat.", "mysterious"],
            ["Arya", "Tapi... aku juga tidak punya bukti konkret. Hanya firasat.", "mysterious"],
            ["Rifki", "Firasat bisa salah.", "shy"],
            ["Arya", "Bisa. Itulah mengapa aku masih membiarkanmu bernapas.", "mysterious"],
            ["narrator", "Arya mendekat dan berbisik: \"Tapi aku akan mengawasimu setiap detik.\""]
          ],
          choices: [
            { text: "Terima pengawasan itu", next: "4-8", stat: { trust: 5 } }
          ]
        },
        {
          id: "4-6", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Kalau kalian tidak percaya, aku akan pergi.", "shy"],
            ["Sinta", "Rifki, jangan!", "cool"],
            ["narrator", "Sinta menarik tangan Rifki."],
            ["Sinta", "Aku percaya padamu. Bahkan jika yang lain tidak.", "cool"],
            ["Rifki", "Sinta...", "shy"],
            ["Sinta", "Tetaplah. Untukku.", "cool"]
          ],
          choices: [
            { text: "Tetap untuk Sinta", next: "4-8", stat: { love: 15, trust: 10 } }
          ]
        },
        {
          id: "4-7", bg: IMAGES.bg_field, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Satu! Dua! Tiga! Push up!", "funny"],
            ["Rifki", "Aku... tidak... kuat...", "shy"],
            ["Rama", "Lu harus kuat! Sinta butuh pria yang bisa melindunginya!", "funny"],
            ["Rifki", "Baiklah... satu lagi!", "shy"],
            ["narrator", "Sore itu, Rifki latihan sampai tubuhnya lemas. Tapi tekadnya semakin kuat."]
          ],
          choices: [
            { text: "Lanjutkan latihan", next: "4-8", stat: { courage: 15, friendship: 5 } }
          ]
        },
        {
          id: "4-8", bg: IMAGES.bg_library, chars: ["Rifki", "Dinda"],
          diag: [
            ["Dinda", "Aku menemukan sesuatu! Ada email yang dikirim dari akun anonim ke Wolf.", "cheerful"],
            ["Rifki", "Isinya?", "shy"],
            ["Dinda", "Lokasi pertemuan Scarlet. Jadwal patroli. Tapi...", "cheerful"],
            ["Dinda", "IP addressnya berasal dari... komputer di ruang guru!", "cheerful"],
            ["Rifki", "Ruang guru?!", "shy"],
            ["narrator", "Rifki terkejut. Pengkhianatnya adalah orang dewasa?"]
          ],
          choices: [
            { text: "Selidiki ruang guru", next: "4-9", stat: { courage: 10, reputation: 10 } },
            { text: "Laporkan ke Sinta", next: "4-10", stat: { trust: 10 } }
          ]
        },
        {
          id: "4-9", bg: IMAGES.bg_night, chars: ["Rifki", "Arya"],
          diag: [
            ["narrator", "Rifki menyelinap ke ruang guru malam itu. Arya mengikutinya diam-diam."],
            ["Arya", "Kamu benar-benar tidak tahu takut.", "mysterious"],
            ["Rifki", "Aku harus tahu kebenarannya.", "shy"],
            ["narrator", "Mereka menemukan komputer yang masih menyala. Ada file terbuka."],
            ["Arya", "Ini... rencana penyerangan ke Scarlet. Ditulis oleh... Wakasek?", "mysterious"],
            ["Rifki", "Wakasek?!", "shy"]
          ],
          choices: [
            { text: "Ambil bukti", next: "4-10", stat: { courage: 15, trust: 15 } },
            { text: "Foto dan kabur", next: "4-10", stat: { courage: 10, trust: 10 } }
          ]
        },
        {
          id: "4-10", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya", "Dinda"],
          diag: [
            ["Sinta", "Wakasek? Dia yang memberi info ke Wolf?", "cool"],
            ["Dinda", "Ternyata Wolf dibayar oleh Wakasek untuk menghancurkan Scarlet!", "cheerful"],
            ["Arya", "Karena Scarlet tahu rahasia ilegalnya. Dia terlibat korupsi dana sekolah.", "mysterious"],
            ["Rifki", "Kita harus lapor polisi?", "shy"],
            ["Sinta", "Tidak. Kita punya cara sendiri. Tapi...", "cool"],
            ["narrator", "Sinta menatap Rifki dengan bangga."],
            ["Sinta", "Kamu telah menyelamatkan Scarlet. Terima kasih, Rifki.", "cool"]
          ],
          choices: [
            { text: "Senyum bangga", next: "5-1", stat: { love: 10, trust: 15, reputation: 15 } },
            { text: "Katakan ini untuk Sinta", next: "5-1", stat: { love: 15, trust: 10 } }
          ]
        }
      ]
    },
    {
      id: 5, title: "Festival Sekolah",
      scenes: [
        {
          id: "5-1", bg: IMAGES.bg_festival, chars: ["Rifki", "Rama", "Dinda"],
          diag: [
            ["Rama", "Festival! Akhirnya hari yang kita tunggu!", "funny"],
            ["Dinda", "Rifki! Kamu harus lihat stand kelas kita!", "cheerful"],
            ["Rifki", "Stand apa?", "shy"],
            ["Dinda", "Kafe maid! Aku jadi maid!", "cheerful"],
            ["Rama", "Gue jadi chef! Meski cuma bisa masak mie...", "funny"],
            ["narrator", "Lampu-lampu festival menerangi sekolah. Suasana riang dan gembira."],
            ["Rama", "Eh Rifki, Sinta cari lu. Katanya ada yang mau dia kasih liat.", "funny"]
          ],
          choices: [
            { text: "Cari Sinta", next: "5-2", stat: { love: 5, courage: 5 } },
            { text: "Tunggu di stand kelas", next: "5-3", stat: { love: 0 } },
            { text: "Ajak Rama ikut", next: "5-2", stat: { love: 3, friendship: 5 } }
          ]
        },
        {
          id: "5-2", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Sinta berdiri di depan stand yukata dengan wajah sedikit canggung."],
            ["Sinta", "Rifki. Aku... tidak pernah pakai yukata sebelumnya.", "cool"],
            ["Rifki", "Kamu... akan pakai yukata?", "shy"],
            ["Sinta", "Aku ingin mencoba. Tapi... aku malu sendirian.", "cool"],
            ["narrator", "Wajah Sinta memerah. Dia tidak pernah menunjukkan sisi ini."]
          ],
          choices: [
            { text: "Aku akan menemanimu", next: "5-4", stat: { love: 15, courage: 10 } },
            { text: "Kamu pasti cantik", next: "5-4", stat: { love: 10, trust: 5 } },
            { text: "Aku juga mau coba yukata", next: "5-4", stat: { love: 10, courage: 5 } }
          ]
        },
        {
          id: "5-3", bg: IMAGES.bg_festival, chars: ["Rifki", "Rama"],
          diag: [
            ["Rama", "Lu nunggu di sini? Sinta pasti kecewa, bro.", "funny"],
            ["Rifki", "Aku tidak tahu harus ngapain kalau ketemu dia...", "shy"],
            ["Rama", "Gampang. Ngobrol aja. Dia juga manusia.", "funny"],
            ["narrator", "Tiba-tiba, Sinta muncul di stand mereka. Dia sudah memakai yukata merah muda."],
            ["Sinta", "Rifki. Aku mencarimu.", "cool"],
            ["Rama", "Gue minggat dulu!", "funny"]
          ],
          choices: [
            { text: "Puji yukatanya", next: "5-4", stat: { love: 10, courage: 5 } }
          ]
        },
        {
          id: "5-4", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Sinta dalam yukata merah muda. Rambut hitamnya dihiasi bunga kanzashi."],
            ["Rifki", "Kamu... sangat cantik.", "shy"],
            ["Sinta", "...", "cool"],
            ["Sinta", "Terima kasih. Kamu juga... tidak buruk dengan yukata.", "cool"],
            ["narrator", "Mereka berjalan menyusuri festival. Tangan mereka saling berdekatan."],
            ["Sinta", "Rifki. Aku belum pernah senang seperti ini sejak...", "cool"],
            ["Sinta", "Sejak ibuku meninggal.", "cool"]
          ],
          choices: [
            { text: "Peluk dia", next: "5-5", stat: { love: 15, trust: 10 } },
            { text: "Genggam tangannya", next: "5-5", stat: { love: 10, trust: 10 } },
            { text: "Dengarkan dengan saksama", next: "5-5", stat: { love: 5, trust: 10 } }
          ]
        },
        {
          id: "5-5", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta"],
          diag: [
            ["Sinta", "Ibu adalah orang yang mengajariku tentang keadilan.", "cool"],
            ["Sinta", "Dia meninggal karena melawan koruptor. Aku melanjutkan perjuangannya lewat Scarlet.", "cool"],
            ["Rifki", "Kamu sangat kuat, Sinta.", "shy"],
            ["Sinta", "Aku lelah. Tapi bersamamu... aku merasa bisa istirahat sejenak.", "cool"],
            ["narrator", "Kembang api meledak di langit. Cahayanya menerangi wajah Sinta yang tersenyum lembut."],
            ["Sinta", "Rifki. Aku...", "cool"]
          ],
          choices: [
            { text: "Tunggu dia melanjutkan", next: "5-6", stat: { love: 10 } },
            { text: "Cium pipinya", next: "5-7", stat: { love: 20, courage: 15 } }
          ]
        },
        {
          id: "5-6", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta"],
          diag: [
            ["Sinta", "Aku... senang bertemu kamu.", "cool"],
            ["Rifki", "Aku juga.", "shy"],
            ["Sinta", "Maukah kamu... tetap di sisiku? Selamanya?", "cool"],
            ["Rifki", "Aku janji.", "shy"],
            ["narrator", "Mereka saling berjanji di bawah kembang api. Janji yang akan diuji oleh waktu."]
          ],
          choices: [
            { text: "Janji akan selalu ada", next: "5-8", stat: { love: 10, trust: 10 } }
          ]
        },
        {
          id: "5-7", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rifki dengan berani mencium pipi Sinta."],
            ["Sinta", "...", "cool"],
            ["Sinta", "Kamu... berani sekali.", "cool"],
            ["Rifki", "Maaf! Aku tidak bisa menahan diri!", "shy"],
            ["Sinta", "Tidak perlu minta maaf. Aku... tidak keberatan.", "cool"],
            ["narrator", "Sinta menyentuh pipinya yang tercium. Senyumnya lebih lebar dari sebelumnya."]
          ],
          choices: [
            { text: "Genggam tangannya", next: "5-8", stat: { love: 20, trust: 10 } }
          ]
        },
        {
          id: "5-8", bg: IMAGES.bg_festival, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["Rendy", "Romantis sekali.", "arrogant"],
            ["Rifki", "Rendy!", "shy"],
            ["Rendy", "Jangan khawatir. Aku tidak akan mengganggu malam ini.", "arrogant"],
            ["Rendy", "Tapi ingat, festival akan berakhir. Dan kenyataan akan kembali menyakitkan.", "arrogant"],
            ["Sinta", "Pergi, Rendy.", "cool"],
            ["Rendy", "Sampai jumpai di medan perang, Rifki.", "arrogant"],
            ["narrator", "Rendy pergi. Tapi ancamannya menggantung di udara."]
          ],
          choices: [
            { text: "Abaikan Rendy", next: "6-1", stat: { love: 5, courage: 5 } },
            { text: "Tantang balik", next: "6-1", stat: { courage: 10, reputation: 5 } }
          ]
        }
      ]
    },
    {
      id: 6, title: "Malam Hujan",
      scenes: [
        {
          id: "6-1", bg: IMAGES.bg_rain, chars: ["Rifki"],
          diag: [
            ["narrator", "Hujan deras turun malam itu. Rifki berdiri di halte sekolah, menunggu hujan reda."],
            ["Rifki", "Aku lupa bawa payung...", "shy"],
            ["narrator", "Tiba-tiba, seseorang berdiri di sampingnya. Sinta. Memegang payung besar."],
            ["Sinta", "Kamu akan kedinginan.", "cool"]
          ],
          choices: [
            { text: "Terima payungnya", next: "6-2", stat: { love: 5, trust: 5 } },
            { text: "Tolak dan lari ke hujan", next: "6-3", stat: { courage: 5, love: 0 } }
          ]
        },
        {
          id: "6-2", bg: IMAGES.bg_rain, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Mereka berjalan di bawah satu payung. Hujan menciptakan dinding suara di sekitar mereka."],
            ["Sinta", "Rifki. Aku ingin mengatakan sesuatu.", "cool"],
            ["Rifki", "Apa?", "shy"],
            ["Sinta", "Aku... aku takut kehilanganmu.", "cool"],
            ["Sinta", "Semakin dekat kita, semakin aku takut. Masa laluku berbahaya.", "cool"],
            ["Rifki", "Aku tidak akan pergi. Apapun yang terjadi.", "shy"]
          ],
          choices: [
            { text: "Peluk dia di tengah hujan", next: "6-4", stat: { love: 20, trust: 15 } },
            { text: "Janjikan kesetiaan", next: "6-4", stat: { love: 15, trust: 15 } },
            { text: "Tanyakan masa lalunya", next: "6-5", stat: { love: 5, trust: 10 } }
          ]
        },
        {
          id: "6-3", bg: IMAGES.bg_rain, chars: ["Rifki"],
          diag: [
            ["Rifki", "Aku tidak apa-apa! Aku suka hujan!", "shy"],
            ["narrator", "Rifki berlari ke hujan. Tapi dia terpeleset di genangan air."],
            ["Sinta", "Rifki!", "cool"],
            ["narrator", "Sinta berlari mengejar. Mereka berdua basah kuyup di tengah jalan."],
            ["Sinta", "Kamu... sangat bodoh.", "cool"],
            ["Rifki", "Maaf...", "shy"],
            ["Sinta", "Tapi aku suka bodohmu.", "cool"]
          ],
          choices: [
            { text: "Tertawa bersama", next: "6-4", stat: { love: 10, trust: 10 } }
          ]
        },
        {
          id: "6-4", bg: IMAGES.bg_rain, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Di bawah hujan, mereka saling berpelukan."],
            ["Sinta", "Rifki. Aku jatuh cinta padamu.", "cool"],
            ["Rifki", "...", "shy"],
            ["Rifki", "Aku juga. Sejak hari pertama.", "shy"],
            ["narrator", "Mereka berciuman di bawah hujan. Cinta pertama yang manis dan pahit."],
            ["narrator", "Tapi di kejauhan, seseorang memotret mereka dari mobil hitam."]
          ],
          choices: [
            { text: "Lanjutkan malam itu", next: "6-6", stat: { love: 20, trust: 10 } }
          ]
        },
        {
          id: "6-5", bg: IMAGES.bg_rain, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Masa lalu apa yang membuatmu takut?", "shy"],
            ["Sinta", "Ayahku. Dia adalah bos mafia yang ingin aku meneruskan bisnisnya.", "cool"],
            ["Sinta", "Aku kabur dan menyembunyikan identitasku. Tapi dia menemukanku.", "cool"],
            ["Rifki", "Dia di kota ini?", "shy"],
            ["Sinta", "Dia yang membiayai Wolf. Rendy bekerja untuknya.", "cool"],
            ["Rifki", "Kita akan hadapi bersama.", "shy"]
          ],
          choices: [
            { text: "Janji lindungi dia", next: "6-6", stat: { love: 10, courage: 15, trust: 10 } }
          ]
        },
        {
          id: "6-6", bg: IMAGES.bg_park, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Mereka berteduh di gazebo taman. Sinta menggigil kedinginan."],
            ["Rifki", "Kamu hipotermia. Aku harus hangatkan kamu.", "shy"],
            ["Sinta", "Cara apa?", "cool"],
            ["narrator", "Rifki melepas jaketnya dan membalutkan pada Sinta. Dia memegang tangan Sinta erat-erat."],
            ["Sinta", "Kamu selalu tahu cara membuatku merasa aman.", "cool"],
            ["Rifki", "Karena aku ada di sini untukmu.", "shy"]
          ],
          choices: [
            { text: "Buka chat misterius", next: "7-1", stat: { love: 5, trust: 5 } }
          ]
        }
      ]
    },
    {
      id: 7, title: "Masa Lalu Sinta",
      scenes: [
        {
          id: "7-1", bg: IMAGES.bg_room, chars: ["Rifki"],
          diag: [
            ["narrator", "Rifki membuka pesan misterius lagi."],
            ["narrator", "\"Kamu ingin tahu siapa aku? Datang ke rumah sakit jiwa kota. Lantai 3. - A\""],
            ["Rifki", "Rumah sakit jiwa? Siapa A ini sebenarnya...", "shy"],
            ["narrator", "Keesokan harinya, Rifki memutuskan untuk pergi sendirian."]
          ],
          choices: [
            { text: "Pergi sendiri", next: "7-2", stat: { courage: 10, trust: -5 } },
            { text: "Bawa Sinta", next: "7-3", stat: { trust: 10, love: 5 } },
            { text: "Bawa Rama", next: "7-4", stat: { friendship: 5, courage: 5 } }
          ]
        },
        {
          id: "7-2", bg: IMAGES.bg_hospital, chars: ["Rifki", "Arya"],
          diag: [
            ["narrator", "Rumah sakit jiwa yang suram. Rifki berjalan di koridor yang sepi."],
            ["Arya", "Kamu datang sendirian. Berani.", "mysterious"],
            ["Rifki", "Kamu! Jadi A itu Arya!", "shy"],
            ["Arya", "Bukan cuma Arya. Aku adalah Arya Wijaya. Adik Sinta.", "mysterious"],
            ["Rifki", "Adik?! Tapi Sinta bilang dia anak tunggal!", "shy"],
            ["Arya", "Dia membohongi semua orang. Termasuk dirinya sendiri. Aku ditaruh di sini oleh ayah kami.", "mysterious"],
            ["narrator", "Arya menunjukkan bekas luka bakar di tangannya."]
          ],
          choices: [
            { text: "Peluk Arya", next: "7-5", stat: { trust: 15, secret_arya: true } },
            { text: "Tanyakan seluruh kebenaran", next: "7-5", stat: { trust: 10, secret_arya: true } }
          ]
        },
        {
          id: "7-3", bg: IMAGES.bg_hospital, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["Sinta", "Arya?!", "cool"],
            ["Arya", "Kakak...", "mysterious"],
            ["narrator", "Sinta membeku. Air mata mengalir di pipinya."],
            ["Sinta", "Maafkan aku. Aku meninggalkanmu. Aku pengecut.", "cool"],
            ["Arya", "Tidak. Aku yang harus minta maaf. Aku tidak cukup kuat untuk kabur bersamamu.", "mysterious"],
            ["Rifki", "Kalian... bersaudara.", "shy"],
            ["narrator", "Sinta menjelaskan bahwa Arya ditaruh di RSJ karena menolak ikut ayahnya. Sinta kabur dan menyembunyikan identitasnya."]
          ],
          choices: [
            { text: "Bantu reuni mereka", next: "7-6", stat: { love: 15, trust: 20, secret_arya: true } }
          ]
        },
        {
          id: "7-4", bg: IMAGES.bg_hospital, chars: ["Rifki", "Rama", "Arya"],
          diag: [
            ["Rama", "Tempat ini serem banget, bro.", "funny"],
            ["Arya", "Kamu membawa teman. Pintar.", "mysterious"],
            ["Rifki", "Arya. Siapa kamu sebenarnya?", "shy"],
            ["Arya", "Aku adalah bayangan masa lalu Sinta. Adiknya yang dilupakan.", "mysterious"],
            ["Rama", "Adiknya?!", "funny"],
            ["narrator", "Arya menceritakan segalanya. Rama terdiam, tidak percaya."]
          ],
          choices: [
            { text: "Rencanakan sesuatu", next: "7-6", stat: { trust: 10, secret_arya: true } }
          ]
        },
        {
          id: "7-5", bg: IMAGES.bg_hospital, chars: ["Rifki", "Arya"],
          diag: [
            ["Arya", "Ayah kami adalah Hideo Wijaya. Bos sindikat kriminal terbesar.", "mysterious"],
            ["Arya", "Dia ingin Sinta meneruskan bisnisnya. Sinta menolak dan kabur.", "mysterious"],
            ["Arya", "Aku mencoba mengikutinya tapi tertangkap. Ditaruh di sini selama 3 tahun.", "mysterious"],
            ["Rifki", "Tiga tahun... sendirian...", "shy"],
            ["Arya", "Tapi aku punya jaringan intel. Aku tahu semua rencana Wolf. Dan aku akan bantu Sinta.", "mysterious"],
            ["Rifki", "Aku akan bantu juga.", "shy"]
          ],
          choices: [
            { text: "Bawa Arya keluar dari sini", next: "7-6", stat: { courage: 15, trust: 15, secret_arya: true } }
          ]
        },
        {
          id: "7-6", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya", "Dinda"],
          diag: [
            ["Dinda", "Arya... adik Sinta... wow. Ini seperti drama!", "cheerful"],
            ["Sinta", "Ini bukan drama, Dinda. Ini nyata. Dan berbahaya.", "cool"],
            ["Arya", "Ayah kita tahu lokasi Scarlet sekarang. Serangan akan terjadi dalam 48 jam.", "mysterious"],
            ["Rifki", "Kita harus siap.", "shy"],
            ["Sinta", "Rifki. Aku... aku tidak mau kamu terluka karena aku.", "cool"],
            ["Rifki", "Aku memilih untuk ada di sini. Untukmu. Untuk Scarlet.", "shy"]
          ],
          choices: [
            { text: "Rencanakan strategi", next: "8-1", stat: { courage: 10, trust: 10, reputation: 10 } },
            { text: "Peluk Sinta", next: "8-1", stat: { love: 15, trust: 10 } }
          ]
        }
      ]
    },
    {
      id: 8, title: "Pengkhianatan",
      scenes: [
        {
          id: "8-1", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["narrator", "Malam sebelum serangan. Scarlet bersiap untuk pertempuran terbesar mereka."],
            ["Arya", "Wolf akan datang dari utara. Rendy memimpin langsung.", "mysterious"],
            ["Sinta", "Kita akan bertahan. Tidak ada yang boleh terluka.", "cool"],
            ["narrator", "Tiba-tiba, alarm berbunyi. Bukan dari utara. Dari dalam."],
            ["Dinda", "Sinta! Ada yang membuka pintu belakang!", "cheerful"],
            ["Sinta", "Pengkhianat...", "cool"]
          ],
          choices: [
            { text: "Cari pengkhianat", next: "8-2", stat: { courage: 10 } },
            { text: "Lindungi Sinta", next: "8-3", stat: { love: 10, courage: 5 } }
          ]
        },
        {
          id: "8-2", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Arya"],
          diag: [
            ["Arya", "Komputer utama diakses dari dalam. Siapa yang punya akses?", "mysterious"],
            ["Rifki", "Hanya... aku, Sinta, Dinda, dan...", "shy"],
            ["Arya", "Dan?", "mysterious"],
            ["Rifki", "Rama. Tapi dia bukan anggota resmi!", "shy"],
            ["narrator", "Rifki mengecek kamera. Terlihat Rama sedang berbicara dengan seseorang di telepon."],
            ["Rifki", "Tidak... Rama...", "shy"]
          ],
          choices: [
            { text: "Konfrontasi Rama", next: "8-4", stat: { courage: 15, friendship: -20 } },
            { text: "Buktikan dulu", next: "8-5", stat: { trust: 5, courage: 5 } }
          ]
        },
        {
          id: "8-3", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Sinta! Aku di sini!", "shy"],
            ["Sinta", "Rifki! Awas!", "cool"],
            ["narrator", "Seorang anggota Wolf menyerang dari belakang. Rifki mendorong Sinta dan menerima pukulan itu."],
            ["Rifki", "Argh!", "shy"],
            ["Sinta", "Rifki!!!", "cool"],
            ["narrator", "Rifki jatuh. Darah mengalir dari dahinya."],
            ["Sinta", "Jangan mati! Jangan tinggalkan aku!", "cool"]
          ],
          choices: [
            { text: "Buka mata", next: "8-6", stat: { love: 20, courage: 15, tragic_flag: true } }
          ]
        },
        {
          id: "8-4", bg: IMAGES.bg_street, chars: ["Rifki", "Rama"],
          diag: [
            ["Rifki", "Rama. Kamu yang membuka pintu?", "shy"],
            ["Rama", "...", "funny"],
            ["Rama", "Bro... aku dipaksa. Ayah Sinta tangkap adikku. Aku harus pilih.", "funny"],
            ["Rifki", "Kamu... mengkhianati kita?", "shy"],
            ["Rama", "Aku tidak punya pilihan! Maafkan aku, Rifki!", "funny"],
            ["narrator", "Rama menangis. Rifki mengepalkan tangan."]
          ],
          choices: [
            { text: "Maafkan Rama", next: "8-7", stat: { friendship: 10, trust: 10 } },
            { text: "Pukul Rama", next: "8-8", stat: { friendship: -30, courage: 10 } },
            { text: "Bantu selamatkan adiknya", next: "8-7", stat: { friendship: 20, courage: 15, trust: 15 } }
          ]
        },
        {
          id: "8-5", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Sinta. Aku menemukan sesuatu. Tapi aku butuh waktu.", "shy"],
            ["Sinta", "Aku percaya instingmu. Lakukan apa yang harus dilakukan.", "cool"],
            ["narrator", "Rifki berhasil menyadap telepon Rama. Dia benar. Rama diancam."],
            ["Rifki", "Rama tidak pengkhianat. Dia korban.", "shy"],
            ["Sinta", "Kalau begitu... kita selamatkan dia dan adiknya.", "cool"]
          ],
          choices: [
            { text: "Rencanakan penyelamatan", next: "8-9", stat: { trust: 15, friendship: 15 } }
          ]
        },
        {
          id: "8-6", bg: IMAGES.bg_hospital, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Rifki terbangun di rumah sakit. Sinta menangis di sampingnya."],
            ["Sinta", "Kamu idiot. Kamu hampir mati.", "cool"],
            ["Rifki", "Tapi kamu... aman.", "shy"],
            ["Sinta", "Jangan pernah lakukan itu lagi. Aku tidak bisa hidup tanpamu.", "cool"],
            ["Rifki", "Aku janji...", "shy"],
            ["narrator", "Ciuman lembut di dahi Rifki. Cinta mereka semakin dalam."]
          ],
          choices: [
            { text: "Pulihkan diri", next: "9-1", stat: { love: 20, trust: 15 } }
          ]
        },
        {
          id: "8-7", bg: IMAGES.bg_street, chars: ["Rifki", "Rama", "Sinta"],
          diag: [
            ["Rama", "Lu... maafin gue?", "funny"],
            ["Rifki", "Kita sahabat. Sahabat saling membantu.", "shy"],
            ["Sinta", "Aku akan bantu selamatkan adikmu. Scarlet tidak meninggalkan teman.", "cool"],
            ["Rama", "Terima kasih... terima kasih...", "funny"],
            ["narrator", "Rama menangis terharu. Persahabatan mereka teruji dan semakin kuat."]
          ],
          choices: [
            { text: "Lanjutkan rencana", next: "9-1", stat: { friendship: 20, trust: 15 } }
          ]
        },
        {
          id: "8-8", bg: IMAGES.bg_street, chars: ["Rifki", "Rama"],
          diag: [
            ["narrator", "Rifki melayangkan pukulan. Rama terduduk."],
            ["Rifki", "Itu untuk pengkhianatanmu!", "shy"],
            ["Rama", "Gue paham. Gue pantas dapat ini.", "funny"],
            ["narrator", "Tapi Rifki menyesal segera. Dia membantu Rama berdiri."],
            ["Rifki", "Aku marah. Tapi aku tidak bisa kehilangan sahabatku.", "shy"],
            ["Rama", "Rifki...", "funny"]
          ],
          choices: [
            { text: "Perbaiki hubungan", next: "9-1", stat: { friendship: 10, courage: 5 } }
          ]
        },
        {
          id: "8-9", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya", "Rama"],
          diag: [
            ["Arya", "Aku tahu lokasi adik Rama. Disandera di gudang nomor 7.", "mysterious"],
            ["Sinta", "Kita serang malam ini.", "cool"],
            ["Rama", "Gue ikut. Gue harus perbaiki kesalahan gue.", "funny"],
            ["Rifki", "Kita pergi bersama. Sebagai Scarlet.", "shy"],
            ["narrator", "Persatuan yang rapuh, tapi kuat."]
          ],
          choices: [
            { text: "Serang gudang", next: "9-1", stat: { courage: 15, reputation: 15 } }
          ]
        }
      ]
    },
    {
      id: 9, title: "Konflik Besar",
      scenes: [
        {
          id: "9-1", bg: IMAGES.bg_wolf, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["Rendy", "Akhirnya. Pertarungan yang kutunggu.", "arrogant"],
            ["Sinta", "Rendy. Aku tahu ayahku yang membayarmu. Tapi ini antara kita berdua.", "cool"],
            ["Rendy", "Salah. Ini antara Wolf dan Scarlet. Dan Rifki... pilih sisi.", "arrogant"],
            ["Rifki", "Aku sudah pilih. Aku di sisi Sinta. Selamanya.", "shy"],
            ["Rendy", "Sayang sekali. Aku suka potensimu.", "arrogant"]
          ],
          choices: [
            { text: "Tantang Rendy adu satu lawan satu", next: "9-2", stat: { courage: 20, reputation: 10 } },
            { text: "Serang bersama Sinta", next: "9-3", stat: { love: 10, courage: 15 } },
            { text: "Coba negosiasi", next: "9-4", stat: { trust: 10, courage: 5 } }
          ]
        },
        {
          id: "9-2", bg: IMAGES.bg_wolf, chars: ["Rifki", "Rendy"],
          diag: [
            ["narrator", "Rifki melawan Rendy satu lawan satu. Tinju demi tinju."],
            ["Rendy", "Kamu lebih kuat dari yang kukira!", "arrogant"],
            ["Rifki", "Aku berlatih untuk melindungi yang kucintai!", "shy"],
            ["narrator", "Rifki terjatuh berkali-kali. Tapi dia bangkit terus."],
            ["Rendy", "Kenapa bangkit terus?!", "arrogant"],
            ["Rifki", "Karena aku punya sesuatu yang pantas diperjuangkan!", "shy"]
          ],
          choices: [
            { text: "Serang dengan tekad terakhir", next: "9-5", stat: { courage: 25, love: 10 } }
          ]
        },
        {
          id: "9-3", bg: IMAGES.bg_wolf, chars: ["Rifki", "Sinta", "Rendy"],
          diag: [
            ["Sinta", "Rifki, sekarang!", "cool"],
            ["narrator", "Rifki dan Sinta menyerang bersama. Kombinasi sempurna."],
            ["Rendy", "Argh! Kalian berdua?!", "arrogant"],
            ["narrator", "Rendy terpojok. Tapi dia tersenyum sinis."],
            ["Rendy", "Ayahmu sudah di sekolah, Sinta. Dia ambil adikmu.", "arrogant"],
            ["Sinta", "Apa?!", "cool"]
          ],
          choices: [
            { text: "Kejar ke sekolah", next: "9-6", stat: { love: 15, courage: 20 } }
          ]
        },
        {
          id: "9-4", bg: IMAGES.bg_wolf, chars: ["Rifki", "Rendy"],
          diag: [
            ["Rifki", "Rendy. Kamu tidak harus lakukan ini.", "shy"],
            ["Rendy", "Dia membayar hutang keluargaku. Aku terjebak.", "arrogant"],
            ["Rifki", "Aku bisa bantu. Scarlet bisa bantu.", "shy"],
            ["Rendy", "...", "arrogant"],
            ["Rendy", "Mengapa kamu baik padaku? Aku musuhmu.", "arrogant"],
            ["Rifki", "Karena aku tahu rasanya terjebak.", "shy"]
          ],
          choices: [
            { text: "Ajak Rendy bergabung", next: "9-7", stat: { trust: 20, reputation: 20, wolf_path: true } },
            { text: "Biarkan dia pergi", next: "9-5", stat: { courage: 10 } }
          ]
        },
        {
          id: "9-5", bg: IMAGES.bg_wolf, chars: ["Rifki", "Rendy"],
          diag: [
            ["narrator", "Rifki mengumpulkan seluruh kekuatannya. Satu pukulan terakhir."],
            ["Rendy", "Ugh!", "arrogant"],
            ["narrator", "Rendy jatuh. Tapi dia tersenyum."],
            ["Rendy", "Kamu menang. Tapi ingat... kemenangan selalu punya harga.", "arrogant"],
            ["narrator", "Rendy pingsan. Rifki berdiri dengan napas terengah."]
          ],
          choices: [
            { text: "Ke sekolah", next: "9-6", stat: { courage: 15, reputation: 15 } }
          ]
        },
        {
          id: "9-6", bg: IMAGES.bg_gate, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["Arya", "Ayah sudah di dalam. Dia bawa banyak orang.", "mysterious"],
            ["Sinta", "Arya. Kamu harus tahu. Aku tidak pernah meninggalkanmu karena aku tidak mencintaimu.", "cool"],
            ["Arya", "Aku tahu. Sekarang, ayo kita hadapi dia bersama. Sebagai keluarga.", "mysterious"],
            ["Rifki", "Sebagai keluarga.", "shy"],
            ["narrator", "Mereka berlari ke dalam. Konfrontasi terakhir menanti."]
          ],
          choices: [
            { text: "Hadapi ayah Sinta", next: "9-8", stat: { courage: 20, love: 10 } }
          ]
        },
        {
          id: "9-7", bg: IMAGES.bg_wolf, chars: ["Rifki", "Rendy", "Sinta"],
          diag: [
            ["Rendy", "Kamu... mengajakku bergabung?", "arrogant"],
            ["Sinta", "Rifki. Apa kamu yakin?", "cool"],
            ["Rifki", "Semua orang berhak mendapat kesempatan kedua.", "shy"],
            ["Rendy", "...", "arrogant"],
            ["Rendy", "Baiklah. Aku akan bantu kalian. Tapi hanya untuk kali ini.", "arrogant"],
            ["narrator", "Rendy berdiri. Aliansi yang tidak mungkin terjadi."]
          ],
          choices: [
            { text: "Lanjutkan ke sekolah", next: "9-6", stat: { reputation: 20, trust: 15 } }
          ]
        },
        {
          id: "9-8", bg: IMAGES.bg_class, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["narrator", "Di kelas yang kosong, seorang pria berjas hitam berdiri dengan dua bodyguard."],
            ["Hideo", "Sinta. Akhirnya kamu datang juga.", "none"],
            ["Sinta", "Ayah. Lepaskan adikku. Ini antara kita.", "cool"],
            ["Hideo", "Tidak. Aku datang untuk membawamu pulang. Dan menghancurkan Scarlet.", "none"],
            ["Rifki", "Tuan. Sinta punya hak memilih hidupnya sendiri.", "shy"],
            ["Hideo", "Siapa bocah ini? Pacarmu? Haha. Kamu turunannya rendah, Sinta.", "none"],
            ["Sinta", "Jangan hina dia!", "cool"]
          ],
          choices: [
            { text: "Hadapi Hideo dengan tenang", next: "9-9", stat: { courage: 20, trust: 10 } },
            { text: "Serang Hideo", next: "9-10", stat: { courage: 25, love: 5 } },
            { text: "Panggil polisi", next: "9-11", stat: { reputation: 20, courage: 10 } }
          ]
        },
        {
          id: "9-9", bg: IMAGES.bg_class, chars: ["Rifki", "Sinta", "Hideo"],
          diag: [
            ["Rifki", "Tuan. Sinta bukan milik siapapun. Dia adalah individu yang bebas.", "shy"],
            ["Rifki", "Cinta saya padanya mungkin tidak sempurna. Tapi saya akan selalu melindunginya.", "shy"],
            ["Hideo", "...", "none"],
            ["Hideo", "Kamu punya nyali. Tapi nyali saja tidak cukup.", "none"],
            ["narrator", "Hideo mengangkat tangan. Bodyguard siap menyerang."]
          ],
          choices: [
            { text: "Lindungi Sinta", next: "10-1", stat: { love: 20, courage: 20 } }
          ]
        },
        {
          id: "9-10", bg: IMAGES.bg_class, chars: ["Rifki", "Hideo"],
          diag: [
            ["narrator", "Rifki menyerang Hideo. Tapi bodyguard menghalangi."],
            ["Rifki", "Argh!", "shy"],
            ["Sinta", "Rifki!!!", "cool"],
            ["narrator", "Rifki terpental. Tapi dia bangkit lagi."],
            ["Hideo", "Anak ini gila. Sinta, lihat apa yang kamu pilih.", "none"]
          ],
          choices: [
            { text: "Bangkit lagi", next: "10-1", stat: { courage: 25, tragic_flag: true } }
          ]
        },
        {
          id: "9-11", bg: IMAGES.bg_class, chars: ["Rifki", "Sinta", "Hideo"],
          diag: [
            ["Rifki", "Polisi sudah di jalan. Rekaman semua kejahatanmu sudah kukirim.", "shy"],
            ["Hideo", "Apa?!", "none"],
            ["Sinta", "Rifki...", "cool"],
            ["Hideo", "Kamu... bocah licik.", "none"],
            ["narrator", "Sirene polisi terdengar. Hideo panik."],
            ["Hideo", "Ini belum berakhir!", "none"]
          ],
          choices: [
            { text: "Tahan Hideo", next: "10-1", stat: { reputation: 25, courage: 15 } }
          ]
        }
      ]
    },
    {
      id: 10, title: "Pilihan Terakhir",
      scenes: [
        {
          id: "10-1", bg: IMAGES.bg_class, chars: ["Rifki", "Sinta", "Arya", "Hideo"],
          diag: [
            ["narrator", "Konfrontasi terakhir. Hideo terpojok."],
            ["Hideo", "Sinta. Pilih. Ikut ayahmu, atau tinggal dengan bocah ini dan hancurkan masa depanmu.", "none"],
            ["Sinta", "...", "cool"],
            ["Sinta", "Aku sudah memilih. Aku memilih kebebasan. Aku memilih cinta. Aku memilih Rifki.", "cool"],
            ["narrator", "Hideo tertawa getir."],
            ["Hideo", "Kalau begitu... kamu bukan anakku lagi.", "none"],
            ["narrator", "Hideo pergi dengan bodyguardnya. Polisi mengejar."]
          ],
          choices: [
            { text: "Peluk Sinta", next: "10-2", stat: { love: 20, trust: 20 } },
            { text: "Tanyakan perasaannya", next: "10-2", stat: { love: 15, trust: 15 } }
          ]
        },
        {
          id: "10-2", bg: IMAGES.bg_park, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Seminggu setelah kejadian itu. Musim semi hampir berakhir."],
            ["Sinta", "Rifki. Ayahku sudah ditangkap. Arya aman. Scarlet aman.", "cool"],
            ["Rifki", "Dan kamu?", "shy"],
            ["Sinta", "Aku... bebas. Untuk pertama kalinya.", "cool"],
            ["narrator", "Sinta menatap Rifki. Matanya berkaca-kaca."],
            ["Sinta", "Tapi aku punya keputusan besar. Aku diterima beasiswa ke luar negeri.", "cool"],
            ["Rifki", "Luar negeri...", "shy"],
            ["Sinta", "Aku tidak mau pergi tanpa kamu. Tapi aku juga tidak mau menahanmu.", "cool"]
          ],
          choices: [
            { text: "Ikut dengannya", next: "10-3", stat: { love: 20, courage: 20 } },
            { text: "Dukung dari jauh", next: "10-4", stat: { love: 15, trust: 15 } },
            { text: "Mintalah dia tinggal", next: "10-5", stat: { love: 10, trust: 5 } }
          ]
        },
        {
          id: "10-3", bg: IMAGES.bg_airport, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "Bandara. Sinta akan berangkat besok."],
            ["Rifki", "Aku sudah daftar universitas di sana. Aku akan ikut.", "shy"],
            ["Sinta", "Kamu... rela meninggalkan semua?", "cool"],
            ["Rifki", "Semua tidak berarti tanpamu.", "shy"],
            ["narrator", "Sinta menangis bahagia. Mereka berpelukan di tengah keramaian bandara."]
          ],
          choices: [
            { text: "Akhiri cerita", next: "ENDING", ending: "happy" }
          ]
        },
        {
          id: "10-4", bg: IMAGES.bg_park, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Pergilah. Kejar mimpimu. Aku akan selalu menunggu di sini.", "shy"],
            ["Sinta", "Kamu yakin? Jarak itu berat.", "cool"],
            ["Rifki", "Cinta kita lebih kuat dari jarak.", "shy"],
            ["narrator", "Mereka berjanji untuk bertemu setiap liburan. Menjalin cinta jarak jauh."]
          ],
          choices: [
            { text: "Akhiri cerita", next: "ENDING", ending: "ldr" }
          ]
        },
        {
          id: "10-5", bg: IMAGES.bg_park, chars: ["Rifki", "Sinta"],
          diag: [
            ["Rifki", "Tinggal di sini. Bersamaku.", "shy"],
            ["Sinta", "Rifki... aku tidak bisa membuang kesempatan ini.", "cool"],
            ["Rifki", "Aku tahu. Aku egois.", "shy"],
            ["Sinta", "Tidak. Kamu hanya mencintaiku. Dan aku mencintaimu.", "cool"],
            ["narrator", "Sinta memutuskan untuk menunda setahun. Mereka menghabiskan waktu bersama."]
          ],
          choices: [
            { text: "Akhiri cerita", next: "ENDING", ending: "graduation" }
          ]
        }
      ]
    },
    {
      id: 11, title: "Rahasia Arya",
      scenes: [
        {
          id: "11-1", bg: IMAGES.bg_hospital, chars: ["Rifki", "Arya"],
          diag: [
            ["narrator", "Chapter Rahasia: Rahasia Arya."],
            ["Arya", "Kamu kembali. Aku tahu kamu akan kembali.", "mysterious"],
            ["Rifki", "Aku ingin mengenalmu lebih baik. Kamu adik Sinta.", "shy"],
            ["Arya", "Aku bukan hanya adiknya. Aku adalah bagian dari masa lalu yang ingin dia lupakan.", "mysterious"],
            ["Arya", "Tapi aku punya rahasia besar. Lebih besar dari yang kukatakan.", "mysterious"]
          ],
          choices: [
            { text: "Dengarkan rahasianya", next: "11-2", stat: { trust: 10, secret_arya: true } }
          ]
        },
        {
          id: "11-2", bg: IMAGES.bg_hospital, chars: ["Rifki", "Arya"],
          diag: [
            ["Arya", "Aku sebenarnya bukan pasien di sini. Aku menyamar.", "mysterious"],
            ["Arya", "Aku adalah agen undercover yang menyusup ke organisasi ayahku.", "mysterious"],
            ["Rifki", "Kamu... agen?!", "shy"],
            ["Arya", "Aku butuh seseorang yang bisa dipercaya untuk mengakses data di komputer Scarlet.", "mysterious"],
            ["Arya", "Data yang bisa menghancurkan sindikat ayahku selamanya.", "mysterious"]
          ],
          choices: [
            { text: "Bantu Arya", next: "11-3", stat: { trust: 15, courage: 10 } },
            { text: "Tanyakan izin Sinta", next: "11-4", stat: { trust: 5, love: 5 } }
          ]
        },
        {
          id: "11-3", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Arya"],
          diag: [
            ["narrator", "Rifki dan Arya berhasil mengakses data rahasia sindikat."],
            ["Arya", "Ini cukup untuk menangkap semua anggota tingkat atas.", "mysterious"],
            ["Arya", "Rifki. Terima kasih. Kamu telah menyelamatkan banyak nyawa.", "mysterious"],
            ["Rifki", "Aku hanya ingin kalian aman. Sinta dan kamu.", "shy"],
            ["Arya", "Kamu keluarga kami sekarang. Saudaraku.", "mysterious"]
          ],
          choices: [
            { text: "Akhiri chapter rahasia", next: "ENDING", ending: "secret_arya" }
          ]
        },
        {
          id: "11-4", bg: IMAGES.bg_scarlet, chars: ["Rifki", "Sinta", "Arya"],
          diag: [
            ["Sinta", "Arya... kamu agen?", "cool"],
            ["Arya", "Maaf kakak. Aku harus menyembunyikannya.", "mysterious"],
            ["Sinta", "Tidak perlu minta maaf. Aku bangga padamu.", "cool"],
            ["narrator", "Sinta dan Arya berpelukan. Rifki tersenyum melihatnya."]
          ],
          choices: [
            { text: "Akhiri chapter rahasia", next: "ENDING", ending: "secret_arya" }
          ]
        }
      ]
    },
    {
      id: 12, title: "True Route",
      scenes: [
        {
          id: "12-1", bg: IMAGES.bg_rooftop, chars: ["Rifki", "Sinta"],
          diag: [
            ["narrator", "True Route. Kondisi: Love, Trust, dan Courage maksimal."],
            ["Sinta", "Rifki. Aku ingin mengatakan sesuatu yang belum pernah kukatakan pada siapapun.", "cool"],
            ["Rifki", "Apa?", "shy"],
            ["Sinta", "Aku tidak percaya pada cinta sejati. Tapi kamu mengubah itu.", "cool"],
            ["Sinta", "Kamu melihatku saat aku paling buruk. Dan kamu tetap tinggal.", "cool"],
            ["Rifki", "Karena aku mencintaimu. Bukan versi sempurnamu. Tapi seluruh dirimu.", "shy"]
          ],
          choices: [
            { text: "Lanjutkan True Route", next: "12-2", stat: { love: 10, trust: 10 } }
          ]
        },
        {
          id: "12-2", bg: IMAGES.bg_park, chars: ["Rifki", "Sinta", "Arya", "Rama", "Dinda"],
          diag: [
            ["narrator", "Taman bunga sakura. Semua teman berkumpul."],
            ["Rama", "Bro, lu akhirnya jadi pahlawan sekolah!", "funny"],
            ["Dinda", "Dan pasangan paling romantis!", "cheerful"],
            ["Arya", "Keluarga kami berutang budi padamu.", "mysterious"],
            ["Sinta", "Rifki. Aku ingin memulai baru. Tanpa rahasia. Tanpa takut.", "cool"],
            ["Sinta", "Maukah kamu... menikah denganku suatu hari nanti?", "cool"],
            ["Rifki", "Sinta... ya. Seribu kali ya.", "shy"],
            ["narrator", "Di bawah pohon sakura, mereka berciuman. Cinta sejati yang melewati ujian api."]
          ],
          choices: [
            { text: "Akhiri True Route", next: "ENDING", ending: "true_love" }
          ]
        }
      ]
    }
  ]
};

// Mini Games Data
const MINIGAMES = {
  quiz: {
    title: "Tebak Pikiran Sinta",
    questions: [
      { q: "Apa warna favorit Sinta?", options: ["Merah", "Hitam", "Biru", "Pink"], correct: 1 },
      { q: "Apa makanan favorit Sinta?", options: ["Ramen", "Sushi", "Burger", "Pizza"], correct: 0 },
      { q: "Siapa idola Sinta?", options: ["Ayahnya", "Ibunya", "Rifki", "Dirinya sendiri"], correct: 1 },
      { q: "Apa ketakutan terbesar Sinta?", options: ["Kecoa", "Kehilangan", "Gagal", "Hantu"], correct: 1 },
      { q: "Apa yang membuat Sinta tersenyum?", options: ["Kekuasaan", "Keadilan", "Uang", "Popularitas"], correct: 1 }
    ]
  },
  memory: {
    title: "Memory Match",
    cards: ["🌸", "❤️", "🌙", "⭐", "🌸", "❤️", "🌙", "⭐", "🎀", "💎", "🎀", "💎"]
  }
};
