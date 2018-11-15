window.addEventListener('load', loadFn);

function loadFn () {
	var images = Array.from(document.querySelectorAll('img'));
	var overlay = document.querySelector('.overlay');

	images.forEach(function (image) {
		image.addEventListener('click', function () {
			overlay.classList.add('show');
			var imgContainer = document.createElement('div');
			imgContainer.setAttribute('class', 'overlay-img-cont');

			var newImage = document.createElement('img');
			newImage.setAttribute('src', this.getAttribute('src'));
			imgContainer.append(newImage);

			overlay.append(imgContainer);

			imgContainer.onclick = function () {
				overlay.innerHTML = '';
				overlay.classList.remove('show');
			};
		});
	});
}
