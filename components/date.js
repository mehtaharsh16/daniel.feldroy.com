import { parseISO, format } from "date-fns";

export default function MyDate({ dateString }) {
  try {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  } catch {
    return dateString;
  }
}
