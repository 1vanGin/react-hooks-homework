import React from "react";
import {useFetch} from "./hooks/useFetch";

export function FetchHook() {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <>
            <div className="fetch-container">
                {isLoading && 'Загрузка...'}
                {error && 'Произошла ошибка'}
                {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
            </div>
            <div>
                <button onClick={() => refetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить
                </button>
            </div>
        </>
    )
}