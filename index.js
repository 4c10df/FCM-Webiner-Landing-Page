// // International telephone format
// var input = document.querySelector("#international_PhoneNumber_countrycodeval"),
//     addressDropdown = document.querySelector("#country");

// // init plugin
// var iti = window.intlTelInput(input, {
//     hiddenInput: "full_phone",
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // just for formatting/placeholders etc
//     initialCountry: "ng", // set initial country to Nigeria
// });

// // populate the country dropdown
// for (var i = 0; i < countryData.length; i++) {
//     var country = countryData[i];
//     var optionNode = document.createElement("option");
//     optionNode.value = country.iso2;
//     var textNode = document.createTextNode(country.name);
//     optionNode.appendChild(textNode);
//     addressDropdown.appendChild(optionNode);
// }
// // set it's initial value
// addressDropdown.value = iti.getSelectedCountryData().iso2;

// // listen to the telephone input for changes
// input.addEventListener('countrychange', function(e) {
//     addressDropdown.value = iti.getSelectedCountryData().iso2;
// });

// // listen to the address dropdown for changes
// addressDropdown.addEventListener('change', function() {
//     iti.setCountry(this.value);
// });


// International telephone format
var input = document.querySelector("#international_PhoneNumber_countrycode"),
    addressDropdown = document.querySelector("#country");

// init plugin
var iti = window.intlTelInput(input, {
    hiddenInput: "full_phone",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // just for formatting/placeholders etc
    initialCountry: "ng", // set initial country to Nigeria
});

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
    var country = countryData[i];
    var optionNode = document.createElement("option");
    optionNode.value = country.iso2;
    var textNode = document.createTextNode(country.name);
    optionNode.appendChild(textNode);
    addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', function(e) {
    addressDropdown.value = iti.getSelectedCountryData().iso2;
    updatePhoneNumber();
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function() {
    iti.setCountry(this.value);
    updatePhoneNumber();
});

function updatePhoneNumber() {
    var countryCode = iti.getSelectedCountryData().dialCode;
    var phoneNumber = input.value;
    var formattedNumber = "+" + countryCode + " " + phoneNumber;
    input.value = formattedNumber;
}

