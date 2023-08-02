import eraser from "../img/trash.svg"

export default function CategoryIcon() {
    return(
        <span className='category-icon'>
            <img src={eraser} alt={eraser} />
        </span>
    );
    
}