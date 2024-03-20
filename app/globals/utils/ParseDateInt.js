export default function parseDateInt(dateInt) {
	if (dateInt) {
		if (dateInt != 'The End of Time') {
			let date = new Date(dateInt * 1000);
			return String(
				date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2),
			);
		} else {
			return dateInt;
		}
	} else {
		return 'Now';
	}
}
