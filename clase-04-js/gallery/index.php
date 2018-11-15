<?php $images = glob("images/*.jpg"); ?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
	<head>
		<meta charset="utf-8">
		<title>Image Gallery</title>
		<link rel="stylesheet" href="css/app.css">
	</head>
	<body>
		<div class="container">
			<ul class="images-list">
				<?php foreach ($images as $image): ?>
					<li><img src="<?= $image ?>" alt="thumbnail"></li>
				<?php endforeach; ?>
			</ul>
		</div>

		<div class="overlay"></div>

		<script src="js/app.js"></script>
	</body>
</html>
