function personne(sonNom, sonPrenom, sonAge, sonSexe, passions) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
    this.hobbies = passions;

    //Texte avec toute les propriétés
    this.text = function () {
        return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", elle a " + this.age + " ans et est de sexe " + this.sexe;
    }

    //Changer deux propriétés
    this.change = function (nouveauNom, nouveauHobbies) {
        this.nom = (nouveauNom);
        this.hobbies = (nouveauHobbies);
    }
}

//Création d'une première personne
let jill = new personne('Bine', 'Jill', 43, 'Masculin', 'Handballe');
document.getElementById('propriete1').innerText = jill.nom;
document.getElementById('propriete2').innerText = jill.prenom;
document.getElementById('propriete3').innerText = jill.age;
document.getElementById('propriete4').innerText = jill.sexe;
document.getElementById('propriete5').innerText = jill.hobbies;
document.getElementById('method1').innerText = jill.text();
jill.change('Vone', 'Footballe');
document.getElementById('method2').innerText = jill.text();

//Création d'une deuxième personne
let sandra = new personne('Market', 'Sandra', 28, 'Féminin', 'Tennis');
document.getElementById('proprieteA').innerText = sandra.nom;
document.getElementById('proprieteB').innerText = sandra.prenom;
document.getElementById('proprieteC').innerText = sandra.age;
document.getElementById('proprieteD').innerText = sandra.sexe;
document.getElementById('proprieteE').innerText = sandra.hobbies;
document.getElementById('methodA').innerText = sandra.text();
sandra.change('Tork', 'Natation');
document.getElementById('methodB').innerText = sandra.text();