FROM archlinux

RUN pacman -Syyu --noconfirm
RUN pacman -S --noconfirm git nodejs npm yarn zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended