BABYLON.Tools.DumpFramebuffer = function (width, height, engine)
{
	console.log("MY version of DumpFramebuffer - Activated!");
	// Read the contents of the framebuffer
	var numberOfChannelsByLine = width * 4;
	var halfHeight = height / 2;
	//Reading datas from WebGL
	var data = engine.readPixels(0, 0, width, height);
	for (var i = 0; i < halfHeight; i++)
	{
		for (var j = 0; j < numberOfChannelsByLine; j++)
		{
			var currentCell = j + i * numberOfChannelsByLine;
			var targetLine = height - i - 1;
			var targetCell = j + targetLine * numberOfChannelsByLine;
			var temp = data[currentCell];
			data[currentCell] = data[targetCell];
			data[targetCell] = temp;
		}
	}
	// Create a 2D canvas to store the result
	var screenshotCanvas;
	if (!screenshotCanvas)
	{
		screenshotCanvas = document.createElement('canvas');
	}
	screenshotCanvas.width = width;
	screenshotCanvas.height = height;
	var context = screenshotCanvas.getContext('2d');
	// Copy the pixels to a 2D canvas
	var imageData = context.createImageData(width, height);
	//cast is due to ts error in lib.d.ts, see here - https://github.com/Microsoft/TypeScript/issues/949
	var castData = imageData.data;
	castData.set(data);
	context.putImageData(imageData, 0, 0);
	//return imageData.data;
	return data;
};