function generateReceiptNumber() {
    try {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `REC-${timestamp}-${random}`;
    } catch (error) {
        reportError(error);
        return null;
    }
}

function formatCurrency(amount) {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    } catch (error) {
        reportError(error);
        return null;
    }
}
