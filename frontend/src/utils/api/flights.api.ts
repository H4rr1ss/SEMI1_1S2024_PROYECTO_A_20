import { RecordFlight } from "../interfaces/recordFlight.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/flights";
const COGNITO_API_URL = process.env.NEXT_PUBLIC_COGNITO_API_URL;

export const recordFlightAPI = async (data: RecordFlight) =>
  fetch(`${API_URL}/record-flight`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
