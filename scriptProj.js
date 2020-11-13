
        var table = document.getElementById("tab");
        var cells = table.getElementsByTagName("td");
        var tot = 0;
        for (var i = 0; i < (cells.length -1); i++) 
        {
            var v = cells[i].textContent;
            if (! isNaN(v))  // isNaN valuta se può essere convertito in numero ma non lo converte
            {
                v = parseInt(v); // parseInt converte in numeri ma non ritorno un valore booleano testabile nel IF
                tot = tot + v;
            }
        }
        document.getElementById("totale").textContent = tot;
