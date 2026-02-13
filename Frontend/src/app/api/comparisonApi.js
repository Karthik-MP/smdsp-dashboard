import axios from "axios";
import fallbackData from "./data.json";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_END_POINT}/comparison/`;

export const getToxicity = async ({ board_name, start_date, end_date } = {}) => {
    try {
        const params = {};

        if (board_name) params.board_name = board_name;
        if (start_date) params.start_date = start_date;
        if (end_date) params.end_date = end_date;

        const { data } = await axios.get(API_URL + "top-toxic", { params });
        return data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.comparison.toxicity;
    }
};

export const getEventRelatedData = async ({ platform, community, event_date, window } = {}) => {
    try {
        const params = {};

        params.platform = platform || "all";
        if (community) params.community = community;
        if (event_date) params.event_date = event_date;
        if (window) params.window = window;

        const { data } = await axios.get(API_URL + "event-related-timeline", { params });
        return data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.comparison.eventRelatedData;
    }
};
