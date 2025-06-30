import { InitialValue } from "@/types/InitialValue";

export const fetchResults = async (url: string):Promise<InitialValue[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.initialValues || [];
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}