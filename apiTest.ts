// apiTest.ts
import axios from 'axios';

export class APITest {
    private apiUrl: string;
    private authToken: string;

    constructor(apiUrl: string, authToken: string) {
        this.apiUrl = apiUrl;
        this.authToken = authToken;
    }

    async getMeData(): Promise<any> {
        const headers = {
            Authorization: `Bearer ${this.authToken}`,
        };

        const response = await axios.get(`${this.apiUrl}/me`, { headers });
        return response.data;
    }
}
