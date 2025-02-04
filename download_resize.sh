#!/bin/sh

# Controlla se sono stati passati abbastanza argomenti
if [ "$#" -lt 1 ]; then
    echo "Uso: $0 <URL> [directory_output] [dimensione]"
    echo "Esempio: $0 https://example.com/image.jpg ./output 800x600"
    exit 1
fi

# Assegna i parametri
URL="$1"
OUTPUT_DIR="${2:-.}"  # Se non specificato, usa la directory corrente
SIZE="${3:-800x600}"  # Se non specificato, usa 800x600 di default
WATERMARK="$4"

# Estrai il nome del file dalla URL
FILENAME=$(basename "$URL")
TEMP_FILE="/tmp/$FILENAME"
OUTPUT_FILE="$OUTPUT_DIR/$FILENAME"

# Scarica l'immagine in un file temporaneo
curl -o "$TEMP_FILE" "$URL"
if [ $? -ne 0 ]; then
    echo "Errore nel download dell'immagine."
    exit 1
fi

echo "Immagine scaricata come $TEMP_FILE"

# Controlla se ImageMagick è installato
if ! command -v convert &> /dev/null; then
    echo "Errore: ImageMagick non è installato. Installa con: brew install imagemagick (Mac) o sudo apt install imagemagick (Linux)"
    exit 1
fi

# Assicura che la directory di output esista
mkdir -p "$OUTPUT_DIR"

# Ridimensiona l'immagine e salva con il nome originale nella directory di output
convert "$TEMP_FILE" -resize "$SIZE" "$OUTPUT_FILE"
if [ $? -ne 0 ]; then
    echo "Errore nel ridimensionamento dell'immagine."
    exit 1
fi

# Aggiunge la filigrana semitrasparente in più posizioni mantenendo la trasparenza
if [ -f "$WATERMARK" ]; then
    # convert "$WATERMARK" -resize 30% -alpha set -channel A -evaluate multiply 0.5 +channel /tmp/watermark.png
    # convert "$OUTPUT_FILE" \
    #     /tmp/watermark.png -gravity center -composite \
    #     /tmp/watermark.png -gravity northwest -composite \
    #     /tmp/watermark.png -gravity northeast -composite \
    #     /tmp/watermark.png -gravity southwest -composite \
    #     /tmp/watermark.png -gravity southgdeast -composite \
    #     -alpha set "$OUTPUT_FILE"

    convert "$WATERMARK" -alpha set -channel A -evaluate multiply 0.25 +channel /tmp/watermark.png
    convert "$OUTPUT_FILE" \
        /tmp/watermark.png -gravity center -composite \
        -alpha set "$OUTPUT_FILE"
fi

# Rimuove il file temporaneo
rm "$TEMP_FILE"

echo "Immagine ridimensionata salvata come $OUTPUT_FILE"
