import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
  
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  private fullText = 'Full-Stack Developer passionate about creating beautiful, functional digital experiences.';
  private typingInterval: any;
  private cursorInterval: any;
  showCursor = true;
  cursorSymbol = '|';

  ngOnInit() {
    this.startTyping();
    this.startCursorBlink();
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  }

  private startTyping() {
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 50);
  }

  private startCursorBlink() {
    this.cursorInterval = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }

  onMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const image = container.querySelector('.profile-image') as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    image.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
  }

  onMouseLeave() {
    const container = document.querySelector('.profile-image') as HTMLElement;
    if (container) {
      container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
  }

  downloadResume() {
    window.open('https://drive.google.com/file/d/1ayLeLxL-EbTSZr57BEn0XwLdLBNWSSkf/view?usp=drive_link', '_blank');
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}