export interface Note {
    id: number,
    name: string,
    timeOfCreation: string,
    noteCategory: string,
    noteContent: string,
    datesMentioned: string[],
    archived: boolean,
  }