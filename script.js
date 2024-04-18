const btn = document.querySelector(".btn-generar");
      const form = document.querySelector(".form");
      const codeContainer = document.querySelector(".list-code");
      const questionLabel = document.querySelector(".code-question");
      let codigos = [];
      let question;

      btn.addEventListener("click", () => {
        codigos = [];
        question = Math.floor(Math.random() * 40) + 1;
        for (let i = 0; i < 40; i++) {
          const code = Math.floor(Math.random() * 9999)
            .toString()
            .padStart(4, "0");
          if (!codigos.includes(code)) {
            codigos.push(code);
          }
        }
        codeContainer.innerHTML = codigos
          .map((code) => `<li> = ${code}</li>`)
          .join("");
        questionLabel.textContent = `Ingresa el codigo: ${question}`;
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inp = e.target.querySelector(".inp");
        if (codigos[question - 1] === inp.value.trim()) {
          alert("Codigo correcto");
          inp.value = "";
        } else if (inp.value.trim() === "") {
        } else {
          alert("codigo incorrecto");
          inp.value = "";
        }
      });