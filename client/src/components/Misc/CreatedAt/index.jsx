import { useEffect, useState } from "react";
import * as Styled from "./style";

export default function CreatedAt({ className, ISODate }) {
    const original = new Date(ISODate);
    const timeStamp = original.getTime();
    const timeStampDiff = Date.now() - timeStamp;
    const periods = {
        seconds: {
            name: "segundo",
            pluralName: "segundos",
            max: 60,
            time: timeStampDiff / 1000,
        },
        get minutes() {
            return {
                name: "minuto",
                pluralName: "minutos",
                max: 60,
                time: this.seconds.time / this.seconds.max,
            };
        },
        get hours() {
            return {
                name: "hora",
                pluralName: "horas",
                max: 24,
                time: this.minutes.time / this.minutes.max,
            };
        },
        get days() {
            return {
                name: "dia",
                pluralName: "dias",
                max: 7,
                time: this.hours.time / this.hours.max,
            };
        },
        get weeks() {
            return {
                name: "semana",
                pluralName: "semanas",
                max: 4,
                time: this.days.time / this.days.max,
            };
        },
        get months() {
            return {
                name: "mês",
                pluralName: "meses",
                max: 12,
                time: this.weeks.time / this.weeks.max,
            };
        },
        get years() {
            return {
                name: "ano",
                pluralName: "anos",
                max: Infinity,
                time: this.months.time / this.months.max,
            };
        },
    };
    const period = Object.values(periods).filter(({ time, max }) => time < max)[0];
    const time = Math.floor(period.time);
    const periodName = time > 1 ? period.pluralName : period.name;
    const [render, setRender] = useState(0);

    useEffect(() => {
        const updateTime = {
            segundo: 12000,
            minuto: 1000 * 60,
            hora: 1000 * 60 * 60,
        };
        const updateEvery = updateTime[period.name];

        if (updateEvery) {
            const interval = setTimeout(() => setRender(render + 1), updateEvery);

            return () => clearTimeout(interval);
        }
    }, [render]);

    return (
        <Styled.Wrapper className={className} dateTime={ISODate}>
            {periodName.startsWith("segundo") && time < 10
                ? "agora"
                : `há ${time} ${periodName}`}
        </Styled.Wrapper>
    );
}
