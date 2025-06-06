import { InitialValue } from "@/types/InitialValue";

export const fetchData = async (url: string):Promise<InitialValue[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}