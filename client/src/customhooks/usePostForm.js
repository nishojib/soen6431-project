import { useState } from 'react';

export default function usePostForm(value){
    const [text, setText] = useState(value);

    return [text, setText];
}