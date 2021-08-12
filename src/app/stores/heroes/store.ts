import {action, EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Hero} from '../../hero';
import {Injectable} from '@angular/core';

export interface HeroesState extends EntityState<Hero>{
  updatedAt: number;
}

@Injectable({ providedIn: 'root'})
@StoreConfig({ name: 'heroes/list', resettable: true, idKey: 'id' })
export class HeroesStore extends EntityStore<HeroesState, Hero> {
  constructor() {
    super();
  }

  @action('Update at refresh')
  public updatedAtRefresh(): void {
    this.update({ updatedAt: Date.now() });
  }
}
