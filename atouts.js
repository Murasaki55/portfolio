buttons = document.querySelectorAll('.buttAtout')
divText = document.querySelector('#atout')
footer = document.querySelector('footer')

footer.style.position = "static"

buttons.forEach(button => {

    button.addEventListener('click',() =>{
        nom = button.innerText
        divText.innerHTML = ""
        footer.style.position = "absolute"

        if (nom == "Atouts Informatiques")
        {
            footer.style.position = "static"
            divText.innerHTML += '<ul><li class="litheme">Langage Informatique :</li><ul class="uldetail">    <li class="lidetail">C# : niveau avancé (POO, création d’API, d’application Console et d’application WPF)</li>    <li class="lidetail"><a class="lien" href="./stagesPro.html">Python</a> : maîtrise pour la création d’algorithmes et d’applications console comme avec interface graphique</li>    <li class="lidetail">WLangage : bases solides (création d’application)</li>    <li class="lidetail">HTML/CSS : niveau avancé (création de sites web, application desktop)</li>    <li class="lidetail">Java Script : bases solides (création de sites web, application desktop)</li>    <li class="lidetail">PHP : bases solides (création de sites web)</li></ul><li class="litheme">Framework : </li><ul class="uldetail">    <li class="lidetail"><a class="lien" href="./Competences/realiser1.html">.Net</a> : niveau avancé pour toutes applications en C# et WPF</li>    <li class="lidetail"><a class="lien" href="./Competences/realiser2.html">Laravel</a> : bonnes connaissances du framework PHP</li>    <li class="lidetail">Électron : bases solides (création d’application desktop)</li>    <li class="lidetail"><a class="lien" href="./stagesPro.html">Windev</a> : bases solides (application desktop)</li>    <li class="lidetail">Phaser : bases solides (création d’un jeu dans un site web)</li></ul><li class="litheme">Base de données</li><ul class="uldetail">    <li class="lidetail"><a class="lien" href="./Competences/gerer1.html">PostgreSQL</a> : niveau avancé (création et manipulation de base de données, création de requêtes complexes)</li>    <li class="lidetail"><a class="lien" href="./stagesPro.html">HFSQL</a> : bases solides (création et manipulation de données)</li>    <li class="lidetail">SQLite : bases solides (création et manipulation de données)</li></ul></ul>'
            
        }

        else if(nom == "Langues étrangères")
        {
            divText.innerHTML += '<ul>'
            divText.innerHTML += '    <li>Anglais : Niveau B1 (scolaire et professionnel – autonomie dans des contextes connus)</li>'
            divText.innerHTML += '    <li>Espagnol : Niveau A2 (scolaire – échanges simples et quotidiens)</li>'
            divText.innerHTML += '    <li>Japonais : Niveau A0 (Aucun contact préalable avec la langue — ne comprend ni ne produit de phrases simples.)</li>'
            divText.innerHTML += '</ul>'
        }

        else if(nom == "Soft skills")
        {
            divText.innerHTML +=  '<ul>'
            divText.innerHTML +=  '    <li>Curiosité : volonté d’apprendre et de comprendre.</li>'
            divText.innerHTML +=  '    <li>Travail et esprit d'+"'"+'équipe : interagir et collaborer au sein d'+"'"+'une équipe.</li>'
            divText.innerHTML +=  '    <li>Organisation : priorisation et organisation des tâches.</li>'
            divText.innerHTML +=  '</ul>'
        }

    })

});