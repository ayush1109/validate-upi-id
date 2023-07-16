const axios = require('axios').default;

const verifyUPI = async (vpa) => {
    if(vpa === '' || vpa === null || vpa === undefined) return 'UPI ID cannot be null or empty';
    const headers = {
        "sec-ch-ua":
            'Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101.0.1210.47',
        Accept: "application/json, text/plain, */*",
        "sec-ch-ua-mobile": "?0",
        "channel-id": "WEB_UNAUTH",
        "sec-ch-ua-platform": "Windows",
        Origin: "https://www.airtel.in",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://www.airtel.in/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
    };

    var res = await axios.get('https://paydigi.airtel.in/web/pg-service/v1/validate/vpa/' + vpa, {
        headers: headers
    });
    const response = res.data.data;
    var upiDetails;
    if(response.vpaValid) 
        upiDetails = {
            payeeAccountName: response.payeeAccountName,
            vpa: response.vpa,
            vpaValid: response.vpaValid
        }
    
    else 
    upiDetails = {
        vpa: response.vpa,
        vpaValid: response.vpaValid,
        errorMessage: response.errorMessage
    }
            return upiDetails;

}

module.exports = verifyUPI;