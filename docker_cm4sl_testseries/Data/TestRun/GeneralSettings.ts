#INFOFILE1.1 (UTF-8) - Do not remove this line!
FileIdent = CarMaker-TestSeries 12
FileCreator = CarMaker 12.0.1
Description:
	TestSeries demonstrates the IPGDriver abilities to cut corners, run a specific speed target, and behave according to a acceleration/decceleration setup.
LastChange = 2023-10-30 17:50:33 user
StartTime = 2017-03-01 14:44:37
EndTime = 2017-03-01 14:45:01
ReportTemplate =
Step.0 = Settings
Step.0.Name = Global Settings
Step.0.Param.0 = CruisingSpeed NValue 150
Step.1 = Vehicle
Step.1.Name = DemoCar
Step.1.Vehicle = Examples/DemoCar
Step.1.Trailer =
Step.1.Tires =
Step.1.Description:
Step.2 = Group
Step.2.Name = Corner Cutting
Step.2.0 = TestRun
Step.2.0.Name = Examples/BasicFunctions/Driver/HandlingCourse
Step.2.0.Param.0 = CCC NValue
Step.2.0.Diag.0.Name = RoadDeviation
Step.2.0.Diag.0.Type = Line Diagram
Step.2.0.Diag.0.Mode = Quantity vs Quantity
Step.2.0.Diag.0.VarOpt = 1
Step.2.0.Diag.0.Grid = Both
Step.2.0.Diag.0.NAxes = 1
Step.2.0.Diag.0.RefFile =
Step.2.0.Diag.0.Pic =
Step.2.0.Diag.0.Param1.0 = Auto 0 800 Distance
Step.2.0.Diag.0.Param1.1 = Auto {} {} {Deviation from road center}
Step.2.0.Diag.0.Param2.0 = Car.Distance {} {} {}
Step.2.0.Diag.0.Param2.1 = Car.Road.Path.DevDist {} {} {}
Step.2.0.Diag.0.Param3.0 = {} {} {} {}
Step.2.0.Diag.0.Param3.1 = {} {} {} {}
Step.2.0.Diag.0.Param3.2 = {} {} {} {}
Step.2.0.Var.0.Name = CCC = 0
Step.2.0.Var.0.Param = 0
Step.2.0.Var.1.Name = CCC = 0.25
Step.2.0.Var.1.Param = 0.25
Step.2.0.Var.2.Name = CCC = 0.5
Step.2.0.Var.2.Param = 0.5
Step.2.0.Var.3.Name = CCC = 0.75
Step.2.0.Var.3.Param = 0.75
Step.2.0.Var.4.Name = CCC = 1
Step.2.0.Var.4.Param = 1
Step.3 = Group
Step.3.Name = Switch between Acceleration and Decceleration
Step.3.0 = Settings
Step.3.0.Name = Settings
Step.3.0.Param.0 = CruisingSpeed NValue 150
Step.3.1 = TestRun
Step.3.1.Name = Examples/BasicFunctions/Driver/HandlingCourse
Step.3.1.Param.0 = CCC NValue
Step.3.1.Param.1 = AccelDecel NValue
Step.3.1.Diag.0.Name = dt_Acceleration_Deceleration
Step.3.1.Diag.0.Type = Line Diagram
Step.3.1.Diag.0.Mode = Quantity vs Quantity
Step.3.1.Diag.0.VarOpt = 1
Step.3.1.Diag.0.Grid = None
Step.3.1.Diag.0.NAxes = 1
Step.3.1.Diag.0.RefFile =
Step.3.1.Diag.0.Pic =
Step.3.1.Diag.0.Param1.0 = Auto {} {} Car.Distance
Step.3.1.Diag.0.Param1.1 = Auto {} {} {Acceleration x}
Step.3.1.Diag.0.Param2.0 = Car.Distance {} {} {}
Step.3.1.Diag.0.Param2.1 = Car.ax {} {} {}
Step.3.1.Diag.0.Param3.0 = {} {} {} {}
Step.3.1.Diag.0.Param3.1 = {} {} {} {}
Step.3.1.Diag.0.Param3.2 = {} {} {} {}
Step.3.1.Var.0.Name = 4s_AccelDecel
Step.3.1.Var.0.Param = {} 4
Step.3.1.Var.1.Name = 12s_AccelDecel
Step.3.1.Var.1.Param = {} 12
