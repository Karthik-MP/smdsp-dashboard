import axios from "axios";
import fallbackData from "./data.json";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_END_POINT}/chan/`;

export const getDailyStats = async ({ board_name, start_date, end_date }) => {
    try {
        const params = {};
        if (board_name) params.board_name = board_name;
        if (start_date) params.start_date = start_date;
        if (end_date) params.end_date = end_date;

        const res = await axios.get(API_URL + "stats/daily", { params });
        return res.data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.chan.dailyStats;
    }
};

export const getSummaryStats = async () => {
    try {
        const res = await axios.get(API_URL + "stats/summary");
        return res.data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.chan.summaryStats;
    }
};

export const getCountryStats = async () => {
    try {
        const res = await axios.get(API_URL + "stats/countries");
        return res.data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.chan.countryStats;
    }
};

export const getEngagementByType = async ({ board_name, start_date, end_date }) => {
    try {
        const params = {};

        if (board_name) params.board_name = board_name;
        if (board_name == "") params.board_name = "pol,g,sp,int,out"
        if (start_date) params.start_date = start_date;
        if (end_date) params.end_date = end_date;

        const res = await axios.get(API_URL + "engagement/by-type", { params });
        return res.data;
    } catch (error) {
        console.warn("API failed, returning fallback data:", error.message);
        return fallbackData.chan.engagementByType;
    }
};
