function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

const usExchange = () => "1.134";

padLeft("£", usExchange());
padLeft(10, "Current PM");
