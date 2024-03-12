import matlab.engine
import time
import socket
import subprocess

host = 'localhost'
port = 16660

eng = matlab.engine.start_matlab()

eng.script(nargout=0)


print("Running...")

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    s.connect((host, port))
    msg = b"TestMgr load LaneChange.ts\rTestMgr start\r"
    s.send(msg)
    time.sleep(1)
    msg = s.recv(1024)
    time.sleep(1)
    msg = s.recv(1024)
    print("Test Series finished.")
    s.close()
except Exception as e:
    print(f"Error: {e}")


subprocess.check_output(["pkill", "-f", "/opt/ipg/carmaker/linux64-12.0.1/GUI/HIL.exe"])
