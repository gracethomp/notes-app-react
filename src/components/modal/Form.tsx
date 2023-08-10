import { ChangeEvent } from "react";
import { Note } from "../../types/Note";

interface FormProps {
    note : Note;
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Form : React.FC<FormProps> = ({ note, handleNameChange, handleCategoryChange, handleContentChange }) =>  {
    return (<>
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    placeholder="Note Name"
                    name="price"
                    id="price"
                    value={note.name}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleNameChange}
                />
            </div>
        </div>
        <div className='relative mt-2 rounded-md shadow-sm'>
            <select className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-label="Default select" onChange={handleCategoryChange} value={note.category}>
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
        </div>

        <div className="relative mt-2 rounded-md shadow-sm">
            <textarea className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                placeholder="Content" value={note.noteContent} onChange={handleContentChange}>{note.noteContent}</textarea>
        </div>
    </>)
}