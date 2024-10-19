/*
    ANTES DE VER O CÓDIGO, LEIA:
    caso queira testar o site, é necessário a chave da API para ter êxito na busca.
    Abra este link: https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2
*/


document.addEventListener('DOMContentLoaded', function() {
    const info = document.querySelectorAll('.info');
    info.forEach(info => {
        info.style.display = 'none';
    });
});


async function search() {
    const info = document.querySelectorAll('.info');
    info.forEach(info => {
        info.style.display = 'block';
    });


    const username = document.querySelector('#username')

    if (username.value === '') {
        alert('You need to provide a username')
        info.forEach(info => {
            info.style.display = 'none'
        })
    }

    const apiLink = `https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${username.value}`

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'API__AQUI',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    }

    // definindo os paragrafos para preenche-los
    const name = document.querySelector('#name')
    const verified = document.querySelector('#verified')
    const private = document.querySelector('#private')
    const biography = document.querySelector('#biography')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const pfp = document.querySelector('#pfp__link')
    const id = document.querySelector('#user__id')
    const media = document.querySelector('#media__count')

    //definindo paragrafo com mensagem de erro
    const error = document.querySelector('#error__msg')

    try {
        const resp = await fetch(apiLink, options)
        const result = await resp.json()
        const final__result = result.data

        // console.log(final__result.media_count)

        name.innerHTML = final__result.full_name
        verified.innerHTML = final__result.is_verified ? 'Yes' : 'No'
        private.innerHTML = final__result.is_private ? 'Yes' : 'No'
        biography.innerHTML = final__result.biography ? `"${final__result.biography}"` : `This person doesn't have a bio.`
        followers.innerHTML = final__result.follower_count
        following.innerHTML = final__result.following_count
        pfp.innerHTML = `<a href="${final__result.profile_pic_url_hd}" style="color: #FCB045;" target="_blank">Check it out!</a>`
        id.innerHTML = final__result.id
        media.innerHTML = final__result.media_count

        console.log(final__result.id)
    } catch (e) {
        error.hidden = false
        setTimeout(() => {
            error.hidden = true
        }, 2500)

        // console.log(e)
    }
}



