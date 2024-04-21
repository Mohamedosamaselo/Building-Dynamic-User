import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject, catchError, finalize } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss'],
})
export class UserslistComponent {
  isLoading = false;
  searchKey: number = 0;
  usersList: [] = [];
  total: number = 1;
  per_page: number = 6;
  currentPage: number = 0;
  maxSize: number = 5;
  page = 1;
  searchUser: any;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers(this.per_page, this.currentPage);
  }

  search(): void {
    if (this.searchKey) {
      this.getUserDetails(this.per_page, this.currentPage, this.searchKey);
    }
  }

  getUsers(per_page: number, pageIndex: number, id?: number): void {
    this.isLoading = true;
    pageIndex == 0
      ? (this.currentPage = 0)
      : (this.currentPage = this.currentPage);
    this.usersService.getUsers(pageIndex, per_page).subscribe((data: any) => {
      if (data) {
        this.usersList = data.data;
        this.total = this.usersList.length || 0;
        this.isLoading = false;
      }
    }),
      (error: any) => {
        console.error('error caught in component', error);
      };
  }
  getUserDetails(per_page: number, pageIndex: number, id: number): void {
    this.isLoading = true;

    pageIndex == 0
      ? (this.currentPage = 0)
      : (this.currentPage = this.currentPage);

    this.usersService
      .getUserDetails(pageIndex, per_page, id)
      .subscribe((data: any) => {
        if (data) {
          this.searchUser = data.data;
          this.isLoading = false;
        }
      }),
      (error: any) => {
        console.error('error caught in component', error);
      };
  }

  gotoDetails(event: number) {
    this.router.navigateByUrl('userDetails/' + event);
  }
  clearSearch() {
    this.searchKey = 0;
    this.searchUser = undefined;
    this.currentPage = this.page;
    this.getUsers(this.per_page, this.currentPage);
  }

  onPageChaged(event: any) {
    this.page = event;
    this.getUsers(this.per_page, this.page);
  }
}
