// API client for HH Parser backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // HH Parser specific endpoints
  async getHello(): Promise<{ message: string }> {
    return this.request('/');
  }

  // Placeholder for future HH parsing endpoints
  async parseVacancies(query: string): Promise<{ success: boolean; data?: unknown }> {
    return this.request('/vacancies/parse', {
      method: 'POST',
      body: JSON.stringify({ query }),
    });
  }

  async getVacancies(): Promise<unknown[]> {
    return this.request('/vacancies');
  }
}

export const apiClient = new ApiClient();
export default apiClient;
