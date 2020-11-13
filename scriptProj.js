var table = document.getElementById("tab");
				var cells = table.getElementsByTagName("td");
				var tot = 0;
				for (var i = 0; i < (cells.length -1); i++) 
				{
					var v = cells[i].textContent;
					if (! isNaN(v))  
					{
						v = parseInt(v); // parseInt converte in numeri ma non ritorno un valore booleano testabile nel IF
						tot = tot + v;
					}
				}
				document.getElementById("totale").textContent = tot;



				var prevScrollpos = window.pageYOffset;
                window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-60px";
                }
                prevScrollpos = currentScrollPos;
            	}
