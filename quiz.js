function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
        if(document.getElementById('correct4').checked)
            {	score++;
            }
            if(document.getElementById('correct5').checked)
                {	score++;
                }

                let resposta = document.getElementById("resposta");
                resposta.innerHTML ="voce acertou "+score+" de 5";
            }
            function transitionanimaisTvoltar()
            {
                    window.location.replace("index.html");
            }