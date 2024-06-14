function formatarNome(nome) {
    return nome.toLowerCase() // Transforma tudo em minúsculo
              .split(' ') // Divide o nome em palavras
              .map(palavra => palavra.charAt(0).toUpperCase() + palavra.substring(1)) // Capitaliza a primeira letra de cada palavra
              .join(' '); // Junta as palavras de volta em uma string
}