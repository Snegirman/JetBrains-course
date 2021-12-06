window.onload = function () {
    const disElemsChb = document.getElementsByClassName("dis");
    const disElemsLevers = document.getElementsByClassName("lever");
    const password = document.getElementById("pass");
    const ok = document.getElementById("passOk");
    const launchBtn = document.getElementById("launch");
    const rocket = document.getElementById("rocket");


    function isTrue (element) {
        return element === true;
    }

    function checkLaunchActivate () {
        let chb = [];
        let levers = [];
          for (let i = 0; i < disElemsChb.length; i++) {
              chb.push(disElemsChb[i].checked);
        }
          for (let k = 0; k < disElemsLevers.length; k++) {
              levers.push(disElemsLevers[k].value === "100")
            }
          if ((chb.every(isTrue)) && levers.every(isTrue)) {
              launchBtn.removeAttribute("disabled")
          }
        }

    function disablePanel() {
        for (let i = 0; i < disElemsChb.length; i++) {
            disElemsChb[i].setAttribute('disabled','')
            disElemsChb[i].onchange = checkLaunchActivate
        }
        for (let i = 0; i < disElemsLevers.length; i++) {
            disElemsLevers[i].setAttribute('disabled','')
            disElemsLevers[i].onchange = checkLaunchActivate
        }
        launchBtn.setAttribute('disabled', '')
    }

    function enablePanel() {
        if (password.value === 'TrustNo1') {
            for (let i = 0; i < disElemsChb.length; i++) {
                disElemsChb[i].removeAttribute("disabled")
            }
            for (let i = 0; i < disElemsLevers.length; i++) {
                disElemsLevers[i].removeAttribute("disabled")
            }
        }
    }

    ok.addEventListener('click', enablePanel);
    launchBtn.addEventListener('click', () => {
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            rocket.style.left = timePassed / 5 + 'px';
            rocket.style.bottom = timePassed / 5 + 'px';
            if (timePassed > 4000) clearInterval(timer);
        }, 20)
    });
    disablePanel();
}