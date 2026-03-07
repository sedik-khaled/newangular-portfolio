import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5', level: 95, color: '#E44D26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90, color: '#264DE4' },
        { name: 'JavaScript', icon: 'fab fa-js', level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'fab fa-js', level: 80, color: '#007ACC' },
        { name: 'Angular', icon: 'fab fa-angular', level: 85, color: '#DD0031' },
        {
  name: 'RxJS',
  icon: 'fas fa-stream',
  level: 80,
  color: '#B7178C'
},
        { name: 'React', icon: 'fab fa-react', level: 80, color: '#61DAFB' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 90, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3', level: 85, color: '#06B6D4' }
      ]
    },
    {
      name: 'Backend & Database',
      skills: [
        { name: 'PHP', icon: 'fab fa-php', level: 75, color: '#777BB4' },
        { name: 'Laravel', icon: 'fab fa-laravel', level: 70, color: '#FF2D20' },
        { name: 'MySQL', icon: 'fas fa-database', level: 80, color: '#4479A1' },
        { name: 'Firebase', icon: 'fas fa-fire', level: 75, color: '#FFCA28' }
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'fab fa-git', level: 85, color: '#F05032' },
        { name: 'GitHub', icon: 'fab fa-github', level: 90, color: '#181717' },
        { name: 'Linux', icon: 'fab fa-linux', level: 70, color: '#FCC624' },
        { name: 'Postman', icon: 'fas fa-cloud', level: 80, color: '#FF6C37' },
        {
  name: 'Docker',
  icon: 'fab fa-docker',
  level: 70,
  color: '#2496ED'
},
        { name: 'Figma', icon: 'fab fa-figma', level: 75, color: '#F24E1E' },
        { name: 'Sass/SCSS', icon: 'fab fa-sass', level: 85, color: '#CC6699' }
      ]
    }
  ];

  ngOnInit() {
    // Initialize any animations or data fetching
  }

  animateSkill(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transform = 'scale(1.02)';
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 200);
  }
}