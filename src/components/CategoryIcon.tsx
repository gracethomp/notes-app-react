import taskIcon from "../assets/task.svg"
import randomThoughtIcon from "../assets/randomThought.svg"
import ideaIcon from "../assets/idea.svg"

interface CategoryIconProps {
    category: string,
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    function setIcon() {
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

    const icon = setIcon();

    return (
        <span className='category-icon'>
            <img src={icon} alt={category + " icon"} />
        </span>
    );

}