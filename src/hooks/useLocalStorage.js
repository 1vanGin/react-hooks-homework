import {useEffect, useState} from "react";

export function useLocalStorage(initialKey) {
    const [key, setKey] = useState(initialKey)
    const [value, setValue] = useState(window.localStorage.getItem(key));

    function setItem(newValue) {
        setValue(newValue)
        window.localStorage.setItem(key, newValue);
    }

    function removeItem() {
        setValue(null)
        window.localStorage.removeItem(key);
    }

    useEffect(() => {
        setKey(initialKey)
    }, [initialKey]);

    return [value, {
        setItem,
        removeItem
    }]
}