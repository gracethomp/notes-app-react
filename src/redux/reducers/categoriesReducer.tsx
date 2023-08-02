import { Category } from "../../types/Category";
import { ADD_NOTE, ARCHIVE_NOTE, EDIT_NOTE, UNARCHIVE_NOTE } from "../actions/types";

const initialState: Category[] = [
    {
        category: "Task",
        active: 3,
        archived: 0,
    },
    {
        category: "Random Thought",
        active: 1,
        archived: 1,
    },
    {
        category: "Idea",
        active: 2,
        archived: 0,
    },
];

const categoriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            return state.map((category) => (category.category === action.payload.category ? { ...category, active: category.active + 1 } : category));
        case EDIT_NOTE:
            return state.map((category) => (category.category === action.payload.category ? { ...category, active: category.active + 1 } : category));
        case ARCHIVE_NOTE:
            return state.map((category) => (category.category === action.payload.category ? { ...category, archived: category.archived + 1, active: category.active - 1 } : category));
        case UNARCHIVE_NOTE:
            return state.map((category) => (category.category === action.payload.category ? { ...category, active: category.active + 1, archived: category.archived - 1 } : category));
        default:
            return state;
    }
}

export default categoriesReducer;