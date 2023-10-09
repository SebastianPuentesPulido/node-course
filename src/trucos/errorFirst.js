function async(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

try {
  async((err, data) => {
    if (err) {
      // console.log("We have an error");
      // console.error(err);
      // return false;
      throw err;
    }
    console.log("Easy Peasy", data);
  });
} catch (error) {
    console.error("We have the error %d",error);
}
