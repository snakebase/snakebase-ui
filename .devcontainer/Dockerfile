FROM archlinux

# Update the system
RUN pacman -Syyu --noconfirm

# Install Git, NodeJS and Yarn
RUN pacman -S --noconfirm git nodejs yarn

# Install Zsh and OhMyZsh
RUN pacman -S --noconfirm zsh
RUN echo "if [ -t 1 ]; then" >> /root/.bashrc
RUN echo "exec zsh" >> /root/.bashrc
RUN echo "fi" >> /root/.bashrc
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
