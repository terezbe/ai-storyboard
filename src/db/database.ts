import Dexie, { type Table } from 'dexie';
import type { Project } from '../types/project';

export class StoryboardDB extends Dexie {
  projects!: Table<Project, string>;

  constructor() {
    super('storyboard-app');
    this.version(1).stores({
      projects: 'id, name, type, status, updatedAt',
    });
  }
}

export const db = new StoryboardDB();
