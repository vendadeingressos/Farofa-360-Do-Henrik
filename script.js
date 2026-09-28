const WHATSAPP_NUMBER = "5538991409848";
function getGreeting(hour = new Date().getHours()) {
	if (hour < 12) return "bom dia";
	if (hour < 18) return "boa tarde";
	return "boa noite";
}

function getWhatsAppUrl() {
	const message = `Olá, ${getGreeting()}! Quero comprar meu ingresso presencial para a Farofa 360 do Henrik.`;
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp-presencial]").forEach((link) => {
	link.href = getWhatsAppUrl();
});

