export interface Note {
    id: number,
    name: string,
    timeOfCreation: string,
    category: string,
    noteContent: string,
    datesMentioned: string[],
    archived: boolean,
  }