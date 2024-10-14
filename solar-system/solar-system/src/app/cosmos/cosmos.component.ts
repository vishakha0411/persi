import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CosmosService } from '../shared/service/cosmos.service';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-cosmos',
  standalone: true,
  imports: [NgFor, DescriptionComponent, NgIf],
  templateUrl: './cosmos.component.html',
  styleUrl: './cosmos.component.css',
})
export class CosmosComponent {
  planets?: any;

  constructor(private router: Router, private cosmosService: CosmosService) {
    cosmosService.getData().subscribe((d:any) => (this.planets = d));
  }

  selectedPlanet: any;

  onDetailPlanet(p: any) {
    this.selectedPlanet = p;
  }

  onBackToHome() {
    this.router.navigate(['/home']);
  }
}

