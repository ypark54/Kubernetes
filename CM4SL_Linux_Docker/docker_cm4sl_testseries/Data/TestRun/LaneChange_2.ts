#INFOFILE1.1 (UTF-8) - Do not remove this line!
FileIdent = CarMaker-TestSeries 12
FileCreator = CarMaker 12.0.1
Description:
	Variation of all typical lane change maneuvers. The width of the positioned pylons depends on the vehicle width. Calculation, see /Scripts/LaneChange.tcl. The Parameter Driver.MultiStep in the Global Settings is added for compatibility reasons.
LastChange = 2023-10-31 16:30:27 user
StartTime = 2023-10-30 18:18:12
EndTime = 2023-10-30 18:18:23
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.0.Param.0 = ScriptFile CM LaneChange.tcl
Step.0.Param.1 = StartProc CM MyStartProc
Step.0.Param.2 = EndProc CM MyEndProc
Step.0.Param.3 = Vehicle_Width TS 1.808
Step.0.Param.4 = PylonShiftBkCoef NValue 0.15
Step.0.Param.5 = PylonShiftFdCoef NValue 0.25
Step.0.Param.6 = Driver.MultiStep KValue 2
Step.1 = Vehicle
Step.1.Name = Examples/Demo_Peugeot_207CC
Step.1.Vehicle = Examples/Demo_Peugeot_207CC
Step.1.Trailer =
Step.1.Tires =
Step.1.Description:
Step.2 = TestRun
Step.2.Name = Examples/VehicleDynamics/Handling/LaneChange_ISO
Step.2.Param.0 = Speed NValue
Step.2.Crit.0.Name = Pylon Detection
Step.2.Crit.0.Description:
	Criteria is checking if a Scratchpad note exists for the event of a hit pylon. If the vehicle does not touch the pylon then the TestRun is considered to be good. Scratchpad notes are taken automatically by the simulation programm whenever a pylon was touched by the test car in a simulation.
Step.2.Crit.0.Good = [Scratchpad list PylonHit] == ""
Step.2.Crit.0.Warn =
Step.2.Crit.0.Bad =
Step.2.Var.0.Name = Variation 0
Step.2.Var.0.Param = 90
Step.2.Var.0.Result = good
Step.2.Var.0.ResDate = 1698657500
Step.2.Var.0.ManLst = 0:long0 0:long1 0:long2 0:long3 0:lat0 0:lat1 0:lat2 0:lat3
Step.2.Var.0.Crit.0.Ref = Pylon Detection
Step.2.Var.0.Crit.0.Result = good
Step.2.Var.1.Name = Variation 1
Step.2.Var.1.Param = 100
Step.2.Var.1.Result = err
Step.2.Var.1.ResDate = 1698657503
Step.2.Var.1.ManLst = 0:long0 0:lat0
Step.2.Var.1.Log.0.Time = 15.401
Step.2.Var.1.Log.0.Kind = err
Step.2.Var.1.Log.0.Text = Simulation stopped by user
Step.2.Var.2.Name = Variation 2
Step.2.Var.2.Param = 110
Step.2.Var.2.Result = bad
Step.2.Var.2.ResDate = 1543911218
Step.2.Var.2.ManLst = 0:long0 0:lat0 0:long1 0:lat1 0:long3 0:lat3
Step.2.Var.2.Crit.0.Ref = Pylon Detection
Step.2.Var.2.Crit.0.Result = bad
Step.2.Var.3.Name = Variation 3
Step.2.Var.3.Param = 120
Step.2.Var.3.Result = skip
Step.2.Var.3.ResDate = 1543911218
Step.2.Var.4.Name = Variation 4
Step.2.Var.4.Param = 130
Step.2.Var.4.Result = skip
Step.2.Var.4.ResDate = 1543911218
Step.2.Var.5.Name = Variation 0
Step.2.Var.5.Param = 90
Step.2.Var.6.Name = Variation 1
Step.2.Var.6.Param = 100
Step.2.Var.7.Name = Variation 2
Step.2.Var.7.Param = 110
Step.2.Var.8.Name = Variation 3
Step.2.Var.8.Param = 120
Step.2.Var.9.Name = Variation 4
Step.2.Var.9.Param = 130
Step.3 = Settings
Step.3.Name = Settings
Step.3.Param.0 = PylonShiftBkCoef TS 0.15
Step.3.Param.1 = PylonShiftFdCoef TS 0.25
Step.4 = TestRun
Step.4.Name = Examples/VehicleDynamics/Handling/LaneChange_VDA
Step.4.Param.0 = Speed NValue
Step.4.Crit.0.Name = Pylon Detection
Step.4.Crit.0.Description:
	Criteria is checking if a Scratchpad note exists for the event of a hit pylon. If the vehicle does not touch the pylon then the TestRun is considered to be good. Scratchpad notes are taken automatically by the simulation programm whenever a pylon was touched by the test car in a simulation.
Step.4.Crit.0.Good = [Scratchpad list PylonHit] == ""
Step.4.Crit.0.Warn =
Step.4.Crit.0.Bad =
Step.4.Var.0.Name = Variation 0
Step.4.Var.0.Param = 50
Step.4.Var.0.Result = good
Step.4.Var.0.ResDate = 1543911221
Step.4.Var.0.ManLst = 0:long0 0:lat0 0:long1 0:lat1 0:long2 0:lat2
Step.4.Var.0.Crit.0.Ref = Pylon Detection
Step.4.Var.0.Crit.0.Result = good
Step.4.Var.1.Name = Variation 1
Step.4.Var.1.Param = 55
Step.4.Var.1.Result = err
Step.4.Var.1.ResDate = 1543911224
Step.4.Var.1.ManLst = 0:long0 0:lat0 0:long1 0:lat1
Step.4.Var.1.Log.0.Time = 25.819
Step.4.Var.1.Log.0.Kind = err
Step.4.Var.1.Log.0.Text = Simulation ended with errors
Step.4.Var.1.Crit.0.Ref = Pylon Detection
Step.4.Var.1.Crit.0.Result = bad
Step.4.Var.2.Name = Variation 2
Step.4.Var.2.Param = 60
Step.4.Var.2.Result = skip
Step.4.Var.2.ResDate = 1543911224
Step.4.Var.2.Log.0.Time = 22.035
Step.4.Var.2.Log.0.Kind = err
Step.4.Var.2.Log.0.Text = Simulation ended with errors
Step.4.Var.3.Name = Variation 3
Step.4.Var.3.Param = 65
Step.4.Var.3.Result = skip
Step.4.Var.3.ResDate = 1543911224
Step.4.Var.4.Name = Variation 4
Step.4.Var.4.Param = 70
Step.4.Var.4.Result = skip
Step.4.Var.4.ResDate = 1543911224
Step.4.Var.5.Name = Variation 0
Step.4.Var.5.Param = 50
Step.4.Var.6.Name = Variation 1
Step.4.Var.6.Param = 55
Step.4.Var.7.Name = Variation 2
Step.4.Var.7.Param = 60
Step.4.Var.8.Name = Variation 3
Step.4.Var.8.Param = 65
Step.4.Var.9.Name = Variation 4
Step.4.Var.9.Param = 70
Step.5 = Settings
Step.5.Name = Settings
Step.5.Param.0 = PylonShiftBkCoef NValue 0
Step.5.Param.1 = PylonShiftFdCoef NValue 0
Step.6 = TestRun
Step.6.Name = Examples/VehicleDynamics/Handling/LaneChange_AMS
Step.6.Param.0 = Speed NValue
Step.6.Crit.0.Name = Pylon Detection
Step.6.Crit.0.Description:
	Criteria is checking if a Scratchpad note exists for the event of a hit pylon. If the vehicle does not touch the pylon then the TestRun is considered to be good. Scratchpad notes are taken automatically by the simulation programm whenever a pylon was touched by the test car in a simulation.
Step.6.Crit.0.Good = [Scratchpad list PylonHit] == ""
Step.6.Crit.0.Warn =
Step.6.Crit.0.Bad =
Step.6.Var.0.Name = Variation 0
Step.6.Var.0.Param = 80
Step.6.Var.0.Result = good
Step.6.Var.0.ResDate = 1543911228
Step.6.Var.0.ManLst = 0:long0 0:lat0
Step.6.Var.0.Crit.0.Ref = Pylon Detection
Step.6.Var.0.Crit.0.Result = good
Step.6.Var.1.Name = Variation 1
Step.6.Var.1.Param = 90
Step.6.Var.1.Result = good
Step.6.Var.1.ResDate = 1543911231
Step.6.Var.1.ManLst = 0:long0 0:lat0
Step.6.Var.1.Crit.0.Ref = Pylon Detection
Step.6.Var.1.Crit.0.Result = good
Step.6.Var.2.Name = Variation 2
Step.6.Var.2.Param = 100
Step.6.Var.2.Result = good
Step.6.Var.2.ResDate = 1543911234
Step.6.Var.2.ManLst = 0:long0 0:lat0
Step.6.Var.2.Crit.0.Ref = Pylon Detection
Step.6.Var.2.Crit.0.Result = good
Step.6.Var.3.Name = Variation 3
Step.6.Var.3.Param = 110
Step.6.Var.3.Result = bad
Step.6.Var.3.ResDate = 1543911237
Step.6.Var.3.ManLst = 0:long0 0:lat0
Step.6.Var.3.Crit.0.Ref = Pylon Detection
Step.6.Var.3.Crit.0.Result = bad
Step.6.Var.4.Name = Variation 4
Step.6.Var.4.Param = 120
Step.6.Var.4.Result = skip
Step.6.Var.4.ResDate = 1543911237
Step.6.Var.5.Name = Variation 0
Step.6.Var.5.Param = 80
Step.6.Var.6.Name = Variation 1
Step.6.Var.6.Param = 90
Step.6.Var.7.Name = Variation 2
Step.6.Var.7.Param = 100
Step.6.Var.8.Name = Variation 3
Step.6.Var.8.Param = 110
Step.6.Var.9.Name = Variation 4
Step.6.Var.9.Param = 120
Step.7 = Settings
Step.7.Name = Settings
Step.7.Param.0 = PylonShiftBkCoef NValue 0
Step.7.Param.1 = PylonShiftFdCoef NValue 0.0
Step.8 = TestRun
Step.8.Name = Examples/VehicleDynamics/Handling/LaneChange_ADAC
Step.8.Param.0 = Speed NValue
Step.8.Crit.0.Name = Pylon Detection
Step.8.Crit.0.Description:
	Criteria is checking if a Scratchpad note exists for the event of a hit pylon. If the vehicle does not touch the pylon then the TestRun is considered to be good. Scratchpad notes are taken automatically by the simulation programm whenever a pylon was touched by the test car in a simulation.
Step.8.Crit.0.Good = [Scratchpad list PylonHit] == ""
Step.8.Crit.0.Warn =
Step.8.Crit.0.Bad =
Step.8.Var.0.Name = Variation 0
Step.8.Var.0.Param = 60
Step.8.Var.0.Result = good
Step.8.Var.0.ResDate = 1543911240
Step.8.Var.0.ManLst = 0:long0 0:lat0 0:long1 0:lat1
Step.8.Var.0.Crit.0.Ref = Pylon Detection
Step.8.Var.0.Crit.0.Result = good
Step.8.Var.1.Name = Variation 1
Step.8.Var.1.Param = 70
Step.8.Var.1.Result = good
Step.8.Var.1.ResDate = 1543911244
Step.8.Var.1.ManLst = 0:long0 0:lat0 0:long1 0:lat1
Step.8.Var.1.Crit.0.Ref = Pylon Detection
Step.8.Var.1.Crit.0.Result = good
Step.8.Var.2.Name = Variation 2
Step.8.Var.2.Param = 80
Step.8.Var.2.Result = good
Step.8.Var.2.ResDate = 1543911247
Step.8.Var.2.ManLst = 0:long0 0:lat0 0:long1 0:lat1
Step.8.Var.2.Crit.0.Ref = Pylon Detection
Step.8.Var.2.Crit.0.Result = good
Step.8.Var.3.Name = Variation 3
Step.8.Var.3.Param = 90
Step.8.Var.3.Result = bad
Step.8.Var.3.ResDate = 1543911250
Step.8.Var.3.ManLst = 0:long0 0:lat0 0:long1 0:lat1
Step.8.Var.3.Crit.0.Ref = Pylon Detection
Step.8.Var.3.Crit.0.Result = bad
Step.8.Var.4.Name = Variation 4
Step.8.Var.4.Param = 100
Step.8.Var.4.Result = skip
Step.8.Var.4.ResDate = 1543911250
Step.8.Var.5.Name = Variation 0
Step.8.Var.5.Param = 60
Step.8.Var.6.Name = Variation 1
Step.8.Var.6.Param = 70
Step.8.Var.7.Name = Variation 2
Step.8.Var.7.Param = 80
Step.8.Var.8.Name = Variation 3
Step.8.Var.8.Param = 90
Step.8.Var.9.Name = Variation 4
Step.8.Var.9.Param = 100
TS.Lateral_Offset = 3.5
TS.Lateral_Offset1 = 6.0694
TS.Lateral_Offset2 = 3.5694
TS.PylonShiftBkCoef = 0.15
TS.PylonShiftFdCoef = 0.25
TS.Sect_1 = 2.2388000000000003
TS.Sect_1_Last = 7.2388
TS.Sect_2 = 2.4196
TS.Sect_3 = 2.6004
TS.Vehicle_Width = 1.808
