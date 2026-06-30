import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/Service';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [];

  constructor(private serviceApi: ServiceService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices() {
    this.serviceApi.getServices().subscribe(
      (data) => {
        this.services = data;
          console.log(data);
        console.log('Services Loaded:', data);
      },
      (error :any) => {
        console.error('Error loading services', error);
      }
    );
  }
}