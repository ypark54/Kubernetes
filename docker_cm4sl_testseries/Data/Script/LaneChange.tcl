proc MyStartProc {key name args} {
     #Log "MyStartProc $key $name $args"
    switch $key {

      TestSeries      { }
      Group           { }
      TestRunGroup    { 
                         if {[file tail $name] == "LaneChange_ISO"} { PylonWidth_ISO }
                         if {[file tail $name] == "LaneChange_VDA"} { PylonWidth_VDA }
                      }
      TestRun         {
                         if {[file tail $name] == "LaneChange_ADAC"} { PylonWidth_ADAC }
                         if {[file tail $name] == "LaneChange_AMS"}  { MyDeleteFunction }
                         if {[file tail $name] == "LaneChange_ADAC"} { MyDeleteFunction }
                      }
    }
}

proc MyEndProc {key name args} {
    # Log "MyEndProc $key $name $args"
    switch $key {
      TestSeries      { }
      Group           { }
      TestRunGroup    { }
      TestRun         {
                        #Skip TestSeries to end of the Group, if Test Result turns "bad"
                        if {[TestMgr get Result] != "good"} {
                            TestMgr::SkipToEnd TestRunGroup
                        }
                      }
    }
}


proc PylonWidth_ISO { } {
    set TS::Sect_1 [expr ($TS::Vehicle_Width * 1.1) + 0.25]
    set TS::Sect_2 [expr ($TS::Vehicle_Width * 1.2) + 0.25]
    set TS::Sect_3 [expr ($TS::Vehicle_Width * 1.3) + 0.25]
    set TS::Lateral_Offset 3.5

    NamedValue set Width_1stSect $TS::Sect_1
    NamedValue set Width_2ndSect $TS::Sect_2
    NamedValue set Width_3rdSect $TS::Sect_3
    NamedValue set Lateral_Offset $TS::Lateral_Offset

    Log "ISO Lane Change Maneuver"
    Log "Width of Entry section: %.2f m" $TS::Sect_1
    Log "Width of avoidance section: %.2f m" $TS::Sect_2
    Log "Width of Exit section: %.2f m" $TS::Sect_3
    Log "Lateral Lane Offset : %.2f m" $TS::Lateral_Offset
}

proc PylonWidth_VDA { } {
    set TS::Sect_1 [expr ($TS::Vehicle_Width * 1.1) + 0.25]
    set TS::Sect_2 [expr ($TS::Vehicle_Width + 1.0)]
    set TS::Sect_3 [expr ($TS::Vehicle_Width * 1.3) + 0.25]
    if {$TS::Sect_3<3} { set TS::Sect_3 3.0 }

    set TS::Lateral_Offset [expr 1+ [expr ($TS::Sect_1/2) + ($TS::Sect_2/2)]]


    NamedValue set Width_1stSect $TS::Sect_1
    NamedValue set Width_2ndSect $TS::Sect_2
    NamedValue set Width_3rdSect $TS::Sect_3
    NamedValue set Lateral_Offset $TS::Lateral_Offset

    Log "VDA Lane Change Maneuver"
    Log "Width of VDA Entry section: %.2f m" $TS::Sect_1
    Log "Width of VDA avoidance section: %.2f m" $TS::Sect_2
    Log "Width of VDA Exit section: %.2f m" $TS::Sect_3
    Log "VDA Lane Offset : %.2f m" $TS::Lateral_Offset
}

proc PylonWidth_ADAC { } {
    Log "Calculation of ADAC lane width and offset"
    set TS::Sect_1 [expr ($TS::Vehicle_Width * 1.1) + 0.25]
    set TS::Sect_1_Last [expr (($TS::Vehicle_Width * 1.1) + 0.25 + 5)]
    set Offset_Width 4.5
    set TS::Lateral_Offset1 [expr 2.7+ [expr ($TS::Sect_1/2) + ($Offset_Width/2)]]
    set TS::Lateral_Offset2 [expr ([expr ($TS::Sect_1/2) + 4.7] -($Offset_Width/2))]

    NamedValue set Width_1stSect $TS::Sect_1
    NamedValue set Width_1stSectLast $TS::Sect_1_Last
    NamedValue set Lateral_Offset_Width $Offset_Width
    NamedValue set Lateral_Offset1 $TS::Lateral_Offset1
    NamedValue set Lateral_Offset2 $TS::Lateral_Offset2


    Log "ADAC Lane Change Maneuver"
    Log "Width of Entry section: %.2f m" $TS::Sect_1

    Log " Lane Offset1 : %.2f m" $TS::Lateral_Offset1
    Log " Lane Offset2 : %.2f m" $TS::Lateral_Offset2
}

proc MyDeleteFunction {} {

if {[NamedValue exist Width_1stSect]} {NamedValue del Width_1stSect}
if {[NamedValue exist Width_2ndSect]} {NamedValue del Width_2ndSect}
if {[NamedValue exist Width_3rdSect]} {NamedValue del Width_3rdSect}
if {[NamedValue exist Lateral_Offset]} {NamedValue del Lateral_Offset}

}
