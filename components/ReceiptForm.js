function ReceiptForm({ onSubmit }) {
    const [formData, setFormData] = React.useState({
        businessName: '',
        businessAddress: '',
        dateTime: '',
        receiptNumber: '',
        customerName: '',
        itemDescription: '',
        price: '',
        tax: ''
    });

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            const total = parseFloat(formData.price) + (parseFloat(formData.price) * parseFloat(formData.tax) / 100);
            onSubmit({ ...formData, total });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-50 rounded-lg" data-name="receipt-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="input-field p-2 rounded w-full"
                    data-name="business-name-input"
                    required
                />
                <input
                    type="text"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    placeholder="Business Address"
                    className="input-field p-2 rounded w-full"
                    data-name="business-address-input"
                    required
                />
                <input
                    type="datetime-local"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    className="input-field p-2 rounded w-full"
                    data-name="date-time-input"
                    required
                />
                <input
                    type="text"
                    name="receiptNumber"
                    value={formData.receiptNumber}
                    onChange={handleChange}
                    placeholder="Receipt Number"
                    className="input-field p-2 rounded w-full"
                    data-name="receipt-number-input"
                    required
                />
                <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Customer Name"
                    className="input-field p-2 rounded w-full"
                    data-name="customer-name-input"
                    required
                />
                <input
                    type="text"
                    name="itemDescription"
                    value={formData.itemDescription}
                    onChange={handleChange}
                    placeholder="Item Description"
                    className="input-field p-2 rounded w-full"
                    data-name="item-description-input"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    step="0.01"
                    className="input-field p-2 rounded w-full"
                    data-name="price-input"
                    required
                />
                <input
                    type="number"
                    name="tax"
                    value={formData.tax}
                    onChange={handleChange}
                    placeholder="Tax (%)"
                    step="0.01"
                    className="input-field p-2 rounded w-full"
                    data-name="tax-input"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                data-name="generate-receipt-button"
            >
                Generate Receipt
            </button>
        </form>
    );
}
