const BASE_URL = 'https://cdu-backend-5gvnird6ya-lz.a.run.app/api/public';
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export async function request<T>(
  path: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
  }
  console.log(`${BASE_URL}/${path}`, options);

  return fetch(`${BASE_URL}/${path}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return response.status;
  });
}

export const publicClient = {
  get<T>(url: string) {
    return request<T>(url);
  },
  delete(url: string) {
    return request(url, 'DELETE');
  },
  post<T>(url: string, data: T) {
    return request<T>(url, 'POST', data);
  },
};
