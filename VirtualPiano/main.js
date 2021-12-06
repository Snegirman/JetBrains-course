document.addEventListener("keydown", function () {
        switch (event.code) {
            case "KeyA":
                const audioA = new Audio("white_keys/A.mp3");
                audioA.play()
                break;
            case "KeyS":
                const audioS = new Audio("white_keys/S.mp3");
                audioS.play()
                break;
            case "KeyD":
                const audioD = new Audio("white_keys/D.mp3");
                audioD.play()
                break;
            case "KeyF":
                const audioF = new Audio("white_keys/F.mp3");
                audioF.play()
                break;
            case "KeyG":
                const audioG = new Audio("white_keys/G.mp3");
                audioG.play()
                break;
            case "KeyH":
                const audioH = new Audio("white_keys/H.mp3");
                audioH.play()
                break;
            case "KeyJ":
                const audioJ = new Audio("white_keys/J.mp3");
                audioJ.play()
                break;
            case "KeyW":
                const audioW = new Audio("black_keys/W.mp3");
                audioW.play()
                break;
            case "KeyE":
                const audioE = new Audio("black_keys/E.mp3");
                audioE.play()
                break;
            case "KeyT":
                const audioT = new Audio("black_keys/T.mp3");
                audioT.play()
                break;
            case "KeyY":
                const audioY = new Audio("black_keys/Y.mp3");
                audioY.play()
                break;
            case "KeyU":
                const audioU = new Audio("black_keys/U.mp3");
                audioU.play()
                break;
        }
    })