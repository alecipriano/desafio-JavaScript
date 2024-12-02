let herois = [
   ["Batman", 977],
   ["Homen Aranha", 1258],
   ["Homem De Ferro", 3500],
   ["Hulk", 6950],
   ["Capitao America", 7589],
   ["Doutor Estranho", 8965],
   ["SuperMan", 9812],
   ["Thor", 10951],   
];

for (let h = 0; h < herois.length; h++) {
   let nome = herois[h][0];
   let xp = herois[h][1];
   let nivel = "";

   if (xp < 1000) {
       nivel = "Ferro";
   } else if (xp <= 2000) {
       nivel = "Bronze";
   } else if (xp <= 5000) {
       nivel = "Prata";
   } else if (xp <= 7000) {
       nivel = "Ouro";
   } else if (xp <= 8000) {
       nivel = "Platina";
   } else if (xp <= 9000) {
       nivel = "Ascendente";
   } else if (xp <= 10000) {
       nivel = "Imortal";
   } else {
       nivel = "Radiante";
   }

   console.log(`O Herói de nome ${nome} possui atualmente o xp no valor de ${xp} portanto seu nivel é ${nivel}.`);


}
