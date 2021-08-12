import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {HeroesState, HeroesStore} from './store';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class HeroesQueries extends QueryEntity<HeroesState> {
  constructor(store: HeroesStore) {
    super(store);
  }

  public selectUpdatedAt(): Observable<number> {
    return this.select('updatedAt');
  }
}
