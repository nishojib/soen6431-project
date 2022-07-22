import { useState } from 'react';

export default function useCommentForm(value){

    const [val, setVal] = useState(value);
    return [val, setVal];
}