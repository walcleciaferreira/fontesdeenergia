// Jogo Fontes de Energia
//Autor: Walclécia Ferreira- Turma 05A


var tela = 0;
var song;
//nivel 1
var x = 50;
var y = 50
var largura = 180;
var altura  = 50;
var xmenu  = 200;
var xmenu1 = 20;
var xmenu3 = 390;
var ymenu1  = 460;
var ymenu2  = 290;
var ymenu3  = 460;
var xvoltar = 10;
var yvoltar = 10;
var xnivel = 210;
var ynivel1 = 85;
var ynivel2 = 270;
var largurar = 160;
var alturar = 160;
var xbesq = 90;
var xbdir = 360;
var ybcima = 185;
var ybbaixo = 360;
var xproxima = 538;
var yproxima = 10;
var score = 0;
//nivel 2
var score2 = 0;
var largurare = 105;
var alturare = 30;


/*
imgeducador = loadImage('');
*/
let final;
let imgmenu, imgprogramador, imgvoltar, imgcerto, imgerrado, imgintro, imgraio, imghidre, imgsolar, imgeolica, imggeo, imgnuclear, imgpet, imgcarvao, imggas, imgmare, imgbio, imgpont, imgfinal;
function preload() {
  imgmenu = loadImage('menu.jpg');
  imgprogramador = loadImage('programadora.jpg');
  imgvoltar = loadImage('voltar.png');
  imgcerto = loadImage('certo.png');
  imgerrado = loadImage('errado.png')
  imgintro = loadImage('intro.jpg');
  imgraio = loadImage('raio.png');
  imghidre = loadImage('hidreletrica.jpg');
  imgsolar = loadImage('solar.jpg');
  imgeolica = loadImage('eolica.jpg');
  imggeo = loadImage('geotermica.jpg');
  imgnuclear = loadImage('nuclear.jpg');
  imgpet = loadImage('petroleo.jpg');
  imgcarvao = loadImage('carvao.jpg');
  imggas = loadImage('gas.jpg');
  imgmare  = loadImage('maremotriz.jpg');
  imgbio = loadImage('biomassa.jpg');
  imgcientista = loadImage('cientista.png');
  imgpont = loadImage('pont.jpg');
  imgfinal = loadImage('final.jpg')
  imgre = loadImage('re.jpg')
  imgnaore = loadImage('naore.jpg')
  song = loadSound('music.mp3')
}


function setup() {
  createCanvas(600, 520);
  song.play()
  song.setVolume(0.1)
}

function voltar(){
  image(imgvoltar, 8, 10, 40, 40)
   textSize(14)
  fill(0)
   text('Voltar', 30, 62)
   if(mouseX > xvoltar && mouseX < xvoltar + 30 && mouseY > yvoltar && mouseY < yvoltar + altura){
     noFill()
    stroke(0)
     circle(28, 30, 50)
    if (mouseIsPressed){
      tela = 0
    }
    }
}
function proxima(){
 fill(0)
  triangle(595, 28, 575, 8, 575, 48)
  triangle(572, 28, 552, 8, 552, 48)
  textSize(14)
   text('Próxima', 570, 62)}
function ret(){
  fill(100)
  rect(50, 40, 520, 110, 15)//pergunats nível 1
}
//Nível 2

function continuar(){
    if(mouseX > 210 && mouseX < 210 + largurare && mouseY > 30 && mouseY < 30 + alturare){
      fill(80)
     rect(215, 10, 150, 40,15)}
     if (mouseIsPressed){
      tela = 30
  }
  fill(300)
  textSize(30)
  text('Continuar', 290, 30)
}

function draw() {
  //Menu
  if(tela == 0){
    background(imgmenu)
   //Opções
    textAlign(CENTER, CENTER);
    textSize(40);
    textFont('Monotype Corsiva');
    
    //Instruçoes
    if(mouseX > xmenu1 && mouseX < xmenu1 + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){
    stroke(240)
    fill('orange')
    rect(xmenu1, ymenu1, largura, altura, 15)
    if (mouseIsPressed){
      tela = 1
    }
    }
    fill(0)
    stroke(0)
   text('Instruções', 110, 485);

    //Jogar
    if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){
    stroke(0)
      fill('orange')
      rect(250, 220, 90, 45, 15)
      fill(300)
      text('Play', 296, 242)
      
    fill(300)
    ellipse(297, 310, 95, 85)
     if (mouseIsPressed){
      tela = 2
    }
    }
  fill('orange')
  strokeWeight(2)
  stroke(0)
  triangle(340, 310, 270, 280, 270, 340);
    
    //Créditos
    if(mouseX > xmenu3 && mouseX < xmenu3 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){
    stroke(240)
    fill('orange')
    rect(xmenu3, ymenu3, largura, altura, 15)
     if (mouseIsPressed){
      tela = 3
    }
    }
    fill(0)
    stroke(0)
   text('Créditos', 480, 485);
 }
 
  //Introdução
 else if (tela == 2){
   image(imgintro, -30, 0, 630, 520)
   voltar()
  proxima()
     if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
       if (mouseIsPressed){
      tela = 4
    }
     }
}
  
  //Escolha de nível
  else if(tela==4){
    fill(0)
    background(imgpont)
    textSize(50)
    text('Vamos começar?', 400, 50)
    noStroke()
    textSize(30)
    //fill('green')
    text('Responda perguntas e descubra', 395, 150)
    text('as fontes responsáveis pela', 365, 180)
    text('produção de energia.', 330, 210)
    //fill('green')
    text('Classifique as fontes de energia', 400, 340)
    text('em:',230, 370)
    text('renováveis ou não renováveis.', 390, 400)
    image(imgcientista, 0, 0, 200, 600)
    if(mouseX > xnivel && mouseX < xnivel + 100 && mouseY > ynivel1 && mouseY < ynivel1 + altura){
    stroke(240)
    fill(300)
    rect(xnivel, ynivel1, 100, altura, 15)
     if (mouseIsPressed){
      tela = 5
    }
    }
   textSize(30)
    fill(0)
    stroke(0)
    text('Nível 1', 260, 110)
  
   if(mouseX > xnivel && mouseX < xnivel + 100 && mouseY > ynivel2 && mouseY < ynivel2 + altura){
    stroke(240)
    fill(300)
    rect(xnivel, ynivel2, 100, altura, 15)
     if (mouseIsPressed){
      tela = 30
    }
    }
   textSize(30)
    fill(0)
    stroke(0)
  text('Nível 2', 260, 300) 
    voltar()
  }
  
  //Nível 1
  //Pergunta 1(solar)
 else  if(tela == 5){
   background('yellow')
    for(x =50; x<=mouseX; x+=60){
      for(y=210; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      ellipse(x, y,50,50)
      }
    }
   ret()
    textSize(30)
    fill(300)
    text('É produzida a partir da energia luminosa', 300, 70)
    text('do sol.', 100, 105);
    image(imgcarvao, 90, 185, 160, 160);
    image(imgsolar, 90, 360, 160, 160);
    image(imgeolica, 360, 185, 160, 160);
    image(imgmare, 360, 360, 160, 160);
    
    if(mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 6
       score = score+10
    }
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
      if(mouseIsPressed){
      tela = 7}
    }
   voltar()
  }
  //certo(letra B)
  else if(tela == 6){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 8}
    }
    }
  //errado
  else if(tela==7){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 8}
    }
    }
   //Pergunta 2 (nuclear)
  else if(tela == 8){
    background('violet')
    for(x =50; x<=mouseX; x+=60){
      for(y=200; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      rect(x, y, 50, 50)}
    }
    textSize(30)
    ret()
    fill(300)
    text('Produzida por meio da fissão nuclear de ', 300, 70)
    text('materiais radioativos.', 190, 105);
    image(imggas, 90, 360, 160, 160);
    image(imgnuclear, 90, 185, 160, 160);
    image(imgbio, 360, 360, 160, 160);
    image(imggeo, 360, 185, 160, 160);
    //certo(letra A)
    if(mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
      if (mouseIsPressed){
      tela = 9
        score = score+10;}
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 10}
    }
    voltar()}
  //certo(letra A)
    else if(tela == 9){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 11}
    }
    }
    //errado
  else if(tela==10){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 11}
    }
    }
  //Pergunta 3(hidreletrica)
 else if(tela == 11){
    background(imgraio)
   ret()
    textSize(30)
    fill(300)
    text('Obtida a partir da água onde as turbinas', 300, 60)
    text('fazem funcionar um gerador elétrico,', 285, 95);
   text('produzindo energia.', 190, 130)
   image(imgpet, 90, 185, 160, 160);
   image(imgeolica, 90, 360, 160, 160);
   image(imghidre, 360, 185, 160, 160);
   image(imgmare, 360, 360, 160, 160);
    
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
     if (mouseIsPressed){
      tela = 12
       score = score+10;}
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
      if(mouseIsPressed){
      tela = 13}
    }
   voltar()
  }
  //certo(letra C)
  else if(tela == 12){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 14}
    }
    }
  //errado
  else if(tela==13){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 14}
    }
    }
  //Pergunta 4(biomassa)
  else if(tela == 14){
    background('pink')
    ret()
    for(x =50; x<=mouseX; x+=60){
      for(y=200; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      ellipse(x, y, 50, 50)}
    }
    textSize(30)
    fill(300)
    text('Produzida a partir de matéria orgânica de', 300, 70)
    text('origem animal ou vegetal.', 210, 105);
    image(imggeo, 90, 360, 160, 160);
    image(imgbio, 90, 185, 160, 160);
    image(imgsolar, 360, 360, 160, 160);
    image(imgcarvao, 360, 185, 160, 160);
    //certo(letra A)
    if(mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
      if (mouseIsPressed){
      tela = 15
        score = score+10;}
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 16
    }
    }
   
    voltar()
  }
  //certo(letra A)
    else if(tela == 15){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 17}
    }
    }
    //errado
  else if(tela==16){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 17}
    }
    }
   //Pergunta 5(eolica)
 else if(tela == 17){
    background('beige')
   for(x =50; x<=mouseX; x+=60){
      for(y=200; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      rect(x, y, 50, 50)}
    }
   ret()
    textSize(30)
    fill(300)
    text('Têm como fonte o vento.', 300, 100)
   image(imggas, 90, 185, 160, 160);
   image(imgpet, 90, 360, 160, 160);
   image(imghidre, 360, 185, 160, 160);
   image(imgeolica, 360, 360, 160, 160);
    
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 18
       score = score+10;
    }
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
      if(mouseIsPressed){
      tela = 19}
    }
   voltar()
  }
  //certo(letra D)
  else if(tela == 18){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 20
     }
    }
    }
  //errado
  else if(tela==19){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 20
     }
    }
    }
   //Pergunta 6(geotermica)
 else  if(tela == 20){
   background(imgraio)
   ret()
    textSize(30)
    fill(300)
    text('Provém do aproveitamento do calor', 290, 60)
    text('interior da terra, permitindo gerar', 275, 95);
   text('eletricidade e calor.', 190, 130)
    image(imggeo, 90, 360, 160, 160);
    image(imgmare, 90, 185, 160, 160);
    image(imgcarvao, 360, 360, 160, 160);
    image(imgnuclear, 360, 185, 160, 160);
    if(mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 21
       score = score+10;
    }
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
      if(mouseIsPressed){
      tela = 22}
    }
   voltar()
  }
  //certo(letra B)
  else if(tela == 21){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 23
     }
    }
    }
  //errado
  else if(tela==22){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 23}
    }
    }
   //Pergunta 7(maremotriz)
 else if(tela == 23){
    background('purple')
   for(x =50; x<=mouseX; x+=60){
      for(y=200; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      rect(x, y, 50, 50)}
    }
   ret()
    textSize(30)
    fill(300)
   text('Energia gerada pelo movimento das', 290, 70)
   text('marés.', 110, 105)
   image(imgpet, 90, 185, 160, 160);
   image(imghidre, 90, 360, 160, 160);
   image(imgmare, 360, 185, 160, 160);
   image(imgsolar, 360, 360, 160, 160);
    
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar){
     if (mouseIsPressed){
      tela = 24
       score = score+10;
    }
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
      if(mouseIsPressed){
      tela = 25}
    }
   voltar()
  }
  //certo(letra C)
  else if(tela == 24){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 26
     }
    }
    }
  //errado
  else if(tela==25){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 26
     }
    }
    }
  //Pergunta 8(petróleo)
 else if(tela == 26){
    background('salmon')
   for(x =50; x<=mouseX; x+=60){
      for(y=210; y<=mouseY; y+=60){
        fill(0)
      stroke(20)
      ellipse(x, y,50,50)}
    }
   ret()
    textSize(30)
    fill(300)
    text('Corresponde a uma substância oleosa', 300, 60)
   text('cuja densidade é inferior à da água', 285, 95)
   text('e é inflamável.', 165, 130)
   image(imgeolica, 90, 185, 160, 160);
   image(imgcarvao, 90, 360, 160, 160);
   image(imgbio, 360, 185, 160, 160);
   image(imgpet, 360, 360, 160, 160);
    
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
     if (mouseIsPressed){
      tela = 27
       score = score+10;}
    }
    if(mouseX > xbdir && mouseX < xbdir + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybcima && mouseY < ybcima + alturar || mouseX > xbesq && mouseX < xbesq + largurar && mouseY > ybbaixo && mouseY < ybbaixo + alturar){
      if(mouseIsPressed){
      tela = 28}
    }
   voltar()
  }
  //certo(letra D)
  else if(tela == 27){
      background(imgcerto)
  voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 29}
    }
    }
  //errado
  else if(tela==28){
       background(imgerrado)
      voltar()
       proxima()
      if(mouseX > xproxima && mouseX < xproxima + largura && mouseY > yproxima && mouseY < yproxima + altura){
     noFill()
    stroke(0)
     circle(570, 30, 50)
     if(mouseIsPressed){
     tela = 29}
    }
    }
  //Parabéns
  else if(tela == 29){
    background(imgfinal)
   voltar()
    if(mouseX > 200 && mouseX < 270 + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){
    stroke(240)
    fill('orange')
    rect(200, ymenu1, largura, altura, 15)
    if (mouseIsPressed){
      tela = 31}
    }
    fill(0)
    stroke(0)
    textSize(40)
    text('Pontuação', 295, 485)
    }
  //resultado nível 1
  else if(tela == 31){
    background(imgpont)
    fill(0)
    noStroke()
    textSize(20)
    text('*A pontuação máxima é 80', 130, 480)
    textSize(50)
    text('Sua pontuação* foi: ', 300, 120)
    textSize(120)
    text(score, 295, 300)
   //botão
    if(mouseX > xmenu3 && mouseX < xmenu3 + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){
    noStroke()
    fill(300)
    rect(xmenu3, ymenu3, largura, altura, 15)
     if (mouseIsPressed){
      tela = 30
    }
    }
    fill(0)
    stroke(0)
    textSize(35)
   text('Nível 2', 480, 485);
    voltar()
  }
  
  //Nível 2
  else if(tela == 30){
    background('silver')
    //Opções
    textAlign(CENTER, CENTER) 
  voltar()
    image(imgre, 12, 205, 105, 30)
    image(imgre,132, 205, 105, 30)
    image(imgre, 252, 205, 105, 30)
    image(imgre, 372, 205, 105, 30)
    image(imgre, 492, 205, 105, 30)
    image(imgre, 12, 205, 105, 30)
    image(imgre,12, 425, 105, 30)
    image(imgre,132, 425, 105, 30)
    image(imgre,252, 425, 105, 30)
    image(imgre,372, 425, 105, 30)
    image(imgre,492, 425, 105, 30)
    image(imgnaore,12, 237, 105, 30)
    image(imgnaore,132, 237, 105, 30)
    image(imgnaore,252, 237, 105, 30)
    image(imgnaore,372, 237, 105, 30)
    image(imgnaore,492, 237, 105, 30) 
    image(imgnaore,12, 457, 105, 30)
    image(imgnaore,132, 457, 105, 30)
    image(imgnaore,252, 457, 105, 30)
    image(imgnaore,372, 457, 105, 30)
    image(imgnaore,492, 457, 105, 30)
    image(imgeolica, 10, 80, 110, 120); 
    image(imggeo, 130, 80, 110, 120);
    image(imgnuclear, 250, 80, 110, 120)
    image(imgsolar, 370, 80, 110, 120)
    image(imggas, 490, 80, 110, 120)
    image(imgcarvao, 10, 300, 110, 120)
    image(imgmare, 130, 300, 110, 120)
    image(imgpet, 250, 300, 110, 120)
    image(imgbio, 370, 300, 110, 120)
    image(imghidre, 490, 300, 110, 120)
    //tela de errou
    if(mouseX > 12 && mouseX < 12 + largurare && mouseY > 237 && mouseY < 237 + alturare || mouseX > 132 && mouseX < 132 + largurare && mouseY > 237 && mouseY < 237 + alturare || mouseX > 252 && mouseX < 252 + largurare && mouseY > 205 && mouseY < 205 + alturare || mouseX > 372 && mouseX < 372 + largurare && mouseY > 237 && mouseY < 237 + alturare || mouseX > 492 && mouseX < 492 + largurare && mouseY > 205 && mouseY < 205 + alturare || mouseX > 12 && mouseX < 12 + largurare && mouseY > 425 && mouseY < 425 + alturare || mouseX > 132 && mouseX < 132 + largurare && mouseY > 457 && mouseY < 457 + alturare || mouseX > 252 && mouseX < 252 + largurare && mouseY > 425 && mouseY < 425 + alturare || mouseX > 372 && mouseX < 372 + largurare && mouseY > 457 && mouseY < 457 + alturare || mouseX > 492 && mouseX < 492 + largurare && mouseY > 457 && mouseY < 457 + alturare){
     if (mouseIsPressed){
         tela = 33}
    }
    //tela de acertou
    if(mouseX > 12 && mouseX < 12 + largurare && mouseY > 205 && mouseY < 205 + alturare || mouseX > 132 && mouseX < 132 + largurare && mouseY > 205 && mouseY < 205 + alturare || mouseX > 252 && mouseX < 252 + largurare && mouseY > 237 && mouseY < 237 + alturare || mouseX > 372 && mouseX < 372 + largurare && mouseY > 205 && mouseY < 205 + alturare || mouseX > 492 && mouseX < 492 + largurare && mouseY > 237 && mouseY < 237 + alturare || mouseX > 12 && mouseX < 12 + largurare && mouseY > 457 && mouseY < 457 + alturare || mouseX > 132 && mouseX < 132 + largurare && mouseY > 425 && mouseY < 425 + alturare || mouseX > 252 && mouseX < 252 + largurare && mouseY > 457 && mouseY < 457 + alturare || mouseX > 372 && mouseX < 372 + largurare && mouseY > 425 && mouseY < 425 + alturare || mouseX > 492 && mouseX < 492 + largurare && mouseY > 425 && mouseY < 425 + alturare){
    
     if (mouseIsPressed){
         tela = 32
    }
    } 
  }
  else if (tela == 32){
    background(imgcerto)

    continuar()
 }
  else if (tela == 33){
    background(imgerrado)
    continuar()}
  
//Instruções sobre o jogo
 else if (tela == 1){
    background(imgpont)
  voltar() 
   stroke(0)
   fill(220)
   rect(7, 72, 185, 30)
   rect(7, 117, 98, 30)
   rect(7, 162, 130, 30)
   rect(7, 240, 70, 30)
   rect(7, 350, 150, 30)
   noStroke() 
   fill(0)
   textSize(50)
   text('Instruções', 300, 40 )
   textSize(28)
   text('Nível de ensino', 100, 90)
   text('Matéria',56, 135)
   text('Habilidade', 70, 178)
   text('Ideia',40, 260)
   text('Como jogar   (Usar sempre o botão esquerdo)', 265, 365)
  textSize(24);
  textFont('Monotype Corsiva');
   text('8º ano do ensino fundamental', 340, 90)
   text('Ciências', 150, 135)
   text('(EF08CI01) Identificar e classificar diferentes', 360,175) 
   text('fontes (renováveis e  não  renováveis) e tipos de energia ', 280, 205)
    text(' utilizados em residências, comunidades ou cidades.', 250, 230)
   text('Jogo com foco na aprendizagem de ciências onde o', 335, 260) 
   text('desafio do jogador é desvendar os enigmas que correspondem', 300, 285) 
   text('as fontes de energia e depois classifica-las em renováveis ou', 296, 310) 
   text('não renováveis.',80, 335);
   text('- Nível 1: use o mouse para escolher a opção que corresponde', 300, 400)
   text('a descrição dada.', 85, 425)
   text('- Nível 2: use o mouse para classificar as fontes de energia.', 288, 450)
   text('- Para voltar ao MENU em qualquer momento use', 245, 478)
   image(imgvoltar, 495, 463, 30, 30)
   text('- Para AVANÇAR use', 110, 505)
   triangle(265, 505, 245, 495, 245, 515)
  triangle(245, 505, 225, 495, 225, 515)
  }
  
//Créditos
 else if (tela == 3){
    background(imgpont)
   voltar()
   noStroke()
    textSize(60);
    fill(20)
   textFont('Monotype Corsiva');
   text('Créditos', 290, 40);
   textSize(28);
   fill(0);
   text("WALCLÉCIA FERREIRA", 350, 160)
   text('IDALMIS MILIAN SARDINA MARTINS', 250, 450)
   textSize(24);
   text("Função: Programadora", 330, 185)
   text("Função: Orientadora", 220, 475)   
   textSize(20);
   text("Estudante de Ciências e Tecnologia na", 340, 210)
   text('Universidade Federal do Rio Grande', 333, 235)
   text('do Norte (UFRN).', 260, 260)
   image(imgprogramador, 20, 110, 150, 180)
   
  }
 }