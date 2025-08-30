const container = document.getElementById('cadernoSemana');
const dias = container.children; // pega todos os filhos deste elemento

for (let i = 0; i < dias.length; i++) {
    dias[i].onclick = function () {
        const check = this.querySelector('.check');
        if (check.style.display === 'block') {
            check.style.display = 'none';
        } else {
            check.style.display = 'block';
        }
    };
}
