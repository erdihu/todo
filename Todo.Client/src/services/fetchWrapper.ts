async function http<T>(path: string, config?: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(JSON.stringify({ name: response.status, message: response.statusText }));
  }

  // may error if there is no body, return empty array
  return response.json().catch(() => ({}));
}

export async function get<T>(path: string): Promise<T> {
  const init = { method: 'get', headers: { 'content-type': 'application/json' } } as RequestInit;
  return await http<T>(path, init);
}

export async function post<T, U>(path: string, body: T): Promise<U> {
  const init = {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  } as RequestInit;
  return await http<U>(path, init);
}
