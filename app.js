function App() {
    const [receiptData, setReceiptData] = React.useState(null);

    const handleFormSubmit = (data) => {
        try {
            setReceiptData(data);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8" data-name="app-container">
            <h1 className="text-3xl font-bold text-center mb-8" data-name="app-title">
                Receipt Generator
            </h1>
            <ReceiptForm onSubmit={handleFormSubmit} />
            <ReceiptPreview receiptData={receiptData} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
