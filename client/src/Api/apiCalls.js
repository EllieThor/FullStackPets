import axios from "axios";

let GlobalURL = "http://www.localhost:5004";

export function getDataByGet(url, obj) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.get(GlobalURL + url);
      resolve(res);
    } catch (err) {
      resolve(err);
    }
  });
}
export function getDataByPost(url, obj) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.post(GlobalURL + url, obj);
      resolve(res);
    } catch (err) {
      resolve(err);
    }
  });
}
// /products/getProductsFromDb?q=${this.printByOBJ.sortBy}
