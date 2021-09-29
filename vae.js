
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api1-xusong.taihe.com/auth/`;
const method = `POST`;
const headers = {
'Cookie' : `JSESSID=7f5efe81c3bea13d58DF19c554ac9c8611b8c789c0`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api1-xusong.taihe.com`,
'User-Agent' : `VaeHome/2.5.2 (iPhone; iOS 13.5; Scale/2.00)`,
'Accept-Language' : `zh-Hans-FR;q=1`
};
const body = `q=4/2ZMy33NIhR1PUCFG0XZyoXJY5eYAE/5e0cHCnyoFiEzw0QSznZSqbs1lynK48W37HDs27xixCfLrVg4pkIsqpYc1TzFp7bDlNsvir70GR3lcBwz4WTpMmbS8E2naCK9At2ypNqt5lVV3T5MBjlkkCrom2vi838EH/k/L7IxKUl/CCjF8HJhLFhVTDZEPmOr2Y%2BCtH0tYod61syw5G94dX6Ukiz7r04KZB4UeKH0zcSpDof%2BUimAzfIJ0Ozs52s0D8Moil9fy4w7AhFAUqhb/jZ1q%2BJy9Y77%2BRN4gUjMbw6%2BALDKSPOU3Ad/qeOCWucriq1k8Rk54yhR6NLw9T9caf1qV48S2b44mvuv%2Bc7F%2BHdB0ZumFgQwHiJ6VklImhIKVAOI25IyDti0jWPMS/cv47fZ8A0qPvzTn1pK70rU8shWmi%2B7PPJ0xnJ9kbQSQBw1Ib124w1Qudb9voqBUb3136FJaWgHdjNRIe3jJ5%2BTD4hojreCpfdYgrCYr1GcGqawcTspYprb%2B14sjDZAbXJUkwmM4F7T%2BHze68Y4i%2B563rWWDgDa2s8n4ugUh2Tsnb8g4eg4HYapKQo0E0dNb/PHBpWmf685obzoJXjrxu02cpS3xj/9/eOckC0LSDVU8/i%2BCPw0RAYAbe/jF3onZlVlDWv0hreWi64TckeoEeaL7mGuDdkDMstwbWmXjjGrNe%2BoV8ziEw%2BabXHrB2kE8T%2BQ65lWumSBm2EqApwiUGVSHfMU%2Brc2hMylG9XuK23Q%2B03TXayrGvDEfvl3l0r44KGEKyX%2BjM%2Bdk3do/fI0zvKXnKvL8aQ9im2vA1afAartPzJjUl3VddoX23Ou3NbEBHkOw%3D%3D`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});