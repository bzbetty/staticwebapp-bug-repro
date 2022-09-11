export function httpClient<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("/api/graphql" as string, {
      method: "POST",
      redirect: 'manual',
      ...({ "headers": { "Content-Type": "application/json" } }),
      body: JSON.stringify({ query, variables }),
    });

    //status == 0 is a opaque redirect
    if (res.status == 401 || res.status == 0 || res.redirected) {
      window.location.href = '/login?return_url=' + window.location;
    }

    if (res.status == 403) {
      window.location.href = '/forbidden?return_url=' + window.location;
    }

    if (!res.ok) {
      throw new Error('Network response was not ok')
    }

    const json = await res.json();

    if (json.errors) {
      throw json.errors;
    }

    return json.data;
  }
}
