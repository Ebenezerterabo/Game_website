const baseUrl = "https://api.rawg.io/api";
const apiKey = "key=32ceb3c32380423686a98cc190d32aa9";

export const genresFetch = async () => {
    const response = await fetch(`${baseUrl}/genres?${apiKey}`);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
}

export const developersFetch = async () => {
    const response = await fetch(`${baseUrl}/developers?${apiKey}`);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
}

export const gamesFetch = async () => {
    const response = await fetch(`${baseUrl}/games?${apiKey}`);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
}

