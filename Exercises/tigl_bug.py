from tigl3 import tigl3wrapper
from tixi3 import tixi3wrapper

tixi = tixi3wrapper.Tixi3()
tigl = tigl3wrapper.Tigl3()

tixi.open("simpletest.cpacs.xml")
tigl.open(tixi,'')

nWings = tigl.getWingCount()
print("\nThe airplane has {} wings.".format(nWings))