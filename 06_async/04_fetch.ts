async function getJson(url: string, signal: AbortSignal): Promise<any> {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.name && error.name === "AbortError") {
      console.error("Request Aborted");
      return {};
    }
    console.log(error);
  }
}

const ac = new AbortController();
const { signal } = ac;
run();
ac.abort();

async function run() {
  const data = await getJson("https://swapi.dev/api/people", signal);
  console.log(data);
}
