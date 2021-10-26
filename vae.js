
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api1-xusong.taihe.com/auth/`;
const method = `POST`;
const headers = {
'Cookie' : `JSESSID=dcd92079e874a3ff58DF1f85da00478361a512fd8f`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api1-xusong.taihe.com`,
'User-Agent' : `VaeHome/2.5.2 (iPhone; iOS 13.5; Scale/2.00)`,
'Accept-Language' : `zh-Hans-FR;q=1`
};
const body = `q=xIaqqcUE6zbRJaRQzLIbR08W3IBm4EixkSrkIAcB/x0PJ0ueTkPCqA%2BPXfXMsiyXlR9sCKMcZ1JYpIe9hBobSevfaxzZxYOJc1DBoWY3hC2hx8DXPVWbCVSeY/4636B%2BhAKey0wGrrO4NnvI8ZpnCualnGYG4wIobMdZf7M2GBQDz%2Bt1F2hzSc0y4aYQz1Isk1LXyIcxQmEqhYYRQd2mJkLsF9ishT7RoXH4eI4pcaJL44ZMtwj8iSneIl6O%2BW69IoriCwqW94%2BTNJ0FzbPnw12v6zEy3Erkv9pm4gpT6Cu%2ByJFOHmsRZ3B0n/CAh1k1cdYf0UHqpZ6HSYSXmflGAVmWQs8PQxCyF%2BvC%2BoeEh56P3einrPk0TAG%2BWlKNXVt/cOnB5T8gY91vEGPTYDW90RaoxhyuNyt2qkp%2BgIu/AIOqhrJ%2Bl/aUjnP9eghlLwHwtrooMT%2BE/BE0DvLKN75%2BQNSX6DScSSlgKGpilT3M4qS8Xcs09afay4zQjtgJxBluTGjnO3UZXfjrS/BNdqjFP5F9ulunsfDRjJ4013R3OLa3wZZ9ZKwRhjFuAJDyj0IXF3KdIHcFNtyRxtYkKI1Rc9QZlvlcue9AEcugZez2IONMInniEmikhi66kgUSATsB6mIEG1rnv5I/eybxju5MdColj3xCv/gkjsF3C6gWr0O1IfywIiqcVAn%2Bxi/HS/ema1b/6yj20gf3NHa2mX%2BPAwpSGa37vCQSqhwv4DDW9ILCmE4eACgDADjLn1hkgqSsrBiIzn/lao3xNKGqqVF4K%2BIEfhdy6KpbO%2BJ6l%2BbDW0FGyrgu1CDsPdaKXzDk5oUNtOT2kNVja9Nd2PtbUjyB3w%3D%3D`;

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
