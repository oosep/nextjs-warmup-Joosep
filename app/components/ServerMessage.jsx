'use client';
import { useState } from "react";
export default function ServerMessage() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    async function loadMessage() {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/message");
            if (!response.ok) {
                throw new Error(`Request failed (${response.status})`);
            }
            const data = await response.json();
            setMessage(data.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div style={{ margin: "16px 0" }}>
            <button onClick={loadMessage} disabled={loading}>
                Load server message
            </button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {message && <p>{message}</p>}
        </div>
    );
}
