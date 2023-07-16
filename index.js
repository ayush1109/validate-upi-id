async function fetchDetails(vpa) {
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
    const response = await fetch('https://paydigi.airtel.in/web/pg-service/v1/validate/vpa/' + vpa, {
        method: 'GET',
        headers: headers
    });
    return response.json();
}

const verifyUPI = async (vpa) => {
    if(vpa === '' || vpa === null || vpa === undefined) return 'UPI ID cannot be null or empty';

    const response = await fetchDetails(vpa);
    var data = response.data;
    var upiDetails;
    if(data.vpaValid) 
        upiDetails = {
            payeeAccountName: data.payeeAccountName,
            vpa: data.vpa,
            vpaValid: data.vpaValid
        }
    
    else 
    upiDetails = {
        vpa: data.vpa,
        vpaValid: data.vpaValid,
        errorMessage: data.errorMessage
    }
            return upiDetails;

}

module.exports = verifyUPI;