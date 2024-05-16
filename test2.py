import socket
import time

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('10.42.0.174', 3020)

sock.connect(server_address)

while ...:
    sock.sendall(b'Hello, World')
    time.sleep(1)