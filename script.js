document.addEventListener('DOMContentLoaded', function() {
    const chocolateOptions = [
        { id: 1, name: 'Milk Chocolate', price: 2.5 },
        { id: 2, name: 'Dark Chocolate', price: 3 },
        { id: 3, name: 'White Chocolate', price: 2 },
        { id: 4, name: 'Hazelnut Praline Chocolate', price: 3.5 },
        { id: 5, name: 'Caramel-filled Chocolate Squares', price: 2.8 },
        { id: 6, name: 'Almond Cluster Chocolate', price: 3.2 },
        { id: 7, name: 'Orange Infused Dark Chocolate', price: 3.1 },
        { id: 8, name: 'Raspberry-filled White Chocolate', price: 3.3 },
        { id: 9, name: 'Raspberry-filled  Chocolate', price: 3.0}
    ];

    const selectedChocolates = [];

    function renderChocolateOptions() {
        const chocolateOptionsContainer = document.getElementById('chocolate-options');
        chocolateOptionsContainer.innerHTML = '';

        chocolateOptions.forEach(chocolate => {
            const chocolateOption = document.createElement('div');
            chocolateOption.className = 'chocolate-option';
            chocolateOption.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            chocolateOption.addEventListener('click', () => addChocolateToPack(chocolate));
            chocolateOptionsContainer.appendChild(chocolateOption);
        });
    }

    function addChocolateToPack(chocolate) {
        if (selectedChocolates.length < 8) {
            selectedChocolates.push(chocolate);
            updateSelectedChocolates();
        } else {
            alert('You can only select up to 8 chocolates.');
        }
    }

    function updateSelectedChocolates() {
        const selectedChocolatesContainer = document.getElementById('selected-chocolates');
        selectedChocolatesContainer.innerHTML = '<h2>Your Custom Pack</h2>';

        let totalPrice = 0;
        selectedChocolates.forEach(chocolate => {
            const chocolateItem = document.createElement('div');
            chocolateItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            selectedChocolatesContainer.appendChild(chocolateItem);
            totalPrice += chocolate.price;
        });

        const totalElement = document.createElement('div');
        totalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        selectedChocolatesContainer.appendChild(totalElement);
    }

    renderChocolateOptions();
});
