function calcular() {

    let respostas = 
    [
        document.getElementById("quest_1").value,
        document.getElementById("quest_2").value,
        document.getElementById("quest_3").value,
        document.getElementById("quest_4").value,
        document.getElementById("quest_5").value
    ];

    let sabres = 
    {
        red: 0,
        blue: 0,
        green: 0
    };

    respostas.forEach(resposta => 
    {
        // Sabre Vermelho (SITH)
        if (resposta == "Muito Pouco" || resposta == "Pouco")
        {
            sabres.red++;
        }

        // Sabre Azul (JEDI)
        if (resposta == "Muito" || resposta == "Ás vezes")
        {
            sabres.blue++;
        }

        // Sabre Verde (JEDI)
        if (resposta == "Ás vezes")
        {
            sabres.green++;
        }
    });

    let result = "AZUL";

    if (sabres.red > sabres[result])
    {
        result = "VERMELHO";
    }

    if (sabres.green > sabres[result])
    {
        result = "VERDE";
    }

    alert("Seu sabre é:", result);
}
