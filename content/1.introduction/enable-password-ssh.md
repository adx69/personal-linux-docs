## Allow password authentication for SSH

By default, SSH server is configured to use public key authentication. If you want to allow password authentication, you can do so by editing the SSH configuration file.

#### Open the SSH configuration file in a text editor. For example, to open the file in the `nano` text editor, run the following command:
```bash
sudo nano /etc/ssh/sshd_config
```

#### Find the line that looks like this:
```bash
PasswordAuthentication yes
```
If the line is commented out (it starts with a `#`), remove the `#` character from the beginning of the line. Save the file and exit the text editor.

#### Comment out the following line:
```bash
Include /etc/ssh/ssh_config.d/*.conf
```
```bash
#Include /etc/ssh/ssh_config.d/*.conf
```

#### Restart the SSH server to apply the changes:
```bash
sudo systemctl restart sshd
```