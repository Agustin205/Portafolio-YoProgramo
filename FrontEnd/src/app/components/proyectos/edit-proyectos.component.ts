import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proy:Proyectos=null;

  constructor(private sProyectosService:SProyectosService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sProyectosService.detail(id).subscribe(data=>{this.proy=data},err =>{alert("Error al modificar proyectos");this.router.navigate(['']);})
  }

  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id']; 
    this.sProyectosService.update(id,this.proy).subscribe(data=>{this.router.navigate(['']);},err=>{alert("Error al modificar proyectos");this.router.navigate(['']);})
   }

}
