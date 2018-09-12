
app.openFile("fuselage_structure-v3.xml");

// make the wings transparent
app.scene.selectAll()
app.scene.setTransparency(90)

// draw shapes by uid
var uids = ["cargoCrossBeam1",
			"cargoCrossBeam2",
			"cargoCrossBeam3",
			"cargoCrossBeamStrut1",
			"cargoCrossBeamStrut2",
			"cargoCrossBeamStrut3",
			"cargoCrossBeamStrut4",
			"cargoCrossBeamStrut5",
			"cargoCrossBeamStrut6",
			"cargoCrossBeamStrut7",
			"cargoCrossBeamStrut8",
			"half_bulkhead",
			"holed_bulkhead",
			"simple_bulkhead",
			"longFloorBeam1",
			"longFloorBeam2"]
			   
for (i = 0; i < uids.length; i += 1) {
	drawShape(tigl.getShape(uids[i]))
}

// make a screenshopt
app.viewer.viewAxo()
app.viewer.fitAll()
app.viewer.makeScreenshot("fuselage_structure.jpg", true, 1600, 1200);

