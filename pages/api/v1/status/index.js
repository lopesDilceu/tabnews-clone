function status(request, response) {
  response.status(200).json({ "key": "Teste de caracteres que são enviados" });
}

export default status;