
function rotate_x(p,angleRad) {
    return new Point3d(
        p.x,
        p.y*Math.cos(angleRad) - p.z*Math.sin(angleRad),
        p.y*Math.sin(angleRad) + p.z*Math.cos(angleRad)
    );
}

function rotate_z(p,angleRad) {
    return new Point3d(
        p.x*Math.cos(angleRad) - p.y*Math.sin(angleRad),
        p.x*Math.sin(angleRad) + p.y*Math.cos(angleRad),
        p.z
    );
}

function rotate_y(p,angleRad) {
    return new Point3d(
        p.x*Math.cos(angleRad) + p.z*Math.sin(angleRad),
        p.y,
        -p.x*Math.sin(angleRad) + p.z*Math.cos(angleRad)
    );
}

function radians(angle) {
    return angle/180. * Math.PI;
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function mix(a, b, p) {
    return (1. - p)*a + p*b;
}

counter = 0;
function writeScreenshot() {
    countStr = pad(counter, 4);
    app.viewer.makeScreenshot("image_" + countStr + ".jpg", false);

    counter += 1;
}



app.scene.deleteAllObjects();
app.openFile("Ariane.xml");
app.viewer.setBackgroundColor(0,0,0)
app.scene.gridOff()

startZoom = 15.
endZoom = 20.8 //22.5
startRot = 0.
endRot = 360.+90.


app.viewer.setBGImage("");
center = new Point3d(27, 0.2, 0)
camPosStart = new Point3d(0, 1, 0)
upAngleStart = 70

app.viewer.setLookAtPosition(center.x, center.y, center.z);

app.viewer.zoom(startZoom);
app.scene.selectAll();

for (p = 0; p <= 1; p += 0.01333333333333) {
    angleRad1 = radians(mix(startRot, endRot, p))
    upAngle = radians(mix(upAngleStart, 0., p))
    zoom = mix(startZoom, endZoom, p)
	
	// coordinate transform
    camPos = rotate_x(camPosStart, angleRad1).add(center)
    app.viewer.setCameraPosition(camPos.x, camPos.y, camPos.z);
    camUpStart = rotate_y(new Point3d(0, 0, -1), upAngle)
    upVec = rotate_x(camUpStart, angleRad1)
    app.viewer.setCameraUpVector(upVec.x, upVec.y, upVec.z);
    app.viewer.zoom(zoom);
    writeScreenshot();

}

app.viewer.zoom(endZoom);

// blend cpacs geometry to true image of arianne
app.viewer.setBGImage("ariane.png");
for (p = 0.; p <= 1; p += 1./25.) {
    trans = mix(0., 100., p)
    app.viewer.setTransparency(trans);
    writeScreenshot();
}

// just wait for a second
for (p = 0.; p <= 1; p += 1./25.) {
    writeScreenshot();
}
