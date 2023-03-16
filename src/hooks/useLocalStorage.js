import {useEffect, useState} from "react";

export function useLocalStorage(initialKey) {
    const [key, setKey] = useState(initialKey)

    function setItem(newValue) {
        window.localStorage.setItem(key, newValue);
    }

    function removeItem() {
        window.localStorage.removeItem(key);
    }

    useEffect(() => {
        setKey(initialKey)
    }, [initialKey]);

    return [window.localStorage.getItem(key), {
        setItem,
        removeItem
    }]
}