buttons = document.querySelectorAll('.buttCompet')
divText = document.querySelector('#compétences')

buttons.forEach(button => {

    button.addEventListener('click',() =>{
        nom = button.innerText
        divText.innerHTML = ""
        if (nom == "Réaliser")
        {
            divText.innerHTML += '<h3>Réaliser un développement d’application</h3><h4>Niveau 1 : Développer des applications informatiques simples</h4>'
            divText.innerHTML += '<p>AC11.01 | Implémenter des conceptions simples</p>'
            divText.innerHTML += '<p>AC11.02 | Élaborer des conceptions simples</p>'
            divText.innerHTML += '<p>AC11.03 | Faire des essais et évaluer leurs résultats en regard des spécifications</p>'
            divText.innerHTML += '<p> AC11.04 | Développer des interfaces utilisateurs</p>'

            divText.innerHTML += "<h4>Niveau 2 : Partir des exigences et aller jusqu'à une application complète</h4>"
            divText.innerHTML += '<p>AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences</p>'
            divText.innerHTML += "<p>AC21.02 | Appliquer des principes d'accessibilité et d'ergonomie</p>"
            divText.innerHTML += '<p>AC21.03 | Adopter de bonnes pratiques de conception et de programmation</p>'
            divText.innerHTML += '<p>AC21.04 | Vérifier et valider la qualité de l’application par les tests</p>'

            divText.innerHTML += '<h4>Niveau3 : Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT ...)</h4>'
            divText.innerHTML += '<p>AC31.01 | Choisir et implémenter les architectures adaptées</p>'
            divText.innerHTML += '<p>AC31.02 | Faire évoluer une application existante</p>'
            divText.innerHTML += '<p>AC31.03 | Intégrer des solutions dans un environnement de production</p>'
            
        }

        else if(nom == "Optimiser")
        {
            divText.innerHTML += '<h3>Optimiser des applications informatiques</h3><h4>Niveau 1 : Appréhender et construire des algorithmes</h4>'
            divText.innerHTML += '<p>AC12.01 | Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)</p>'
            divText.innerHTML += '<p>AC12.02 | Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)</p>'
            divText.innerHTML += '<p>AC12.03 | Formaliser et mettre en œuvre des outils mathématiques pour l’informatique</p>'

            divText.innerHTML += '<h4>Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné</h4>'
            divText.innerHTML += '<p>AC22.01 | Choisir des structures de données complexes adaptées au problème</p>'
            divText.innerHTML += '<p>AC22.02 | Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)</p>'
            divText.innerHTML += '<p>AC22.03 | Comprendre les enjeux et moyens de sécurisation des données et du code</p>'
            divText.innerHTML += '<p>AC22.04 | Évaluer l’impact environnemental et sociétal des solutions proposées</p>'

            divText.innerHTML += '<h4>Niveau 3 : Analyser et optimiser des applications</h4>'
            divText.innerHTML += "<p>AC32.01 | Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire, montée en charge...)</p>"
            divText.innerHTML += "<p>AC32.02 | Profiler, analyser et justifier le comportement d'un code existant</p>"
            divText.innerHTML += "<p>AC32.03 | Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)</p>"
        }

        else if(nom == "Administrer")
        {
            divText.innerHTML += '<h3>Administrer des systèmes informatiques communicants complexes</h3><h4>Niveau 1 : Installer et configurer un poste de travail</h4>'
            divText.innerHTML += '<p>AC13.01 | Identifier les différents composants (matériels et logiciels) d’un système numérique</p>'
            divText.innerHTML += '<p>AC13.02 | Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs</p>'
            divText.innerHTML += '<p>AC13.03 | Installer et configurer un système d’exploitation et des outils de développement</p>'
            divText.innerHTML += '<p>AC13.04 | Configurer un poste de travail dans un réseau d’entreprise</p>'

            divText.innerHTML += '<h4>Niveau 2 : Déployer des services dans une architecture réseau</h4>'
            divText.innerHTML += '<p>AC23.01 | Concevoir et développer des applications communicantes</p>'
            divText.innerHTML += '<p>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés</p>'
            divText.innerHTML += '<p>AC23.03 | Sécuriser les services et données d’un système</p>'
        }

        else if(nom == "Gérer")
        {
            divText.innerHTML += "<h3>Gérer des données de l’information</h3><h4>Niveau 1 : concevoir et mettre en place une base de données à partir d'un cahier des charges client</h4>"
            divText.innerHTML += '<p>AC14.01 | Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)</p>'
            divText.innerHTML += '<p>AC14.02 | Visualiser des données</p>'
            divText.innerHTML += '<p>AC14.03 | Concevoir une base de données relationnelle à partir d’un cahier des charges</p>'

            divText.innerHTML += '<h4>Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en oeuvre la sécurité</h4>'
            divText.innerHTML += '<p>AC24.01 | Optimiser les modèles de données de l’entreprise</p>'
            divText.innerHTML += '<p>AC24.02 | Assurer la sécurité des données (intégrité et confidentialité)</p>'
            divText.innerHTML += '<p>AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation</p>'
            divText.innerHTML += '<p>AC24.04 | Manipuler des données hétérogènes</p>'        
        }

        else if(nom == "Conduire")
        {
            divText.innerHTML += '<h3>Conduire un projet informatique</h3><h4>Niveau 1 : Identifier les besoins métiers des clients et des utilisateurs</h4>'
            divText.innerHTML += "<p>AC15.01 | Appréhender les besoins du client et de l'utilisateur</p>"
            divText.innerHTML += '<p>AC15.02 | Mettre en place les outils de gestion de projet</p>'
            divText.innerHTML += '<p>AC15.03 | Identifier les acteurs et les différentes phases d’un cycle de développement</p>'
            
            divText.innerHTML += '<h4>Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</h4>'
            divText.innerHTML += '<p>AC25.01 | Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information</p>'
            divText.innerHTML += "<p>AC25.02 | Formaliser les besoins du client et de l'utilisateur</p>"
            divText.innerHTML += '<p>AC25.03 | Identifier les critères de faisabilité d’un projet informatique</p>'
            divText.innerHTML += '<p>AC25.04 | Définir et mettre en œuvre une démarche de suivi de projet</p>'
        }

        else if(nom == "Collaborer")
        {
            divText.innerHTML += '<h3>Collaborer / Travailler dans une équipe informatique</h3><h4>Niveau 1 : Identifier ses aptitudes pour travailler dans une équipe</h4>'
            divText.innerHTML += '<p>AC16.01 | Appréhender l’écosystème numérique</p>'
            divText.innerHTML += '<p>AC16.02 | Découvrir les aptitudes requises selon les différents secteurs informatiques</p>'
            divText.innerHTML += '<p>AC16.03 | Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire</p>'
            divText.innerHTML += '<p>AC16.04 | Acquérir les compétences interpersonnelles pour travailler en équipe</p>'

            divText.innerHTML += "<h4>Niveau 2 : Situer son rôle et ses missions au sein d'une équipe informatique</h4>"
            divText.innerHTML += '<p>AC26.01 | Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,...)</p>'
            divText.innerHTML += '<p>AC26.02 | Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation</p>'
            divText.innerHTML += '<p>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique</p>'
            divText.innerHTML += '<p>AC26.04 | Rendre compte de son activité professionnelle</p>'

            divText.innerHTML += '<h4>Niveau 3 : Manager une équipe informatique</h4>'
            divText.innerHTML += '<p>AC36.01 | Organiser et partager une veille technologique et informationnelle</p>'
            divText.innerHTML += '<p>AC36.02 | Identifier les enjeux de l’économie de l’innovation numérique</p>'
            divText.innerHTML += '<p>AC36.03 | Guider la conduite du changement informatique au sein d’une organisation</p>'
            divText.innerHTML += '<p>AC36.04 | Accompagner le management de projet informatique</p>'
        }
    })

});