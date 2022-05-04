        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        const url = '/red_cm3.mp3';
        
        let audioSource = null;
        let playCtx = null;
        
        const eventName = typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup';
        document.addEventListener(eventName, () => {
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'arraybuffer';
            request.onload =  () => {
                ctx.decodeAudioData(request.response, (audioBuffer) => {
                    if(audioSource) {
                        audioSource.disconnect();
                        playCtx.close();
                    }
                    
                    playCtx = new AudioContext();
                    audioSource = playCtx.createBufferSource();
                    audioSource.buffer = audioBuffer;
                    audioSource.connect(playCtx.destination);
                    var w1;
        w1 = window.open('', '_blank', 'width=506, height=114');
        w1.document.open();
        w1.document.write("<html><head><title>http://www.geocities.co.jp/SiliconValley/4358/red_cm.swf</title><head>");
        w1.document.write("<meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'>");
        w1.document.write("<style>body {background-image: url('red_cm3.png');background-size: cover;background-attachment: fixed;background-position: center center;}");
        w1.document.write("</style></head><body onMouseDown='return false;' onSelectStart='return false' onContextmenu='return false'>");
        //w1.document.write("<audio id='main' src='red_cm3.mp3' autoplay></audio>");
        //w1.document.write("<iframe src='red_cm3.mp3' allow='autoplay' id='audio' style='display: none'></iframe>");
        w1.document.write("</body></html>");
        w1.document.close();
                    audioSource.start();
                });
            }
            request.send();
        });