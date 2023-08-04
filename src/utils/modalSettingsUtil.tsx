export const setModalTitle = (actionType: string) => {
    return actionType + " Note";
}

export const setModalText = (actionType: string) => {
    const lowerCaseAction = actionType.toLowerCase();
    return (lowerCaseAction === "edit" || lowerCaseAction === "add") ? "Fill all fields to " + lowerCaseAction + " note" :
        "Are you sure you want to " + lowerCaseAction + " this note?";
}

export const setHasForm = (actionType: string) => {
    const lowerCaseAction = actionType.toLowerCase();
    return (lowerCaseAction === "edit" || lowerCaseAction === "add") ? true : false;
}
