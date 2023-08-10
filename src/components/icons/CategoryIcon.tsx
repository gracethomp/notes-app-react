import React from "react";
import taskIcon from "../../assets/task.svg"
import randomThoughtIcon from "../../assets/randomThought.svg"
import ideaIcon from "../../assets/idea.svg"

interface CategoryIconProps {
    category: string,
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
    const setIcon = () => {
        switch (category) {
            case "Task":
                return taskIcon;
            case "Random Thought":
                return randomThoughtIcon;
            case "Idea":
                return ideaIcon;
            default:
                return "";
        }
    }

    return (
        <span>
            <img src={setIcon()} alt={category + " icon"} />
        </span>
    );

}