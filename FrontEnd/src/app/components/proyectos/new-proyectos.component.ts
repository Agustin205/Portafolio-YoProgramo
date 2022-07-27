import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP :string='';
  descripcionP:string='';
  imgP:string='';

  constructor(private sProyectos:SProyectosService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyectos(this.nombreP,this.descripcionP,this.imgP);
    this.sProyectos.save(proy).subscribe(data=>{alert("Proyectos añadidos");this.router.navigate(['']);},err =>{alert("Fallo");this.router.navigate(['']);})
  }

}
