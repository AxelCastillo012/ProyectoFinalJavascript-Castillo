async function fetchProducts() {
    try {
        const response = await fetch('data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}