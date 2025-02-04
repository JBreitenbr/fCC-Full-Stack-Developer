const textInput = document.getElementById("text-input");

    const charCount = document.getElementById("char-count");

    const counter = () => {
    const textLength = textInput.value.split("").length;

    if (textLength >= 50){
      textInput.value = textInput.value.slice(0,50)
      }
    charCount.textContent = `Character Count: ${textLength}/50`;

        if (textLength === 50){
          charCount.style.color="red";
        
            }
            else{
              charCount.style.color="navy";
                }

                }

                textInput.addEventListener("change", counter)
