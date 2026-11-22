
let response = JSON.parse($response.body);

response.module_test = {
    enabled: true,
    message: "My custom module works!"
};

$done({
    body: JSON.stringify(response)
});
