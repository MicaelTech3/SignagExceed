function updateVideo() {
    const videoSelector = document.getElementById('videoSelector');
    const videoPlayer = document.getElementById('videoPlayer');
    const selectedVideo = videoSelector.value;

    if (selectedVideo) {
        videoPlayer.src = selectedVideo;
    } else {
        videoPlayer.src = ''; // Limpa o player se nenhum vídeo for selecionado
    }
}
