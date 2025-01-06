function ReceiptPreview({ receiptData }) {
    const downloadReceipt = async () => {
        try {
            const receipt = document.getElementById('receipt');
            const canvas = await html2canvas(receipt);
            const link = document.createElement('a');
            link.download = `receipt-${receiptData.receiptNumber}.png`;
            link.href = canvas.toDataURL();
            link.click();
        } catch (error) {
            reportError(error);
        }
    };

    if (!receiptData) return null;

    return (
        <div className="mt-8" data-name="receipt-preview-container">
            <div
                id="receipt"
                className="receipt-container max-w-md mx-auto p-6"
                data-name="receipt-preview"
            >
                <div className="receipt-header text-center mb-4" data-name="receipt-header">
                    <h2 className="text-xl font-bold mb-2">{receiptData.businessName}</h2>
                    <p className="text-gray-600 mb-2">{receiptData.businessAddress}</p>
                    <p className="text-sm text-gray-500">
                        Date: {new Date(receiptData.dateTime).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">Receipt #: {receiptData.receiptNumber}</p>
                </div>

                <div className="receipt-customer mb-4" data-name="receipt-customer">
                    <p className="text-gray-700">Customer: {receiptData.customerName}</p>
                </div>

                <div className="receipt-items mb-4" data-name="receipt-items">
                    <div className="flex justify-between mb-2">
                        <span className="font-medium">Item</span>
                        <span className="font-medium">Amount</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{receiptData.itemDescription}</span>
                        <span>${parseFloat(receiptData.price).toFixed(2)}</span>
                    </div>
                </div>

                <div className="receipt-total" data-name="receipt-total">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>${parseFloat(receiptData.price).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tax ({receiptData.tax}%):</span>
                        <span>
                            ${(parseFloat(receiptData.price) * parseFloat(receiptData.tax) / 100).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${receiptData.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <button
                    onClick={downloadReceipt}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    data-name="download-receipt-button"
                >
                    Download Receipt
                </button>
            </div>
        </div>
    );
}
