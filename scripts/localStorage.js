let configModule = {
	module1: {
		moduleStatus: 0,
	},
};

//Home busca no localstorage quais propriedades estão como true e aplica em seus respectivos boxes dos módulos mostrando quais foram finalizados

window.addEventListener('load', () => {
	let i = 1;
	let moduloLocalstorage = localStorage.getItem(`completedModule + ${i}`);

	console.log(moduloLocalstorage);

	let modulos = document.querySelectorAll('.divindice');
	console.log(modulos);

	modulos.item;

	for (let index = 0; index < modulos.length; index++) {
		const element = modulos[index];

		if (element.classList.contains('divindice--completo')) {
			console.log(element);
		}
	}
});
