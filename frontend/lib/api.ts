const API_BASE_URL= process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api'

export async function fetcher(endpoint: string, options?: RequestInit) {
    const url = `${API_BASE_URL}${endpoint}`

    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    })

    if(!response.ok) {
        throw new Error('API request failed')
    }

    return response.json()
}

export const songAPI = {
    getFeaturedSong: () => fetcher('/songs/featured'),
    getRandomSong: () => fetcher('/songs/random'),
    // ... more endpoints
}