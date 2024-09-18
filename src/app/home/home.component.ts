import { Component, OnInit } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
