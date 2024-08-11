function downloadImage(url) {
    let filename = url.substring(url.lastIndexOf('/') + 1);

    // Obtain emoji image file

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let aTag = document.createElement('a');
            aTag.href = url;

            // Trigger download action
            aTag.download = filename;
            document.body.appendChild(aTag);
            aTag.click();

            // Reset URL Object
            window.URL.revokeObjectURL(url);
        });
}

let emojiElements = document.querySelectorAll("#images-line .ytd-sponsorships-perk-renderer .yt-img-shadow");

emojiElements.forEach(function(emoji) {
    let emojiUrl = emoji.currentSrc;
    downloadImage(emojiUrl);
});
