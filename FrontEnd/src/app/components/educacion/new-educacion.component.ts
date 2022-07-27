import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd :string='';
  descripcionEd:string='';

  constructor(private sEducacion:SEducacionService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const educ = new Educacion(this.nombreEd,this.descripcionEd);
    this.sEducacion.save(educ).subscribe(data=>{alert("Educacion añadida");this.router.navigate(['']);},err =>{alert("Fallo");this.router.navigate(['']);})
  }

}
