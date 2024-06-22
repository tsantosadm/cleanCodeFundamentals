// Sempre nomear as variáveis pela causa e nunca pelo efeito

function Button() {
//error
    const isButtonDisabled = true;

//correct
    const isFormSubmitting = true;

  return (
          //error
          <div>
              <button disabled={isButtonDisabled}>
                  <span></span>
                  {isButtonDisabled ? "Carregando..." : "Enviar"}
              </button>
          </div>
        //correct
          <div>
              <buttton disabled={isFormSubmitting}>
                <span></span>
                {isFormSubmitting ? "Carregando..." : "Enviar"}
              </buttton>
          </div>
  );
}
