class BirthdayWebsite {
  constructor() {
    this.currentPage = 0;
    this.init();
  }

  init() {
    this.renderPage();
  }

  renderPage() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    switch (this.currentPage) {
      case 0:
        this.renderWelcome();
        break;
      case 1:
        this.renderGift();
        break;
      case 2:
        this.renderLoading();
        break;
      case 3:
        this.renderMemories();
        break;
      case 4:
        this.renderReasons();
        break;
      case 5:
        this.renderSong();
        break;
      case 6:
        this.renderHearts();
        break;
      case 7:
        this.renderLetter();
        break;
      case 8:
        this.renderFinale();
        break;
    }
  }

  renderWelcome() {
    const page = document.createElement('div');
    page.className = 'page welcome-page';
    
    const floatingHearts = document.createElement('div');
    floatingHearts.className = 'floating-hearts';
    
    for (let i = 0; i < 10; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.bottom = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 2 + 's';
      floatingHearts.appendChild(heart);
    }
    
    const content = document.createElement('div');
    content.className = 'welcome-content';
    
    const mainText = document.createElement('div');
    mainText.className = 'welcome-main';
    mainText.textContent = config.pages.welcome.mainText;
    
    const subText = document.createElement('div');
    subText.className = 'welcome-sub';
    subText.textContent = config.pages.welcome.subText;
    
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = config.pages.welcome.buttonText;
    button.onclick = () => this.nextPage();
    
    content.appendChild(mainText);
    content.appendChild(subText);
    content.appendChild(button);
    
    page.appendChild(floatingHearts);
    page.appendChild(content);
    
    document.getElementById('app').appendChild(page);
  }

  renderGift() {
    const page = document.createElement('div');
    page.className = 'page gift-page';
    
    const content = document.createElement('div');
    content.className = 'gift-content';
    
    const teddy = document.createElement('div');
    teddy.className = 'teddy';
    teddy.textContent = '🧸';
    
    const text = document.createElement('div');
    text.className = 'gift-text';
    text.textContent = config.pages.gift.text;
    
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    
    const yesBtn = document.createElement('button');
    yesBtn.className = 'btn btn-primary';
    yesBtn.textContent = config.pages.gift.yesButton;
    yesBtn.onclick = () => this.nextPage();
    
    const noBtn = document.createElement('button');
    noBtn.className = 'btn btn-no';
    noBtn.textContent = config.pages.gift.noButton;
    noBtn.onmouseover = () => this.moveButton(noBtn);
    noBtn.onclick = (e) => {
      e.preventDefault();
      this.moveButton(noBtn);
    };
    
    buttonGroup.appendChild(yesBtn);
    buttonGroup.appendChild(noBtn);
    
    content.appendChild(teddy);
    content.appendChild(text);
    content.appendChild(buttonGroup);
    
    page.appendChild(content);
    document.getElementById('app').appendChild(page);
  }

  moveButton(button) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  }

  renderLoading() {
    const page = document.createElement('div');
    page.className = 'page loading-page';
    
    const container = document.createElement('div');
    container.className = 'loading-container';
    
    const message = document.createElement('div');
    message.className = 'loading-message';
    message.textContent = config.pages.loading.messages[0];
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    
    progressBar.appendChild(progressFill);
    container.appendChild(message);
    container.appendChild(progressBar);
    page.appendChild(container);
    document.getElementById('app').appendChild(page);
    
    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex++;
      if (msgIndex < config.pages.loading.messages.length) {
        message.textContent = config.pages.loading.messages[msgIndex];
      } else {
        clearInterval(msgInterval);
        setTimeout(() => this.nextPage(), 500);
      }
    }, 2000);
  }

  renderMemories() {
    const page = document.createElement('div');
    page.className = 'page memories-page';
    
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.textContent = config.pages.memories.title;
    
    const grid = document.createElement('div');
    grid.className = 'polaroid-grid';
    
    config.pages.memories.polaroids.forEach((memory, index) => {
      const polaroid = document.createElement('div');
      polaroid.className = 'polaroid';
      
      const inner = document.createElement('div');
      inner.className = 'polaroid-inner';
      
      const front = document.createElement('div');
      front.className = 'polaroid-front';
      
      const img = document.createElement('img');
      img.className = 'polaroid-image';
      img.src = memory.image;
      img.alt = 'Memory photo';
      
      const note = document.createElement('div');
      note.className = 'polaroid-note';
      note.textContent = config.pages.memories.frontText;
      
      front.appendChild(img);
      front.appendChild(note);
      
      const back = document.createElement('div');
      back.className = 'polaroid-back';
      back.textContent = memory.message;
      
      inner.appendChild(front);
      inner.appendChild(back);
      polaroid.appendChild(inner);
      
      polaroid.onclick = () => polaroid.classList.toggle('flipped');
      
      grid.appendChild(polaroid);
    });
    
    page.appendChild(title);
    page.appendChild(grid);
    document.getElementById('app').appendChild(page);
  }

  renderReasons() {
    const page = document.createElement('div');
    page.className = 'page reasons-page';
    
    const title = document.createElement('h1');
    title.className = 'page-title';
    title.textContent = config.pages.reasons.title;
    
    const grid = document.createElement('div');
    grid.className = 'reasons-grid';
    
    config.pages.reasons.reasons.forEach((reason, index) => {
      const card = document.createElement('div');
      card.className = 'reason-card';
      
      const inner = document.createElement('div');
      inner.className = 'reason-inner';
      
      const front = document.createElement('div');
      front.className = 'reason-front';
      front.textContent = `❤️ Reason ${index + 1}`;
      
      const back = document.createElement('div');
      back.className = 'reason-back';
      back.textContent = reason;
      
      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);
      
      card.onclick = () => card.classList.toggle('flipped');
      
      grid.appendChild(card);
    });
    
    page.appendChild(title);
    page.appendChild(grid);
    document.getElementById('app').appendChild(page);
  }

  renderSong() {
    const page = document.createElement('div');
    page.className = 'page song-page';
    
    const content = document.createElement('div');
    content.className = 'song-content';
    
    const title = document.createElement('h1');
    title.className = 'song-title';
    title.textContent = config.pages.song.title;
    
    const subtitle = document.createElement('p');
    subtitle.className = 'song-subtitle';
    subtitle.textContent = config.pages.song.subtitle;
    
    const player = document.createElement('div');
    player.className = 'music-player';
    
    const iframe = document.createElement('iframe');
    iframe.src = config.pages.song.musicLink;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    player.appendChild(iframe);
    
    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(player);
    page.appendChild(content);
    document.getElementById('app').appendChild(page);
  }

  renderHearts() {
    const page = document.createElement('div');
    page.className = 'page hearts-page';
    
    const title = document.createElement('h1');
    title.className = 'page-title' ;
    title.style.position = 'absolute';
    title.style.top = '20px';
    title.textContent = config.pages.hearts.title;
    
    page.appendChild(title);
    
    const heartsFound = [];
    const positions = [
      { top: '20%', left: '10%' },
      { top: '70%', right: '15%' },
      { top: '50%', left: '50%' },
      { top: '10%', right: '20%' },
      { top: '80%', left: '5%' }
    ];
    
    positions.forEach((pos, index) => {
      const heart = document.createElement('div');
      heart.className = 'hidden-heart';
      heart.textContent = '💕';
      Object.assign(heart.style, pos);
      
      heart.onclick = (e) => {
        e.stopPropagation();
        heart.classList.add('found');
        heartsFound.push(index);
        
        if (heartsFound.length === 5) {
          const message = document.createElement('div');
          message.className = 'secret-message';
          message.textContent = config.pages.hearts.secretMessage;
          page.appendChild(message);
          
          setTimeout(() => this.nextPage(), 3000);
        }
      };
      
      page.appendChild(heart);
    });
    
    document.getElementById('app').appendChild(page);
  }

  renderLetter() {
    const page = document.createElement('div');
    page.className = 'page letter-page';
    
    const envelope = document.createElement('div');
    envelope.className = 'envelope';
    envelope.textContent = '💌';
    
    let opened = false;
    
    envelope.onclick = () => {
      if (!opened) {
        opened = true;
        const content = document.createElement('div');
        content.className = 'letter-content';
        content.innerHTML = config.pages.letter.content.replace(/\n/g, '<br>');
        
        page.removeChild(envelope);
        page.appendChild(content);
        
        setTimeout(() => this.nextPage(), 4000);
      }
    };
    
    page.appendChild(envelope);
    document.getElementById('app').appendChild(page);
  }

  renderFinale() {
    const page = document.createElement('div');
    page.className = 'page finale-page';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'finale-text';
    textDiv.textContent = 'One last surprise...';
    
    const giftBox = document.createElement('div');
    giftBox.className = 'gift-box';
    giftBox.textContent = '🎁';
    
    page.appendChild(textDiv);
    page.appendChild(giftBox);
    
    let clicked = false;
    giftBox.onclick = () => {
      if (!clicked) {
        clicked = true;
        this.createCelebration();
        
        const message = document.createElement('div');
        message.className = 'finale-message';
        message.innerHTML = config.pages.finale.message.replace(/\n/g, '<br>');
        
        page.appendChild(message);
        
        setTimeout(() => {
          message.classList.add('show');
        }, 100);
      }
    };
    
    document.getElementById('app').appendChild(page);
  }

  createCelebration() {
    // Confetti
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-10px';
      confetti.style.background = ['#ff69b4', '#ff1493', '#ffd1e8', '#ffb3d9'][Math.floor(Math.random() * 4)];
      confetti.style.animation = `float-up ${2 + Math.random() * 2}s ease-in forwards`;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
    
    // Balloons
    for (let i = 0; i < 8; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = Math.random() * window.innerWidth + 'px';
      balloon.style.bottom = '-50px';
      balloon.style.background = ['#ff69b4', '#ff1493', '#ffd1e8', '#ffe6ec'][Math.floor(Math.random() * 4)];
      balloon.style.animationDelay = Math.random() * 0.5 + 's';
      document.body.appendChild(balloon);
      
      setTimeout(() => balloon.remove(), 5000);
    }
  }

  nextPage() {
    if (this.currentPage < 8) {
      this.currentPage++;
      this.renderPage();
    }
  }
}

const website = new BirthdayWebsite();