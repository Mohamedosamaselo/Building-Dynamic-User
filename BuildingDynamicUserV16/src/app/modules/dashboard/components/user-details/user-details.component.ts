import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  total: number = 0;
  per_page: number = 6;
  currentPage: number = 0
  selectID :any
  user:any
  constructor(private usersService: UsersService, private activeroute:ActivatedRoute,private router:Router,) {}
  
   ngOnInit(): void {
    
    this.selectID = this.activeroute.snapshot.paramMap.get('id');
    this.getUserDetails(this.per_page ,this.currentPage,this.selectID)
  
  }

  getUserDetails(per_page:number , pageIndex:number ,id:number):void  {
    
    this.usersService.getUserDetails(pageIndex ,per_page,id ) .subscribe((data: any) => {
    if (data) {
       this.user = data.data
    }
  }
  ),
    (error:any) => {
      console.error('error caught in component', error)
    }

}

backButton(){
  this.router.navigateByUrl('');
}
}
