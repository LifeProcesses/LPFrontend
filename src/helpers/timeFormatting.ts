export function getDateFromTimestamp(timestamp: number | string) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    return `${day}.${month}.${date.getFullYear()}`;
}

export function getYMDDateFromTimestamp(timestamp: number | string) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    return `${date.getFullYear()}-${month}-${day}`;
}

export function getTimeFromTimestamp(timestamp: number | string, withSec?: boolean) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (!withSec) {
        return `${hours}:${minutes}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}
