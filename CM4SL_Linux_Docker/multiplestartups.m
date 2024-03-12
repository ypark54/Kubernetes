run('cmenv');
cm_proj = 'C:\CM_Projects\batch run matlab';
%UserModel=generic
disp('User Folder Startup Script Launched');
load_system('generic');
evalin('base','Init_Test');
assignin('base', 'cm_apo_available', '0');
%Change to the folder containing all the startup scripts
files = dir(fullfile(cm_proj,'Startupfiles','BrakeVariation'));
for i=1:length(files) 
    if files(i).isdir == 0
        startup = files(i).name;
        startupDir = files(i).folder;
        startup_filename = fullfile(startupDir, startup);
        assignin('base', 'cm_startup_options', startup_filename);
        %cmguicmd('C:\CM_Projects\batch run matlab\Startupfiles\BrakeVariation\TMgr_Procs.tcl')
        disp('********** Simulation started with **********'); 
        disp(startup_filename);
        temp=evalin('base','cm_startup_options'); 
        disp(temp)
        sim('generic');
        
        cmcmd('shutdown'); 
        save_system('generic');
        disp('********** Simulation finished with **********'); 
        disp(startup_filename);
        clear cm_startup_options
        evalin('base','clear cm_startup_options')
    else
        disp('Skipping Directory')
    end
end