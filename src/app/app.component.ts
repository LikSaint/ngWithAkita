import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroesService} from './stores/heroes/service';
import {HeroesQueries} from './stores/heroes/query';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.heroesQueries.selectCount();
  cannotAddNewHero$ = this.count$.pipe(map(count => count >= 10));
  updatedAt$ = this.heroesQueries.selectUpdatedAt();
  heroesList$ = this.heroesQueries.selectAll();

  constructor(
    private heroesService: HeroesService,
    private heroesQueries: HeroesQueries,
  ) {
  }

  public addHero(): void {
    this.heroesService.addHero();
  }

  public deleteHero(hero: Hero): void {
    this.heroesService.delete(hero.id);
  }

  public clear(): void {
    this.heroesService.clear();
  }
}
