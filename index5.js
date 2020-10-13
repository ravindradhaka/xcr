const cheerio = require('cheerio')
const axios = require('axios');
const fs = require('fs');
var someObject = require('./student-c2.json');


// let start = "https://www.amazon.in/s?rh=n%3A5866078031%2Cn%3A%215866079031%2Cn%3A6395912031&page=2&qid=1600700942&ref=lp_6395912031_pg_2";
// let one = "https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&fst=as%3Aoff&qid=1600700332&rnid=12109315031&ref=sr_pg_1";
// let two = "https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&page=2&fst=as%3Aoff&qid=1600700341&rnid=12109315031&ref=sr_pg_2";
// let three = "https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&page=3&fst=as%3Aoff&qid=1600700357&rnid=12109315031&ref=sr_pg_3";
// let four ="https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&page=4&fst=as%3Aoff&qid=1600700372&rnid=12109315031&ref=sr_pg_4";
// let five = "https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&page=5&fst=as%3Aoff&qid=1600700386&rnid=12109315031&ref=sr_pg_5";
// let six = "https://www.amazon.in/s?i=industrial&bbn=12109315031&rh=n%3A12109315031%2Cn%3A7355545031&dc&page=6&fst=as%3Aoff&qid=1600700398&rnid=12109315031&ref=sr_pg_6";
// let seven = "https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355784031&page=8&qid=1600697695&ref=sr_pg_8";
// let eight = "https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355784031&page=9&qid=1600697705&ref=sr_pg_9";
// let nine = "https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355784031&page=10&qid=1600697768&ref=sr_pg_10";
// let ten = "https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355784031&page=11&qid=1600697778&ref=sr_pg_11";
// let eve11 = "https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355784031&page=12&qid=1600697787&ref=sr_pg_12";
//

var counter = -1;
var intervalId = null;
var obj = [];
// intervalId = setInterval(function() {
//     counter = counter+1;
//     console.log("counter",counter);
//     var start = someObject[counter];
//     if(counter < 32 ) {
//         updatePageIndex(start);
//     } else {
//         clearInterval(intervalId);
//     }
// }, 4000);

function updatePageIndex() {
    // if(counter > 2) {
    //     return;
    // }
    // obj = [];
    var start = "https://www.supplyvan.com/outdoor-equipment.html";
    var requestOne = axios.get(start);
    axios.all([requestOne]).then(axios.spread((...responses) => {
        var $1 = cheerio.load(responses[0].data);
        // var obj = [];
        // for(let i=0;i<27;i++) {
        console.log("helllo")
            var urlElems1 = $1('.sv-sub-categories').find('li').find('a');
            // console.log("urlElems1",urlElems1);
            // var names = urlElems1[0].children;
            for(let i=0;i<urlElems1.length;i++) {
                // var urlSpan = $1(names[i]).find("a.s-access-detail-page");
                // let yee = urlSpan.find(a);
                // console.log("urlSpan");
                obj.push(urlElems1[i].attribs.href);
            }
        // }
        // for(let j=0;j<urlElems1.length;j++) {
        //     var urlSpan1 = (urlElems1[j]).find('a');
        //     obj.push('https://www.amazon.in'+urlSpan1.children[1].attribs.href);
        // }
        // console.log("obj",obj);
        let data = JSON.stringify(obj, null, 2);
        fs.writeFile('./outdoor/m1.json', data, (err) => {
          if (err) throw err;
          console.log('Data written to file');
        });
    })).catch(errors => {
      // react on errors.
    })
}
updatePageIndex();

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
// const requestFour = axios.get(four);
// const requestFive = axios.get(five);
// const requestSix = axios.get(six);
// const requestSeven = axios.get(seven);
// const requestEight = axios.get(eight);
// const requestNine = axios.get(nine);
// const requestTen = axios.get(ten);
//
// axios.all([requestOne,requestTwo,requestThree,requestFour,requestFive,requestSix,requestSeven,requestEight,requestNine,requestTen]).then(axios.spread((...responses) => {
//   const $1 = cheerio.load(responses[0].data);
//   const $2 = cheerio.load(responses[1].data);
//   const $3 = cheerio.load(responses[2].data);
//   const $4 = cheerio.load(responses[3].data);
//   const $5 = cheerio.load(responses[4].data);
//   const $6 = cheerio.load(responses[5].data);
//   const $7 = cheerio.load(responses[6].data);
//   const $8 = cheerio.load(responses[7].data);
//   const $9 = cheerio.load(responses[8].data);
//   const $10 = cheerio.load(responses[9].data);
//   // const $11 = cheerio.load(responses[10].data);
//   var obj = [];
//   var urlElems1 = $1('.s-line-clamp-4');
//   for(let j=0;j<urlElems1.length;j++) {
//       var urlSpan1 = (urlElems1[j]);
//       obj.push('https://www.amazon.in'+urlSpan1.children[1].attribs.href);
//   }
//   var urlElems2 = $2('.s-line-clamp-4');
//   for(let j=0;j<urlElems2.length;j++) {
//       var urlSpan2 = (urlElems2[j]);
//       obj.push('https://www.amazon.in'+urlSpan2.children[1].attribs.href);
//   }
//   var urlElems3 = $3('.s-line-clamp-4');
//   for(let j=0;j<urlElems3.length;j++) {
//       var urlSpan3 = (urlElems3[j]);
//       obj.push('https://www.amazon.in'+urlSpan3.children[1].attribs.href);
//   }
//   var urlElems4 = $4('.s-line-clamp-4');
//   for(let j=0;j<urlElems4.length;j++) {
//       var urlSpan4 = (urlElems4[j]);
//       obj.push('https://www.amazon.in'+urlSpan4.children[1].attribs.href);
//   }
//   var urlElems5 = $5('.s-line-clamp-4');
//   for(let j=0;j<urlElems5.length;j++) {
//       var urlSpan5 = (urlElems5[j]);
//       obj.push('https://www.amazon.in'+urlSpan5.children[1].attribs.href);
//   }
//   var urlElems6 = $6('.s-line-clamp-4');
//   for(let j=0;j<urlElems6.length;j++) {
//       var urlSpan6 = (urlElems6[j]);
//       obj.push('https://www.amazon.in'+urlSpan6.children[1].attribs.href);
//   }
//   var urlElems7 = $7('.s-line-clamp-4');
//   for(let j=0;j<urlElems7.length;j++) {
//       var urlSpan7 = (urlElems7[j]);
//       obj.push('https://www.amazon.in'+urlSpan7.children[1].attribs.href);
//   }
//   var urlElems8 = $8('.s-line-clamp-4');
//   for(let j=0;j<urlElems8.length;j++) {
//       var urlSpan8 = (urlElems8[j]);
//       obj.push('https://www.amazon.in'+urlSpan8.children[1].attribs.href);
//   }
//   var urlElems9 = $9('.s-line-clamp-4');
//   for(let j=0;j<urlElems9.length;j++) {
//       var urlSpan9 = (urlElems9[j]);
//       obj.push('https://www.amazon.in'+urlSpan9.children[1].attribs.href);
//   }
//   var urlElems10 = $10('.s-line-clamp-4');
//   for(let j=0;j<urlElems10.length;j++) {
//       var urlSpan10 = (urlElems10[j]);
//       obj.push('https://www.amazon.in'+urlSpan10.children[1].attribs.href);
//   }
//   // var urlElems11 = $11('.s-line-clamp-4');
//   // for(let j=0;j<urlElems11.length;j++) {
//   //     var urlSpan11 = (urlElems11[j]);
//   //     obj.push('https://www.amazon.in'+urlSpan11.children[1].attribs.href);
//   // }
//   console.log("obj",obj);
//   let data = JSON.stringify(obj, null, 2);
//   fs.writeFile('student-3.json', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
//   });
// })).catch(errors => {
//   // react on errors.
// })

// axios.get('https://www.amazon.in/s?i=industrial&rh=n%3A5866078031%2Cn%3A5866079031%2Cn%3A7355544031%2Cn%3A7355546031%2Cn%3A7355707031&page=5&qid=1600684204&ref=sr_pg_5').then((response) => {
//   // Load the web page source code into a cheerio instance
//   const $ = cheerio.load(response.data);
//   var obj = [];
//   // for(let k=24;k<48;k++) {
//       var urlElems = $('.s-line-clamp-4');
//       for(let j=0;j<urlElems.length;j++) {
//           var urlSpan = $(urlElems[j]).find('a');
//           obj.push('https://www.amazon.in'+urlSpan[0].attribs.href);
//       }
//
//   // }
//   console.log("obj",obj);
// })
