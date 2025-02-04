FROM alpine:latest

# Installa le dipendenze necessarie
RUN apk add --no-cache curl imagemagick imagemagick-dev libjpeg-turbo-dev libpng-dev libwebp-dev

# Crea una directory di lavoro
WORKDIR /app

# Copia lo script nella directory di lavoro
COPY download_resize.sh /app/download_resize.sh

# Rendi eseguibile lo script
RUN chmod +x /app/download_resize.sh

# Imposta il comando di default per eseguire lo script
ENTRYPOINT ["/app/download_resize.sh"]
