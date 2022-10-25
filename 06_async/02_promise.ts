import fs from "node:fs";

// 3 states
// pending - waiting around for async operation to finish IOU/slip
// fulfilled/resolved  - got what we wanted
// error/reject - something went wrong (didn't return, some error)

function promiseReadFile(filename): Promise<Buffer | void> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

promiseReadFile(__filename)
  .then((user) => {
    const { region } = user;
    return promiseReadFile(region);
  })
  .then((region) => {
    const { newsUrls } = region;
    return promiseReadFile(newsUrls);
  })
  .then((news) => reportNews(news))
  .catch((error) => console.log(error));

// .then()/.catch()

// try/catch
// error handling

// Promises

// Promise.all/Promise.race/Promise.allSettled

// closure

// async/await
