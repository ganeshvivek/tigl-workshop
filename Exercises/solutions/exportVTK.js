app.openFile("D150_8_guides_8_profiles.xml");
tigl.setExportOptions("vtk", "IncludeFarfield", true)
tigl.setExportOptions("vtk", "ApplySymmetries", false)
tigl.exportConfiguration("d150.vtk", true, 0.1)
app.close()