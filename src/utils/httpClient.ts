const BASE_URL = 'https://mate.academy/students-api';


export async function request<T>(path: string, method = 'GET', data?: any):Promise<T> {
  const options: RequestInit = { method };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
  
  return fetch(BASE_URL + path, options).then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    console.log(response);
    

    return response.json();
  })
}


export const client = {
  get<T>(url: string) {
    return request<T>(url);
  },
  delete<T>(url: string) {
    return request<T>(url, 'DELETE');
  },
  post<T>(url: string, data: T) {
    return request<T>(url, 'POST', data);
  }
  
 }