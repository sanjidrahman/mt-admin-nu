import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService, IUserModel } from '../../services/app.service';

interface Product {
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {

  subscribe = new Subscription()
  users: IUserModel[] = []
  selectedUsers: any[] = [];

  constructor(
    private _service: AppService,
  ) { }


  ngOnInit(): void {
    this.subscribe.add(
      this._service.users().subscribe({
        next: (res) => {
          this.users = res
        },
        error: (err) => {
          console.log(err);
          
        }
      })
    )
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.users.forEach(u => {
      u.selected = isChecked;
    });
    this.updateSelectedProducts();
  }

  onSelect(product: any) {
    this.updateSelectedProducts();
  }

  private updateSelectedProducts() {
    this.selectedUsers = this.users.filter(u => u.selected);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe
  }

}
