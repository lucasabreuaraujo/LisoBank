const botaoCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]")
const EnviarFoto = document.querySelector("[data-enviar]")

let imagemURL = ""; 

botaoCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})

    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL("image/jpeg") 

    campoCamera.style.display = "none";
    mensagem.style.display = "block"
})

EnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converteRetorno = JSON.parse(receberDadosExistentes)

    converteRetorno.imagem = imagemURL

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html"
})