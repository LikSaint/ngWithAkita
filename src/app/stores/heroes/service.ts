import {Injectable} from '@angular/core';
import {HeroesApi} from '../../heroesApi';
import {HeroesStore} from './store';

@Injectable({ providedIn: 'root'})
export class HeroesService {
  constructor(
    private heroesApi: HeroesApi,
    private store: HeroesStore,
  ) {
  }

  public addHero(): void {
    const newHero = this.heroesApi.getNewHero();
    if (newHero) {
      this.store.updatedAtRefresh();
      this.store.add(newHero);
    }
  }

  public delete(id: number): void {
    this.heroesApi.refreshHero(id);
    this.store.updatedAtRefresh();
    this.store.remove(id);
  }

  public clear(): void {
    this.heroesApi.clearList();
    this.store.reset();
  }
}
