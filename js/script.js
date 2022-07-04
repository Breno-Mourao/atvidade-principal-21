function post() {
  // delcaração de variáveis
  var nome = document.getElementById('nome').value;
  var comentario = document.getElementById('comentario').value;
  var corDeTexto = document.getElementById('cor-texto').value;
  var corDeFundo = document.getElementById('cor-fundo').value;
  var post = document.getElementById('post');

  // output post
  post.innerHTML += '<div style="color: '+ corDeTexto + '; background-color: ' + corDeFundo + ';"><p id="nome-post">' + nome + '<hr></p><p id="comentario-post">' + comentario + '</p></div>';

  document.getElementById('nome').value = '';
  document.getElementById('comentario').value = '';
}