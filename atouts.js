buttons = document.querySelectorAll('.buttAtout')
divText = document.querySelector('#atout')

buttons.forEach(button => {

    button.addEventListener('click',() =>{
        nom = button.innerText
        divText.innerHTML = ""
        if (nom == "Atouts Informatiques")
        {
            divText.innerHTML += '<ul><li class="litheme">Langage Informatique :</li><ul class="uldetail"><li class="lidetail">'+"C# : niveau avancé (POO, création d'API, d'application Console et d'application WPF)</li>"+'<li class="lidetail">'+"Python : maîtrise pour la création d'algorithmes et d'applications console comme avec interface graphique</li>"+'<li class="lidetail">WLangage : bases solides '+"(création d'application)</li>"+'<li class="lidetail">HTML/CSS : niveau avancé (création de sites web, application desktop)</li><li class="lidetail">Java Script : bases solides (création de sites web, application desktop)</li><li class="lidetail">PHP : bases solides (création de sites web)</li></ul><li class="litheme">Framework : </li><ul class="uldetail"><li class="lidetail">.Net : niveau avancé pour toutes applications en C# et WPF</li><li class="lidetail">Laravel : bonnes connaissances du framework PHP</li><li class="lidetail">Électron : bases solides (création '+"d'application desktop)</li>"+'<li class="lidetail">Windev : bases solides (application desktop)</li><li class="lidetail">Phaser : bases solides '+"(création d'un jeu dans un site web)</li>"+'</ul><li class="litheme">Base de données</li><ul class="uldetail"><li class="lidetail">PostgreSQL : niveau avancé (création et manipulation de base de données, création de requêtes complexes)</li><li class="lidetail">HFSQL : bases solides (création et manipulation de données)</li><li class="lidetail">SQLite : bases solides (création et manipulation de données)</li></ul></ul>'
            
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