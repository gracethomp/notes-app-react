import { Category } from "../../types/Category";
import { DECREMENT_ACTIVE, DECREMENT_ARCHIVED, INCREMENT_ACTIVE, INCREMENT_ARCHIVED } from "../actions/types";

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
        case INCREMENT_ACTIVE:
            return state.map((category) => (category.category === action.payload ? { ...category, active: category.active + 1 } : category));
        case INCREMENT_ARCHIVED:
            return state.map((category) => (category.category === action.payload ? { ...category, archived: category.archived + 1 } : category));
        case DECREMENT_ACTIVE:
            return state.map((category) => (category.category === action.payload ? { ...category, active: category.active - 1 } : category));
        case DECREMENT_ARCHIVED:
            return state.map((category) => (category.category === action.payload ? { ...category, archived: category.archived - 1 } : category));
        default:
            return state;
    }
}

export default categoriesReducer;