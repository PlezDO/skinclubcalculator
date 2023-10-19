document.addEventListener('DOMContentLoaded', function() {
    fetchWebsiteData()
        .then(data => {
            const calcualted EV = calculateEV(data);
            document.getElementById('ev').textContent = 'Expected Value:
		$${calcualtedEV}';
		
        }
}
