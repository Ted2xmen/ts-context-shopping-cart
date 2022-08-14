const FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export const formatCurrency = (number: number) => {
    return FORMATTER.format(number)
}