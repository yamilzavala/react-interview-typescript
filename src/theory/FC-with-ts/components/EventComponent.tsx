import React, {useEffect, useRef} from 'react';

const EventComponent: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    },[])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }

    return (
        <div>
            <input ref={inputRef} onChange={handleChange}/>
            <div draggable onDragStart={handleDrag}>Drag me!</div>
        </div>
    );
};

export default EventComponent;