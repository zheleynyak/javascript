// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i < 11; i++) {
	document.write(`
		<div>
			<p>Lorem ipsum dolor. index ${i}</p>
		</div>
	`);
}