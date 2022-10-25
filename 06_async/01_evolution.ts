import fs from "node:fs";

// callback (hell)
fs.readFile(__filename, (error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  const { region } = user;
  fs.readFile(region, (error, region) => {
    if (error) {
      console.log(error);
      return;
    }
    const { newsUrls } = region;
    fs.readFile(newsUrls, (error, news) => {
      if (error) {
        console.log(error);
        return;
      }
      return news;
    });
  });
  console.log(data.toString());
});
