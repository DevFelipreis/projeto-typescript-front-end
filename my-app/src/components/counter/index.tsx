import React, { useState } from 'react';
import "./styles.css";

type Props = {
    title: string;
    initialValue?: number;
}

function Counter({ title, initialValue }: Props) {
    const [count, setCount] = useState(initialValue || 0);

    function handleChanceValue(value: number) {
        const newValue = count + (value);

        if (newValue <= 0) {
            return;
        }

        setCount(newValue);
    }

    return (
        <div className="container-counter">
            <h1>{title}</h1>

            <div className='content-counter'>

                <h2>Contagem Atual: {count}</h2>
                <button onClick={() => handleChanceValue(1)}>
                    Incrementar
                </button>
                <button onClick={() => handleChanceValue(-1)}>
                    Decrementar
                </button >
            </div>
        </div >
    );
}

export default Counter;
