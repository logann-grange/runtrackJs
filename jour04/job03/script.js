async function filter() {
  try {
    const response = await fetch("pokemon.json");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    let id = $("#text_id").val();
    let name = $("#text_name").val();
    let type = $("#type").val();
    let data = await response.json();

    if (id)    data = data.filter(u => u.id == id);
    if (name) data = data.filter(u => u.name.english == name);
    if (type)  data = data.filter(u => u.type.includes(type));

    console.log(data);
    return data;

  } catch (e) {
    console.error('Erreur : ', e);
  }
}


$("#button").click(function() {
  filter();
});