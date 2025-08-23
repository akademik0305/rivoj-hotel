export const useStore = defineStore("Store", () => {
	const { t } = useI18n();
	// format currency
	function formatCurrency(amount: number) {
		if(amount) {
			const [integerPart, decimalPart] = amount.toFixed(2).split(".");
			const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			const formatted =
				decimalPart === "00"
					? formattedInteger
					: `${formattedInteger}.${decimalPart}`;
			return `${formatted} ${t("sum")}`;
		}
		return `0 ${t("sum")}`;
	}
	return {
		formatCurrency,
	};
});
