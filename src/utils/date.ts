export function formatISOToDateString(iso: string): string {
    const date = new Date(iso);
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    let stringDt = `${dt}`;
    let stringMonth = `${month}`;

    if (dt < 10) {
        stringDt = `0${dt}`;
    }
    if (month < 10) {
        stringMonth = `0${month}`;
    }

    return `${stringDt}/${stringMonth}/${year}`;
}