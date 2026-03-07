import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
  category: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedFilter: string = 'all';
  
  filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Featured', value: 'featured' },
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'JavaScript', value: 'javascript' }
  ];

  projects: Project[] = [
    {
      title: 'Budget Planner Website',
      description: 'Developed with Angular.js, this responsive website calculates income, expenses, and total income. Features user authentication and real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['HTML', 'SCSS', 'Angular.js', 'Firebase'],
      liveLink: 'https://angular-project-ftyx.vercel.app/budget-planner/login',
      githubLink: 'https://github.com/sedik-khaled/angular-project',
      featured: true,
      category: ['angular', 'featured']
    },
    {
      title: 'Modern Furniture Website',
      description: 'Fully responsive e-commerce platform with shopping cart functionality, product filtering, and smooth animations.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveLink: 'https://sedik-khaled.github.io/furnitbypure/',
      githubLink: 'https://github.com/sedik-khaled/furnitbypure',
      featured: false,
      category: ['javascript']
    },
    {
      title: 'Angular Portfolio',
      description: 'Modern portfolio website built with Angular 16, featuring smooth animations, responsive design, and contact form integration.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
      technologies: ['Angular 16', 'TypeScript', 'SCSS', 'Vercel'],
      liveLink: 'https://portofolio-coral-nine.vercel.app',
      githubLink: 'https://github.com/sedik-khaled/portofolio',
      featured: true,
      category: ['angular', 'featured']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application built with React.js and Redux, including product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1588&q=80',
      technologies: ['HTML', 'CSS', 'React.js', 'Redux', 'Bootstrap'],
      liveLink: 'https://react-e-commerce-update2.vercel.app/',
      githubLink: 'https://github.com/sedik-khaled/react-e-commerce',
      featured: true,
      category: ['react', 'featured']
    },
    {
      title: 'Modern Login System',
      description: 'Secure and responsive login page with form validation, animations, and user authentication simulation.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://sedik-khaled.github.io/loginpage/',
      githubLink: 'https://github.com/sedik-khaled/loginpage',
      featured: false,
      category: ['javascript']
    }
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.category.includes(this.selectedFilter)
    );
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
  }
}