import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

interface JobRecommendation {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  jobType: string;
  description: string;
  matchScore: number;
  postedDate: string;
}

@Component({

  
  selector: 'app-recommendation',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
    templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'

})
export class RecommendationComponent {
  sortOptions = ['Top Matched', 'Most Recent', 'Highest Match Score'];
  selectedSort = 'Top Matched';
  searchQuery = '';

  recommendations: JobRecommendation[] = [
    {
      id: 1,
      title: 'Back end developer',
      company: 'Oracle / Data Governance - Data Management',
      logo: 'assets/company-logos/oracle.png',
      location: 'USA',
      jobType: 'Full-Time',
      description: 'Join our team as a Backend Developer to build scalable and efficient server-side applications using Java, Spring Boot, and cloud technologies.',
      matchScore: 93,
      postedDate: 'Posted 2 days ago'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Google / User Experience Team',
      logo: 'assets/company-logos/google.png',
      location: 'Remote',
      jobType: 'Full-Time',
      description: 'Create responsive and interactive web applications using modern JavaScript frameworks like React and Angular.',
      matchScore: 91,
      postedDate: 'Posted 1 day ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'Amazon / Cloud Infrastructure',
      logo: 'assets/company-logos/amazon.png',
      location: 'Seattle, WA',
      jobType: 'Full-Time',
      description: 'Build and maintain CI/CD pipelines, manage cloud infrastructure, and optimize deployment processes.',
      matchScore: 88,
      postedDate: 'Posted 3 days ago'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Microsoft / AI Research',
      logo: 'assets/company-logos/microsoft.png',
      location: 'Redmond, WA',
      jobType: 'Full-Time',
      description: 'Apply machine learning algorithms to solve complex business problems and develop innovative AI solutions.',
      matchScore: 85,
      postedDate: 'Posted 1 week ago'
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      company: 'Apple / Product Design',
      logo: 'assets/company-logos/apple.png',
      location: 'Cupertino, CA',
      jobType: 'Full-Time',
      description: 'Create intuitive and visually appealing user interfaces for our next generation of products.',
      matchScore: 82,
      postedDate: 'Posted 5 days ago'
    },
    {
      id: 6,
      title: 'Mobile Developer',
      company: 'Meta / Instagram Team',
      logo: 'assets/company-logos/meta.png',
      location: 'Menlo Park, CA',
      jobType: 'Full-Time',
      description: 'Develop and maintain mobile applications for iOS and Android platforms using React Native.',
      matchScore: 79,
      postedDate: 'Posted 1 week ago'
    },
    {
      id: 7,
      title: 'Cloud Architect',
      company: 'IBM / Cloud Services',
      logo: 'assets/company-logos/ibm.png',
      location: 'Remote',
      jobType: 'Contract',
      description: 'Design and implement cloud-based solutions using AWS, Azure, or Google Cloud Platform.',
      matchScore: 76,
      postedDate: 'Posted 2 weeks ago'
    },
    {
      id: 8,
      title: 'Product Manager',
      company: 'Salesforce / CRM Solutions',
      logo: 'assets/company-logos/salesforce.png',
      location: 'San Francisco, CA',
      jobType: 'Full-Time',
      description: 'Lead product development initiatives, gather requirements, and coordinate with engineering teams.',
      matchScore: 73,
      postedDate: 'Posted 3 days ago'
    },
    {
      id: 9,
      title: 'QA Engineer',
      company: 'Netflix / Quality Assurance',
      logo: 'assets/company-logos/netflix.png',
      location: 'Los Gatos, CA',
      jobType: 'Full-Time',
      description: 'Develop and execute test plans, identify bugs, and ensure high-quality software releases.',
      matchScore: 70,
      postedDate: 'Posted 4 days ago'
    },
    {
      id: 10,
      title: 'Cybersecurity Analyst',
      company: 'Intel / Security Operations',
      logo: 'assets/company-logos/intel.png',
      location: 'Santa Clara, CA',
      jobType: 'Full-Time',
      description: 'Monitor security systems, respond to incidents, and implement security measures to protect company assets.',
      matchScore: 68,
      postedDate: 'Posted 1 week ago'
    }
  ];

  getMatchScoreClass(score: number): string {
    if (score >= 90) return 'strong-match';
    if (score >= 75) return 'good-match';
    return 'fair-match';
  }
  
  getMatchText(score: number): string {
    if (score >= 90) return 'STRONG MATCH';
    if (score >= 75) return 'GOOD MATCH';
    return 'FAIR MATCH';
  }
}
