import { DECREMENT_ACTIVE, DECREMENT_ARCHIVED, INCREMENT_ACTIVE, INCREMENT_ARCHIVED } from "./types";

export const incrementActive = (category: string) => ({
    type: INCREMENT_ACTIVE,
    payload: category,
});

export const incrementArchived = (category: string) => ({
    type: INCREMENT_ARCHIVED,
    payload: category,
});

export const decrementActive = (category: string) => ({
    type: DECREMENT_ACTIVE,
    payload: category,
});

export const decrementArchived = (category: string) => ({
    type: DECREMENT_ARCHIVED,
    payload: category,
});