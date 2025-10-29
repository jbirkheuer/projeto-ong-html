export function setupFormValidation() {
  const form = document.getElementById('cadastroForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    alert('Formulário enviado (simulação)');
    console.log(Object.fromEntries(new FormData(form)));
    form.reset();
  });
}