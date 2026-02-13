import axios from "axios";
import fallbackData from "./data.json";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_END_POINT}/reddit/`;

export const getSummaryStats = async () => {
  try {
    const { data } = await axios.get(API_URL + "stats/summary");
    return data;
  } catch (error) {
    console.warn("API failed, returning fallback data:", error.message);
    return fallbackData.reddit.summaryStats;
  }
};

export const getDailyPostsCount = async () => {
  try {
    const { data } = await axios.get(API_URL + "posts/daily-counts");
    return data;
  } catch (error) {
    console.warn("API failed, returning fallback data:", error.message);
    return fallbackData.reddit.dailyPostsCount;
  }
};

export const getTopSubscribers = async () => {
  try {
    const { data } = await axios.get(API_URL + "subreddit/top-subscribers");
    return data;
  } catch (error) {
    console.warn("API failed, returning fallback data:", error.message);
    return fallbackData.reddit.topSubscribers;
  }
};
