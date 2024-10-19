# Introdução
Tenha informações sobre uma conta do Instagram na palma da mão de forma **automatizada**. É algo simples, mas que resolvi fazer para testar o que aprendi em aulas relacionadas a API.

 - Informações coletadas:
 - [x] Nome do usuário;
 - [x]  Biografia;
 - [x] Checa se a conta é verificada;
 - [x] Verifica se a conta é privada ou não;
 - [x] Verifica quantas pessoas o usuário segue;
 - [x] Quantos seguidores o usuário possui;
 - [x] Link da foto de perfil;
 - [x] ID;
 - [x] Quantidade de videos/fotos publicados/as;
 - [ ] Informações sobre a localização;
 - [ ] Links adicionados na biografia do usuário;
 - [ ] Tipo de conta;
 - [ ] Retorna a lista de postagens fixadas;
 - [ ] Email público.
 

## Como usar?
Para poder testar o site, é necessário fazer o **registro/login** no site [rapidapi.com](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2/) para pegar uma 'API_KEY'. 
Após se registrar/logar, siga as seguintes etapas:

*Vá até o arquivo index.js  e altere "API__AQUI" por sua API real.*

```js
const  options  = {
    method:  'GET',
    headers: {
	'x-rapidapi-key':  'API__AQUI',
	'x-rapidapi-host':  'instagram-scraper-api2.p.rapidapi.com'
    }
}
```

Após colocar sua API, o que resta é testar.

<hr>

> Este é mais um daqueles projetos que criei pra deixar guardado no meu github e rir la na frente ;).
