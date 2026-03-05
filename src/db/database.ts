import Dexie, { type Table } from 'dexie';
import type { Project } from '../types/project';

export class StoryboardDB extends Dexie {
  projects!: Table<Project, string>;

  constructor() {
    super('storyboard-app');
    this.version(1).stores({
      projects: 'id, name, type, status, updatedAt',
    });
    // v2: Rename 'custom' type → 'brand-reveal' (custom is now freeform)
    this.version(2).stores({
      projects: 'id, name, type, status, updatedAt',
    }).upgrade(tx => {
      return tx.table('projects').toCollection().modify(project => {
        if (project.type === 'custom') {
          project.type = 'brand-reveal';
        }
      });
    });
  }
}

export const db = new StoryboardDB();
