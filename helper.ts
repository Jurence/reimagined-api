// apiAuthHelper.ts
import axios from 'axios';

export class APIAuthHelper {
    private apiUrl: string;
    private apiKey: string;
    private authToken: string | null = null;

    constructor(apiUrl: string, apiKey: string) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    async authenticateAPI(): Promise<void> {
        try {
            const response = await axios.post(this.apiUrl, { apiKey: this.apiKey });
            this.authToken = response.data.token; // Adjust this based on your API response
        } catch (error) {
            console.error('API authentication failed:', error);
            throw error;
        }
    }

    getAuthToken(): string {
        if (!this.authToken) {
            throw new Error('API authentication token not available. Please authenticate first.');
        }
        return this.authToken;
    }
}
