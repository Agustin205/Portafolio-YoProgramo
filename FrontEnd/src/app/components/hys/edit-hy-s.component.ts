import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HyS } from 'src/app/Model/hy-s';
import { SHySService } from 'src/app/service/s-hy-s.service';

@Component({
  selector: 'app-edit-hy-s',
  templateUrl: './edit-hy-s.component.html',
  styleUrls: ['./edit-hy-s.component.css']
})
export class EditHySComponent implements OnInit {
  hys:HyS=null;

  constructor(private sHySService:SHySService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sHySService.detail(id).subscribe(data=>{this.hys=data},err =>{alert("Error al modificar skill");this.router.navigate(['']);})
  }

  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sHySService.update(id,this.hys).subscribe(data=>{this.router.navigate(['']);},err=>{alert("Error al modificar skill");this.router.navigate(['']);})
   }

}
