import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HyS } from 'src/app/Model/hy-s';
import { SHySService } from 'src/app/service/s-hy-s.service';

@Component({
  selector: 'app-new-hy-s',
  templateUrl: './new-hy-s.component.html',
  styleUrls: ['./new-hy-s.component.css']
})
export class NewHySComponent implements OnInit {
  nombreHyS:string='';
  imgHyS:string='';
  porcentajeHyS :string='';

  constructor(private sHyS:SHySService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hys = new HyS(this.nombreHyS,this.imgHyS,this.porcentajeHyS);
    this.sHyS.save(hys).subscribe(data=>{alert("Skill añadida");this.router.navigate(['']);},err =>{alert("Fallo");this.router.navigate(['']);})
  }

}
