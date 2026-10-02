export function countdown(target: string) {
  const d = Math.max(0, new Date(target).getTime() - Date.now());
  const s = Math.floor(d / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: d <= 0,
  };
}
