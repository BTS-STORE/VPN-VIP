let selectedDevice = '';

// Fungsi untuk memainkan suara klik
function playSound() {
    const sound = document.getElementById('clickSound');
    sound.currentTime = 0; // Reset suara ke awal
    sound.play();
}

// Define server lists for HP and STB with descriptions
const serversHP = [
    { name: "SG DIGITAL OCEAN", price: "Rp 10.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." },
    { name: "ID NUSA", price: "Rp 12.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." },
    { name: "ID RAJASA", price: "Rp 13.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." },
    { name: "ID ATHA", price: "Rp 11.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." },
    { name: "ID TECHNO", price: "Rp 12.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." },
    { name: "ID BIZNET", price: "Rp 15.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 2." }
];

const serversSTB = [
    { name: "SG DO", price: "Rp 15.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 3." },
    { name: "ID ATHA", price: "Rp 15.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 3." },
    { name: "ID TECHNO", price: "Rp 15.000", description: "Support VC/Game Online, Garansi FULL, Support Wildcard, Amanah, Max IP 3." }
];

function selectDevice(device) {
    selectedDevice = device;
    document.getElementById('serviceSection').style.display = 'block';
    document.getElementById('serverSection').style.display = 'none';
}

function showServerOptions() {
    const serviceSelect = document.getElementById('serviceSelect');
    const selectedService = serviceSelect.value;

    if (!selectedService) {
        alert('Silakan pilih layanan terlebih dahulu.');
        return;
    }

    const serverSelect = document.getElementById('serverSelect');
    serverSelect.innerHTML = ''; // Clear previous options

    // Populate server options based on the selected device
    const servers = selectedDevice === 'HP' ? serversHP : serversSTB;
    servers.forEach(server => {
        const option = document.createElement('option');
        option.value = `${server.name} - ${server.price}`;
        option.textContent = `${server.name} - ${server.price}`;
        serverSelect.appendChild(option);
    });

    document.getElementById('serverSection').style.display = 'block';
    document.getElementById('serverDescription').textContent = ''; // Clear description
}

function showServerDescription() {
    const serverSelect = document.getElementById('serverSelect');
    const selectedServer = serverSelect.value.split(' - ')[0]; // Extract server name
    const servers = selectedDevice === 'HP' ? serversHP : serversSTB;

    const server = servers.find(s => s.name === selectedServer);
    if (server) {
        document.getElementById('serverDescription').textContent = server.description;
    } else {
        document.getElementById('serverDescription').textContent = '';
    }
}

function openPopup() {
    const serviceSelect = document.getElementById('serviceSelect');
    const serverSelect = document.getElementById('serverSelect');
    const selectedService = serviceSelect.value;
    const selectedServer = serverSelect.value;

    if (!selectedService || !selectedServer) {
        alert('Silakan lengkapi pilihan layanan dan server.');
        return;
    }

    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function submitOrder() {
    const serviceSelect = document.getElementById('serviceSelect');
    const serverSelect = document.getElementById('serverSelect');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Silakan masukkan username dan password.');
        return;
    }

    const selectedService = serviceSelect.value;
    const selectedServer = serverSelect.value;

    const message = `Halo, saya ingin membeli layanan ${selectedService} untuk ${selectedDevice} dengan server ${selectedServer}. Username: ${username}, Password: ${password}.`;
    const whatsappNumber = '6285964161593'; // Nomor WA tanpa + atau 0
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // Close popup and overlay
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}