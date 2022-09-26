const PORT = "8000";
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

const url =
  "http://itempage3.auction.co.kr/detailview.aspx?ItemNo=C715839436&listqs=class%253dCorner.CategoryBest%2526listorder%253d4&listtitle=%BA%A3%BD%BA%C6%AE100&frm2=through";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    const price = $(".item-topinfo");
    console.log(price);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
