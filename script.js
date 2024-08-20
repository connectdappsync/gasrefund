// Function to validate Ethereum address
function isValidEthereumAddress(address) {
    // Check if the address is a valid Ethereum address (40 hex characters prefixed with '0x')
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

document.getElementById('connectWallet').addEventListener('click', function() {
    const ethAddress = document.getElementById('ethAddress').value.trim();

    if (ethAddress) {
        if (isValidEthereumAddress(ethAddress)) {
            alert(`Connecting wallet for address: ${ethAddress}`);
            // Add wallet connection logic here
        } else {
            alert('Please enter a valid address.');
        }
    } else {
        alert('The address field cannot be empty.');
    }
});
