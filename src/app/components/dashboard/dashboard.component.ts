import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastUpdated!: Date;

  cards = [
    { title: '1385', subheading: 'Total Users', description: 'Count of total users the system' },
    { title: '133', subheading: 'Current Active Users', description: 'Count of current active users in the system' },
    { title: '17', subheading:'Current Active Users with blood report', description: 'Count of current active users with blood report in the system' },
    { title: '70', subheading:'Pending registrations B2C', description: 'B2C Users who have bought the product but not registered' },
    { title: '26', subheading:'Pending B2B registration users', description: 'B2B Users who have bought the product but not registered' },
    { title: '0', subheading:'Pending blood sample collection users', description: 'Users whose blood sample needs to be collected' },
    { title: '40', subheading: 'Users with Blood report not available', description: 'Users whose registration is done but blood report not in our system' },
    { title: '11', subheading: 'Users with Genetic report not available', description: 'Users whose sample is collected but genetic report not in our system' },
    { title: '0', subheading: 'Users genetic data not come vendor 28 days', description: 'Users genetic data not come vendor 28 days but sample is with the vendor' },
    { title: '15', subheading: 'Users with post-counselling not done', description: 'Users whose post-counselling is not done but genomic report is ready' },
    { title: '11', subheading: 'Users with no nutritionists allocated', description: 'Users for whom nutritionists have not be assigned' },
    { title: '6', subheading: 'Avg load of users on nutritionists', description: 'Assignment statistics for each nutritionists' },
  ];

  ngOnInit(): void {
   this.refreshData()
  }

  refreshData() {
    this.lastUpdated = new Date();
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
