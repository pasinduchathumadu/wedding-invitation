import { useEffect, useState } from "react";
import { countdown } from "../../utils/countdown";
export function Countdown({ targetDate }: { targetDate: string }) {
  const [v, setV] = useState(countdown(targetDate));
  useEffect(() => {
    const id = setInterval(() => setV(countdown(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  if (v.done)
    return (
      <section className="section countdown center">
        <span className="eyebrow light">Today is the day</span>
        <h2>Our special day is here ♥</h2>
      </section>
    );
  return (
    <section className="section countdown center">
      <span className="eyebrow light">Counting every moment</span>
      <h2>Until we say “I do”</h2>
      <div className="timer">
        {[
          ["Days", v.days],
          ["Hours", v.hours],
          ["Minutes", v.minutes],
          ["Seconds", v.seconds],
        ].map(([l, n]) => (
          <div key={String(l)}>
            <strong>{String(n).padStart(2, "0")}</strong>
            <small>{l}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
