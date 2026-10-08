'use client';
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ margin: "16px 0" }}>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
        </div>
    );
}
