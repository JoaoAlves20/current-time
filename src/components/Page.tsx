import { Container } from "./style";

import { useState, useEffect } from "react";

export default function Layout() {
    const [hours, setHours] = useState("");
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();

            if (hour >= 1 && hour < 12) {
                setGreeting("Good morning!");
            } else if (hour >= 12 && hour < 18) {
                setGreeting("Good afternoon!");
            } else if (hour >= 18 && hour < 24 || hour === 0) {
                setGreeting("Good night!");
            }

            const hourNow = hour < 10 ? `0${hour}` : hour;
            const minuteNow = minute < 10 ? `0${minute}` : minute;

            setHours(`${hourNow}:${minuteNow}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <Container>
            <p>{greeting}</p>
            
            <div>
                <h1>{hours}</h1>
            </div>
        </Container>
    )
}