async function update() {
  try {
    const response = await fetch("utilisateurs.json");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    let data = await response.json();
    console.log(data);

    data.forEach(u => {
    $("#tbody").append(`
      <tr>
        <td>${u.id}</td>
        <td>${u.prenom}</td>
        <td>${u.nom}</td>
        <td>${u.mail}</td>
       </tr>
      `);
    });

  } catch (e) {
    console.error('Erreur : ', e);
  }
}


$("#button").click(function() {
  update();
});