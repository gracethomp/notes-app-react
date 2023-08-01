export interface Note {
    name: string,
    timeOfCreation: string,
    noteCategory: string,
    noteContent: string,
    datesMentioned: string[],
    archived: boolean,
  }