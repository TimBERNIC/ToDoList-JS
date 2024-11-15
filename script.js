const addToDo = () => {
  //localisation de la récupération de la valeur (lien avec le document)
  const input = document.getElementById("toDoInput");
  //préciser la récupération de la valeur (trim() sert a négligerles espaces. value sert a dire de récupérer slmt le séléments pris dans la balise et non toute la balise)
  const toDoText = input.value.trim();
  // Pour afficher la valeur récupérée en dessous il faut d'abord vérifier que la valeur n'est pas vide. return sert a dire que  l'on arrete la fonction.

  if (toDoText === "") return;

  // Récupérer la todo-list
  const toDoList = document.getElementById("todo-list");
  //Créer une nouvelle tâche => en output on aura un rajout <li>{todoText}</li>. dans la variable récupérée "li" je crée un Element qui est un contenu texte dontla valeur est la variable (toDoText)
  const li = document.createElement("li");
  li.textContent = toDoText;
  //ajouter l'élément à la page, dans "todo-list" j'appel un élément enfant (appendChild) et le nom de la varibale a appeler
  toDoList.appendChild(li);
  //ajouter un bouton supprimer aux tâches
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Effacer";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    toDoList.removeChild(li);
  };

  //Associer le bouton avec l'élément
  li.appendChild(deleteButton);

  // Réinitialiser
  input.value = "";
};
