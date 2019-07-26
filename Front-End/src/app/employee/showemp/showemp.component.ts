import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from 'src/app/empservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {

  constructor(private empservice:EmpserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
     
}
