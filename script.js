let details = {}



function knowYourCity() {
    document.getElementById('demo').innerHTML = details.city;
    // document.getElementById('knowCity').style.display = 'none';
}

function fetchDetails() {
    fetch('https://ipinfo.io/json')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('There is some issue in your network');
        })
        .then(data => {
            details = data;
            console.log(details);
        })
        .catch(error => {
            console.error('Your fetch function is not working')
        })
}

fetchDetails();




