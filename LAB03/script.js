// document.getElementById('calculatorForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     const url = `/lab2?method=${formData.get('method')}&x=${formData.get('x')}&y=${formData.get('y')}`;
    
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('result').textContent = data;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });
