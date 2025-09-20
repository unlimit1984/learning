import { Component, inject, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  navItems: { path: string; title: string }[] = [];
  router = inject(Router);

  ngOnInit(): void {
    this.navItems = this.router.config
      .filter((r: Route) => r.path && r.data && r.data['title'])
      .map((r) => ({ path: `/${r.path}`, title: r.data!['title'] }));
  }
}
