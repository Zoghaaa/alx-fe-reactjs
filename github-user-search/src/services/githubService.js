import axios from "axios";

export async function fetchUserData({ username, location, minRepos, page }) {
    const queries = [];

    if (username.trim().length) {
        queries.push(username);
    }

    if (location.trim().length) {
        queries.push(`location:${location}`);
    }

    if (minRepos.trim().length) {
        queries.push(`repos:>${minRepos}`);
    }

    const queryString = queries.join(' ');

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(queryString)}&page=${page}&per_page=6`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}