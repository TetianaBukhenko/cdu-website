const BASE_URL = 'https://cdu-backend-5gvnird6ya-lz.a.run.app/api/admin';

export async function request<T>(
  path: string,
  token: string,
  method = 'GET',
  data?: FormData,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (data) {
    options.body = data;
  }

  return fetch(`${BASE_URL}/${path}`, options).then(response => {
    console.log(response);

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

export const adminClient = {
  get<T>(url: string, token: string) {
    return request<T>(url, token);
  },
  delete<T>(url: string, token: string) {
    return request<T>(url, token, 'DELETE');
  },
  post<T>(url: string, token: string, data: FormData) {
    return request<T>(url, token, 'POST', data);
  },
  update<T>(url: string, token: string, data: FormData) {
    return request<T>(url, token, 'PUT', data);
  },
};