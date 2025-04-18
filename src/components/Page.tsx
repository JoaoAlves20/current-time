import { useState, useEffect } from "react";

import { Container } from "./style";
import colors from "@/styles/colors";

export default function Layout() {
    const [hours, setHours] = useState("");
    const [greeting, setGreeting] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();

            if (hour >= 1 && hour < 12) {
                setGreeting("Good morning 😁");
                setFrom(colors.morning.from);
                setTo(colors.morning.to);
            } else if (hour >= 12 && hour < 18) {
                setGreeting("Good afternoon 😎");
                setFrom(colors.afternoon.from);
                setTo(colors.afternoon.to);
            } else if (hour >= 18 && hour < 24 || hour === 0) {
                setGreeting("Good night 😴");
                setFrom(colors.night.from);
                setTo(colors.night.to);
            }

            const hourNow = hour < 10 ? `0${hour}` : hour;
            const minuteNow = minute < 10 ? `0${minute}` : minute;

            setHours(`${hourNow}:${minuteNow}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <Container colors={{ from, to }}>
            <div>
                <h1>{hours}</h1>
            </div>
            
            <p>{greeting}</p>
        </Container>
    )
}