import { Note } from '../../types/Note';
import { getCurrentTime, getDatesFromString } from '../../utils/dateUtil';
import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE } from "../actions/types";


const initialState: Note[] = [
    {
        id: 1,
        name: "Shopping list",
        timeOfCreation: "April 20, 2021, 12:00",
        category: "Task",
        noteContent: "Tomatoes, Bread",
        datesMentioned: "",
        isArchived: false,
    },
    {
        id: 2,
        name: "The theory of evolution",
        timeOfCreation: "April 27, 2021, 14:30",
        category: "Random Thought",
        noteContent:
            "Life's journey is an unpredictable dance, where the steps we take shape the music we leave behind.",
        datesMentioned: "",
        isArchived: true,
    },
    {
        id: 3,
        name: "New feature",
        timeOfCreation: "May 5, 2021, 15:36",
        category: "Idea",
        noteContent: "Implement new feature (3/5/2021, 5/5/2021)",
        datesMentioned: "3/5/2021, 5/5/2021",
        isArchived: false,
    },
    {
        id: 4,
        name: "Sweet dream",
        timeOfCreation: "May 7, 2021, 17:54",
        category: "Random Thought",
        noteContent: "Had an interesting dream last night",
        datesMentioned: "",
        isArchived: false,
    },
    {
        id: 5,
        name: "Birthday gift",
        timeOfCreation: "May 15, 2021, 10:03",
        category: "Task",
        noteContent:
            "Grace has a birthday on 17/05/2021. Don't forget to buy a gift.",
        datesMentioned: "17/05/2021",
        isArchived: false,
    },
    {
        id: 6,
        name: "Trip",
        timeOfCreation: "May 17, 2021, 3:25",
        category: "Task",
        noteContent: "Plan a weekend trip",
        datesMentioned: "",
        isArchived: false,
    },
    {
        id: 7,
        name: "Pet-project",
        timeOfCreation: "July 21, 2021, 20:45",
        category: "Idea",
        noteContent: "Idea for a new project: Create a recipe sharing app",
        datesMentioned: "",
        isArchived: false,
    }
];

const notesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, { ...action.payload, timeOfCreation: getCurrentTime(), datesMentioned: getDatesFromString(action.payload.noteContent) }];
        case EDIT_NOTE:
            return state.map((note) => (note.id === action.payload.id ? { ...action.payload, datesMentioned: getDatesFromString(action.payload.noteContent) } : note));
        case REMOVE_NOTE:
            return state.filter((note) => note.id !== action.payload);
        case ARCHIVE_NOTE:
            return state.map((note) => (note.id === action.payload.id ? { ...note, isArchived: true } : note));
        case UNARCHIVE_NOTE:
            return state.map((note) => (note.id === action.payload.id ? { ...note, isArchived: false } : note));
        default:
            return state;
    }
};

export default notesReducer;
