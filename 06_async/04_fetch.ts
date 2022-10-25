import { setTimeout } from "node:timers/promises";

async function getJson(url: string, signal: AbortSignal): Promise<void> {
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
      return;
    }
    console.log(error);
  }
}

async function wait(ms: number) {
  await setTimeout(ms, () => {});
  return {};
}
const ac = new AbortController();
const { signal } = ac;
async function run() {
  const data = await getJson("https://swapi.dev/api/people", signal);
  console.log(data);
}

run();
ac.abort();
