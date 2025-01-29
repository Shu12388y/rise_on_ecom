// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://sellingpartnerapi-na.amazon.com/sellers/v1/account',
//   headers: {accept: 'application/json'}
// };

// axios
//   .request(options)
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://sellingpartnerapi-na.amazon.com/sales/v1/orderMetrics?marketplaceIds=&granularity=Month&buyerType=B2B&firstDayOfWeek=Sunday',
  headers: {accept: 'application/json'}
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));