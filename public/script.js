document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const itemList = document.getElementById('item-list');
  
    quantityInput.addEventListener('input', () => {
      const quantity = Number.parseInt(quantityInput.value) || 0;
      itemList.innerHTML = ''; // Limpar lista anterior
  
      for (let i = 1; i <= quantity; i++) {
        const item = document.createElement('div');
        item.textContent = `Item ${i}`;
        itemList.appendChild(item);
      }
    });
  });
  