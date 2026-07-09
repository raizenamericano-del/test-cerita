class VisualNovelEngine {
  constructor() {
    this.state = {
      currentChapter: 1,
      currentScene: "1-1",
      stats: { love: 0, courage: 0, reputation: 0, trust: 0, friendship: 0 },
      flags: { scarlet_path: false, wolf_path: false, secret_arya: false, tragic_flag: false, broken_promise: false, true_route: false },
      gallery: new Set(),
      achievements: new Set(),
      endingsSeen: new Set(),
      history: [],
      settings: { bgm: 50, sfx: 70, textSpeed: 40, autoDelay: 2000, darkMode: false },
      auto: false,
      skip: false
    };
    this.typing = false;
    this.textQueue = [];
    this.currentDiagIndex = 0;
    this.bgm = document.getElementById('bgm');
    this.sfxClick = document.getElementById('sfx-click');
    this.sfxNotif = document.getElementById('sfx-notif');
    this.sfxAchievement = document.getElementById('sfx-achievement');
    this.sfxEnding = document.getElementById('sfx-ending');
    this.init();
  }

  init() {
    this.loadSettings();
    this.setupEventListeners();
    this.createSakura();
    this.checkAutoSave();
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      this.showScreen('main-menu');
      this.playBGM('https://files.freemusicarchive.org/storage-freemusicarchive.org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3');
    }, 2500);
  }

  setupEventListeners() {
    document.getElementById('dialogue-box').addEventListener('click', () => this.advanceDialogue());
    document.getElementById('bgm-vol').addEventListener('input', (e) => { this.state.settings.bgm = e.target.value; this.bgm.volume = e.target.value / 100; });
    document.getElementById('sfx-vol').addEventListener('input', (e) => this.state.settings.sfx = e.target.value);
    document.getElementById('text-speed').addEventListener('input', (e) => this.state.settings.textSpeed = parseInt(e.target.value));
    document.getElementById('auto-delay').addEventListener('input', (e) => this.state.settings.autoDelay = parseInt(e.target.value));
  }

  playBGM(url) {
    this.bgm.src = url;
    this.bgm.volume = this.state.settings.bgm / 100;
    this.bgm.play().catch(() => {});
  }

  playSFX(type) {
    const vol = this.state.settings.sfx / 100;
    let audio;
    if (type === 'click') audio = this.sfxClick;
    else if (type === 'notif') audio = this.sfxNotif;
    else if (type === 'achievement') audio = this.sfxAchievement;
    else if (type === 'ending') audio = this.sfxEnding;
    if (audio) { audio.volume = vol; audio.currentTime = 0; audio.play().catch(() => {}); }
  }

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'main-menu') this.createSakura();
  }

  newGame() {
    this.state.currentChapter = 1;
    this.state.currentScene = "1-1";
    this.state.stats = { love: 0, courage: 0, reputation: 0, trust: 0, friendship: 0 };
    this.state.flags = { scarlet_path: false, wolf_path: false, secret_arya: false, tragic_flag: false, broken_promise: false, true_route: false };
    this.state.history = [];
    this.playSFX('click');
    this.showScreen('game-screen');
    this.loadScene("1-1");
    this.unlockAchievement('first_meet');
  }

  continueGame() {
    const save = localStorage.getItem('vn_autosave');
    if (save) { this.loadGameData(JSON.parse(save)); this.showScreen('game-screen'); }
    else this.showNotification('Tidak ada save data');
  }

  loadScene(sceneId) {
    const scene = this.findScene(sceneId);
    if (!scene) return;
    this.currentSceneData = scene;
    this.currentDiagIndex = 0;
    this.state.currentScene = sceneId;
    this.state.history.push(sceneId);

    // Background
    const bg = document.getElementById('background-layer');
    bg.style.opacity = 0;
    setTimeout(() => { bg.style.backgroundImage = `url(${scene.bg})`; bg.style.opacity = 1; }, 300);

    // Characters
    document.querySelectorAll('.char-img').forEach(c => { c.classList.remove('visible'); c.classList.add('hidden'); });
    if (scene.chars) {
      scene.chars.forEach((char, i) => {
        const img = document.getElementById(i === 0 ? 'char-left' : i === 1 ? 'char-center' : 'char-right');
        if (img && CHARACTERS[char]) { img.src = CHARACTERS[char].img; img.classList.remove('hidden'); setTimeout(() => img.classList.add('visible'), 100); }
      });
    }

    // Effects
    this.applyEffects(sceneId);

    // Show stats
    document.getElementById('stat-bar').classList.remove('hidden');
    this.updateStats();

    // Start dialogue
    document.getElementById('choice-overlay').classList.add('hidden');
    this.showDialogue(0);
    this.autoSave();
  }

  findScene(id) {
    for (const ch of STORY.chapters) {
      const s = ch.scenes.find(x => x.id === id);
      if (s) return s;
    }
    return null;
  }

  showDialogue(index) {
    if (!this.currentSceneData || !this.currentSceneData.diag || index >= this.currentSceneData.diag.length) {
      this.showChoices();
      return;
    }
    this.currentDiagIndex = index;
    const [speaker, text, emotion] = this.currentSceneData.diag[index];
    const nameEl = document.getElementById('speaker-name');
    const textEl = document.getElementById('dialogue-text');

    if (speaker === 'narrator') { nameEl.textContent = ''; nameEl.style.display = 'none'; }
    else {
      const char = CHARACTERS[speaker];
      nameEl.style.display = 'inline-block';
      nameEl.textContent = char ? char.name : speaker;
      nameEl.style.color = char ? char.color : '#333';
      // Highlight character
      document.querySelectorAll('.char-img').forEach(c => c.style.filter = 'brightness(0.7)');
      const idx = this.currentSceneData.chars.indexOf(speaker);
      if (idx >= 0) {
        const img = document.getElementById(idx === 0 ? 'char-left' : idx === 1 ? 'char-center' : 'char-right');
        if (img) img.style.filter = 'brightness(1) drop-shadow(0 0 20px rgba(255,183,197,0.5))';
      }
    }

    this.typing = true;
    textEl.innerHTML = '';
    let i = 0;
    const speed = 55 - this.state.settings.textSpeed;
    const type = () => {
      if (i < text.length) {
        textEl.innerHTML += text.charAt(i);
        i++;
        if (i % 3 === 0) this.playSFX('click');
        this.typingTimer = setTimeout(type, Math.max(5, speed));
      } else {
        this.typing = false;
        if (this.state.auto) this.autoTimer = setTimeout(() => this.advanceDialogue(), this.state.settings.autoDelay);
      }
    };
    type();
  }

  advanceDialogue() {
    if (this.typing) {
      clearTimeout(this.typingTimer);
      const [speaker, text] = this.currentSceneData.diag[this.currentDiagIndex];
      document.getElementById('dialogue-text').innerHTML = text;
      this.typing = false;
      return;
    }
    this.showDialogue(this.currentDiagIndex + 1);
  }

  showChoices() {
    if (!this.currentSceneData.choices || this.currentSceneData.choices.length === 0) return;
    const overlay = document.getElementById('choice-overlay');
    overlay.innerHTML = '';
    overlay.classList.remove('hidden');
    this.currentSceneData.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.style.animationDelay = `${i * 0.1}s`;
      btn.textContent = c.text;
      btn.onclick = () => this.makeChoice(c);
      overlay.appendChild(btn);
    });
  }

  makeChoice(choice) {
    this.playSFX('click');
    document.getElementById('choice-overlay').classList.add('hidden');
    if (choice.stat) {
      for (const [k, v] of Object.entries(choice.stat)) {
        if (k === 'scarlet_path' || k === 'wolf_path' || k === 'secret_arya' || k === 'tragic_flag' || k === 'broken_promise' || k === 'true_route') {
          this.state.flags[k] = v === true || v > 0;
        } else {
          this.state.stats[k] = Math.min(100, Math.max(0, this.state.stats[k] + v));
        }
      }
      this.updateStats();
      this.checkStatAchievements();
    }
    if (choice.next === 'ENDING') {
      this.triggerEnding(choice.ending);
    } else if (choice.next && choice.next.startsWith('chat')) {
      this.openChat(choice.next.replace('chat:', ''));
    } else if (choice.next && choice.next.startsWith('minigame')) {
      this.startMinigame(choice.next.replace('minigame:', ''));
    } else {
      this.loadScene(choice.next);
    }
  }

  updateStats() {
    const s = this.state.stats;
    document.getElementById('stat-love').style.width = s.love + '%';
    document.getElementById('stat-courage').style.width = s.courage + '%';
    document.getElementById('stat-reputation').style.width = s.reputation + '%';
    document.getElementById('stat-trust').style.width = s.trust + '%';
    document.getElementById('stat-friendship').style.width = s.friendship + '%';
  }

  checkStatAchievements() {
    const s = this.state.stats;
    if (s.love >= 50) this.unlockAchievement('love_50');
    if (s.love >= 100) this.unlockAchievement('love_max');
    if (s.courage >= 50) this.unlockAchievement('courage_50');
    if (s.trust >= 50) this.unlockAchievement('trust_50');
    if (s.reputation >= 50) this.unlockAchievement('reputation_50');
    if (s.friendship >= 100) this.unlockAchievement('friendship_max');
    if (this.state.currentChapter >= 5) this.unlockAchievement('chapter_5');
    if (this.state.currentChapter >= 10) this.unlockAchievement('chapter_10');
    if (this.state.flags.secret_arya) this.unlockAchievement('secret_arya');
    if (this.state.flags.true_route) this.unlockAchievement('true_route');
  }

  triggerEnding(endingKey) {
    const ending = ENDINGS[endingKey];
    if (!ending) return;
    if (ending.condition && !ending.condition(this.state.stats)) {
      // Fallback to closest ending
      if (this.state.stats.love >= 70) endingKey = 'happy';
      else if (this.state.stats.friendship >= 70) endingKey = 'friend';
      else if (this.state.stats.love < 30 && this.state.stats.friendship < 30) endingKey = 'lonely';
      else endingKey = 'broken';
    }
    const finalEnding = ENDINGS[endingKey];
    this.state.endingsSeen.add(endingKey);
    this.unlockAchievement('first_' + endingKey);
    if (this.state.endingsSeen.size >= 12) this.unlockAchievement('all_endings');
    this.playSFX('ending');
    this.showScreen('ending-screen');
    document.getElementById('ending-title').textContent = finalEnding.title;
    document.getElementById('ending-desc').textContent = finalEnding.desc;
    document.getElementById('ending-img').src = finalEnding.img;
    this.state.gallery.add(finalEnding.img);
    this.autoSave();
  }

  toggleMenu() {
    const modal = document.getElementById('pause-menu');
    modal.classList.toggle('hidden');
  }

  returnToMenu() {
    this.toggleMenu();
    this.showScreen('main-menu');
  }

  backToGame() {
    this.showScreen('game-screen');
  }

  showSave() {
    this.toggleMenu();
    this.showScreen('save-screen');
    this.renderSlots('save');
  }

  showLoad() {
    this.showScreen('load-screen');
    this.renderSlots('load');
  }

  renderSlots(mode) {
    const grid = mode === 'save' ? document.getElementById('save-slots') : document.getElementById('load-slots');
    grid.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const key = `vn_save_${i}`;
      const data = localStorage.getItem(key);
      const slot = document.createElement('div');
      slot.className = 'save-slot' + (data ? '' : ' empty');
      if (data) {
        const parsed = JSON.parse(data);
        slot.innerHTML = `<div class="slot-date">${new Date(parsed.date).toLocaleString()}</div><div class="slot-chapter">Ch.${parsed.chapter} - ${parsed.scene}</div>`;
        slot.onclick = () => mode === 'save' ? this.saveToSlot(i) : this.loadFromSlot(i);
      } else {
        slot.innerHTML = `<div class="slot-chapter">Slot Kosong</div>`;
        if (mode === 'save') slot.onclick = () => this.saveToSlot(i);
      }
      grid.appendChild(slot);
    }
  }

  saveGame(slotIndex) {
    if (slotIndex === undefined) return this.showSave();
    this.saveToSlot(slotIndex);
  }

  saveToSlot(index) {
    const data = {
      date: Date.now(),
      chapter: this.state.currentChapter,
      scene: this.state.currentScene,
      stats: this.state.stats,
      flags: this.state.flags,
      gallery: Array.from(this.state.gallery),
      achievements: Array.from(this.state.achievements),
      endingsSeen: Array.from(this.state.endingsSeen),
      settings: this.state.settings
    };
    localStorage.setItem(`vn_save_${index}`, JSON.stringify(data));
    this.playSFX('click');
    this.showNotification('Game Saved!');
    this.renderSlots('save');
  }

  loadFromSlot(index) {
    const data = localStorage.getItem(`vn_save_${index}`);
    if (!data) return;
    this.loadGameData(JSON.parse(data));
    this.showNotification('Game Loaded!');
    this.showScreen('game-screen');
    this.loadScene(this.state.currentScene);
  }

  loadGameData(data) {
    this.state.currentChapter = data.chapter;
    this.state.currentScene = data.scene;
    this.state.stats = data.stats;
    this.state.flags = data.flags;
    this.state.gallery = new Set(data.gallery || []);
    this.state.achievements = new Set(data.achievements || []);
    this.state.endingsSeen = new Set(data.endingsSeen || []);
    if (data.settings) this.state.settings = data.settings;
  }

  autoSave() {
    const data = {
      date: Date.now(),
      chapter: this.state.currentChapter,
      scene: this.state.currentScene,
      stats: this.state.stats,
      flags: this.state.flags,
      gallery: Array.from(this.state.gallery),
      achievements: Array.from(this.state.achievements),
      endingsSeen: Array.from(this.state.endingsSeen),
      settings: this.state.settings
    };
    localStorage.setItem('vn_autosave', JSON.stringify(data));
    const ind = document.getElementById('auto-save-indicator');
    ind.classList.add('show');
    setTimeout(() => ind.classList.remove('show'), 2000);
  }

  checkAutoSave() {
    const save = localStorage.getItem('vn_autosave');
    if (save) {
      const data = JSON.parse(save);
      // Don't auto-load, just ensure it exists
    }
  }

  showGallery() {
    this.showScreen('gallery-screen');
    this.showGalleryTab('cg');
  }

  showGalleryTab(tab) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    let items = [];
    if (tab === 'cg') {
      items = Object.values(IMAGES).filter((_, i) => i > 15).map(url => ({ url, locked: !this.state.gallery.has(url) }));
    } else if (tab === 'char') {
      items = Object.values(CHARACTERS).map(c => ({ url: c.img, locked: false }));
    } else {
      items = Object.values(ENDINGS).map(e => ({ url: e.img, locked: !this.state.endingsSeen.has(e.title) }));
    }
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item' + (item.locked ? ' locked' : '');
      div.innerHTML = item.locked ? '' : `<img src="${item.url}" alt="">`;
      grid.appendChild(div);
    });
    if (this.state.gallery.size >= 10) this.unlockAchievement('cg_10');
    if (this.state.gallery.size >= 20) this.unlockAchievement('all_cg');
  }

  showAchievements() {
    this.showScreen('achievement-screen');
    const list = document.getElementById('achievement-list');
    list.innerHTML = '';
    ACHIEVEMENTS.forEach(ach => {
      const unlocked = this.state.achievements.has(ach.id);
      const div = document.createElement('div');
      div.className = 'achievement-item' + (unlocked ? ' unlocked' : '');
      div.innerHTML = `<span class="ach-icon">${ach.icon}</span><div class="ach-info"><div class="ach-title">${ach.title}</div><div class="ach-desc">${ach.desc}</div></div><span class="ach-status">${unlocked ? 'Unlocked' : 'Locked'}</span>`;
      list.appendChild(div);
    });
  }

  unlockAchievement(id) {
    if (this.state.achievements.has(id)) return;
    this.state.achievements.add(id);
    this.playSFX('achievement');
    this.showNotification(`Achievement: ${ACHIEVEMENTS.find(a => a.id === id)?.title || id}`);
  }

  showCodex() {
    this.showScreen('codex-screen');
    const grid = document.getElementById('codex-grid');
    grid.innerHTML = '';
    Object.values(CHARACTERS).forEach(char => {
      const div = document.createElement('div');
      div.className = 'codex-card';
      div.innerHTML = `<img src="${char.img}" alt=""><h3>${char.name}</h3><p>${char.bio}</p>`;
      grid.appendChild(div);
    });
  }

  showSettings() {
    this.showScreen('settings-screen');
  }

  toggleDarkMode() {
    this.state.settings.darkMode = !this.state.settings.darkMode;
    document.body.classList.toggle('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = this.state.settings.darkMode ? 'On' : 'Off';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }

  toggleAuto() {
    this.state.auto = !this.state.auto;
    this.showNotification(this.state.auto ? 'Auto Mode: ON' : 'Auto Mode: OFF');
  }

  toggleSkip() {
    this.state.skip = !this.state.skip;
    this.showNotification(this.state.skip ? 'Skip Mode: ON' : 'Skip Mode: OFF');
    if (this.state.skip) this.advanceDialogue();
  }

  showCredits() {
    this.showScreen('credits-screen');
  }

  showEndingCollection() {
    this.showGalleryTab('ending');
    this.showScreen('gallery-screen');
  }

  showNotification(text) {
    const notif = document.getElementById('notification');
    document.getElementById('notif-text').textContent = text;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
  }

  createSakura() {
    const container = document.getElementById('sakura-container');
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (3 + Math.random() * 5) + 's';
      petal.style.animationDelay = Math.random() * 5 + 's';
      petal.style.opacity = 0.3 + Math.random() * 0.7;
      container.appendChild(petal);
    }
  }

  createHearts() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart-particle';
      heart.textContent = '❤';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.bottom = '0';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }

  applyEffects(sceneId) {
    const rain = document.getElementById('rain-overlay');
    if (sceneId.includes('6-') || sceneId.includes('rain')) { rain.classList.remove('hidden'); this.playBGM('https://files.freemusicarchive.org/storage-freemusicarchive.org/music/no_curator/Kai_Engel/Satin/Kai_Engel_-_04_-_Sentinel.mp3'); }
    else { rain.classList.add('hidden'); }
    if (sceneId.includes('5-') || sceneId.includes('festival')) this.createHearts();
    if (sceneId.includes('kiss') || sceneId.includes('10-')) this.createHearts();
  }

  openChat(chatId) {
    const chat = CHAT_CONVERSATIONS.find(c => c.id === chatId);
    if (!chat) return;
    this.showScreen('chat-screen');
    document.getElementById('chat-name').textContent = chat.with;
    document.getElementById('chat-avatar').src = chat.avatar;
    const msgs = document.getElementById('chat-messages');
    msgs.innerHTML = '';
    let i = 0;
    const showNext = () => {
      if (i < chat.messages.length) {
        const m = chat.messages[i];
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${m.from === 'them' ? 'received' : 'sent'}`;
        bubble.textContent = m.text;
        msgs.appendChild(bubble);
        msgs.scrollTop = msgs.scrollHeight;
        this.playSFX('notif');
        i++;
        setTimeout(showNext, m.delay || 1000);
      } else {
        const opts = document.getElementById('chat-options');
        opts.innerHTML = '';
        document.getElementById('chat-input-area').classList.remove('hidden');
        chat.choices.forEach(c => {
          const btn = document.createElement('button');
          btn.className = 'chat-option-btn';
          btn.textContent = c.text;
          btn.onclick = () => {
            const reply = document.createElement('div');
            reply.className = 'chat-bubble sent';
            reply.textContent = c.text;
            msgs.appendChild(reply);
            if (c.love) this.state.stats.love = Math.min(100, this.state.stats.love + c.love);
            if (c.trust) this.state.stats.trust = Math.min(100, this.state.stats.trust + c.trust);
            if (c.friendship) this.state.stats.friendship = Math.min(100, this.state.stats.friendship + c.friendship);
            if (c.courage) this.state.stats.courage = Math.min(100, this.state.stats.courage + c.courage);
            this.updateStats();
            this.playSFX('click');
            document.getElementById('chat-input-area').classList.add('hidden');
            setTimeout(() => this.backToGame(), 1000);
          };
          opts.appendChild(btn);
        });
      }
    };
    showNext();
    this.unlockAchievement('chat_master');
  }

  startMinigame(type) {
    this.showScreen('minigame-screen');
    const container = document.getElementById('minigame-container');
    container.innerHTML = '';
    if (type === 'quiz') this.renderQuiz(container);
    else if (type === 'qte') this.renderQTE(container);
    else if (type === 'memory') this.renderMemory(container);
    else if (type === 'courage') this.renderCourage(container);
  }

  renderQuiz(container) {
    const quiz = MINIGAMES.quiz;
    let qIndex = 0, score = 0;
    const title = document.createElement('h2');
    title.textContent = quiz.title;
    container.appendChild(title);
    const qEl = document.createElement('div');
    qEl.style.fontSize = '1.2rem';
    qEl.style.marginBottom = '20px';
    container.appendChild(qEl);
    const optsDiv = document.createElement('div');
    optsDiv.style.display = 'flex';
    optsDiv.style.flexDirection = 'column';
    optsDiv.style.gap = '10px';
    container.appendChild(optsDiv);

    const showQ = () => {
      if (qIndex >= quiz.questions.length) {
        container.innerHTML = `<h2>Selesai!</h2><p>Score: ${score}/${quiz.questions.length}</p>`;
        if (score >= 4) { this.unlockAchievement('quiz_master'); this.state.stats.love += 10; }
        setTimeout(() => this.backToGame(), 2000);
        return;
      }
      const q = quiz.questions[qIndex];
      qEl.textContent = q.q;
      optsDiv.innerHTML = '';
      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = opt;
        btn.onclick = () => {
          if (i === q.correct) score++;
          qIndex++;
          showQ();
        };
        optsDiv.appendChild(btn);
      });
    };
    showQ();
  }

  renderQTE(container) {
    const title = document.createElement('h2');
    title.textContent = 'Quick Time Event!';
    container.appendChild(title);
    const btn = document.createElement('button');
    btn.className = 'qte-btn';
    btn.textContent = 'CLICK ME!';
    container.appendChild(btn);
    let timeLeft = 3;
    const timer = document.createElement('div');
    timer.style.fontSize = '2rem';
    timer.textContent = timeLeft;
    container.appendChild(timer);

    const interval = setInterval(() => {
      timeLeft--;
      timer.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(interval);
        container.innerHTML = '<h2>Gagal!</h2>';
        setTimeout(() => this.backToGame(), 1500);
      }
    }, 1000);

    btn.onclick = () => {
      clearInterval(interval);
      this.unlockAchievement('qte_master');
      this.state.stats.courage += 10;
      container.innerHTML = '<h2>Berhasil!</h2>';
      setTimeout(() => this.backToGame(), 1500);
    };
  }

  renderMemory(container) {
    const title = document.createElement('h2');
    title.textContent = MINIGAMES.memory.title;
    container.appendChild(title);
    const grid = document.createElement('div');
    grid.className = 'memory-grid';
    container.appendChild(grid);
    const cards = [...MINIGAMES.memory.cards].sort(() => Math.random() - 0.5);
    let flipped = [], matched = 0;
    cards.forEach((card, i) => {
      const div = document.createElement('div');
      div.className = 'memory-card';
      div.dataset.card = card;
      div.dataset.index = i;
      div.onclick = () => {
        if (flipped.length >= 2 || div.classList.contains('flipped') || div.classList.contains('matched')) return;
        div.classList.add('flipped');
        div.textContent = card;
        flipped.push(div);
        if (flipped.length === 2) {
          if (flipped[0].dataset.card === flipped[1].dataset.card) {
            flipped.forEach(f => f.classList.add('matched'));
            matched++;
            flipped = [];
            if (matched === cards.length / 2) {
              this.unlockAchievement('memory_master');
              this.state.stats.friendship += 10;
              setTimeout(() => { container.innerHTML = '<h2>Selesai!</h2>'; setTimeout(() => this.backToGame(), 1500); }, 500);
            }
          } else {
            setTimeout(() => { flipped.forEach(f => { f.classList.remove('flipped'); f.textContent = ''; }); flipped = []; }, 800);
          }
        }
      };
      grid.appendChild(div);
    });
  }

  renderCourage(container) {
    const title = document.createElement('h2');
    title.textContent = 'Courage Challenge!';
    container.appendChild(title);
    const desc = document.createElement('p');
    desc.textContent = 'Pilih dengan cepat!';
    container.appendChild(desc);
    const questions = [
      { q: "Sinta dalam bahaya! Apa yang kamu lakukan?", options: [{ t: "Lindungi dia!", c: true }, { t: "Lari cari bantuan", c: false }] },
      { q: "Rendy menantangmu! Reaksimu?", options: [{ t: "Terima tantangan!", c: true }, { t: "Mundur", c: false }] },
      { q: "Ayah Sinta mengancam! Apa jawabanmu?", options: [{ t: "Aku tidak takut!", c: true }, { t: "Diam", c: false }] }
    ];
    let idx = 0, correct = 0;
    const show = () => {
      if (idx >= questions.length) {
        container.innerHTML = `<h2>Selesai!</h2><p>Benar: ${correct}/${questions.length}</p>`;
        if (correct >= 2) { this.unlockAchievement('courage_challenge'); this.state.stats.courage += 15; }
        setTimeout(() => this.backToGame(), 2000);
        return;
      }
      container.innerHTML = '<h2>Courage Challenge!</h2>';
      const q = questions[idx];
      const p = document.createElement('p');
      p.textContent = q.q;
      container.appendChild(p);
      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = opt.t;
        btn.onclick = () => { if (opt.c) correct++; idx++; show(); };
        container.appendChild(btn);
      });
    };
    show();
  }

  loadSettings() {
    const saved = localStorage.getItem('vn_settings');
    if (saved) {
      const s = JSON.parse(saved);
      this.state.settings = { ...this.state.settings, ...s };
      if (s.darkMode) document.body.classList.add('dark-mode');
    }
    document.getElementById('bgm-vol').value = this.state.settings.bgm;
    document.getElementById('sfx-vol').value = this.state.settings.sfx;
    document.getElementById('text-speed').value = this.state.settings.textSpeed;
    document.getElementById('auto-delay').value = this.state.settings.autoDelay;
  }
}

const game = new VisualNovelEngine();
