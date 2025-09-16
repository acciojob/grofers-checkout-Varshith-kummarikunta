const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll('.price');
  let sum = 0;
  prices.forEach(p => sum += parseFloat(p.textContent));

  const row = document.createElement('tr');
  const cell = document.createElement('td');
  cell.colSpan = 2;
  cell.textContent = `Total Price: ₹${sum}`;
  row.appendChild(cell);
  document.querySelector('table').appendChild(row);
	
};

getSumBtn.addEventListener("click", getSum);

