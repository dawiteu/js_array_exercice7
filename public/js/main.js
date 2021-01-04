let prenoms = ['Dawid','Ayhan','Ayoub','Malo']; 


console.log(prenoms);

console.log(prenoms[3]);

console.log(prenoms.length);


let pre2 = ['Dawid']; 

pre2.push('Ayoub'); 

console.log(pre2);



let classCoding16 = []; 

classCoding16.push('Ayhan'); 

console.log(`il est 8h43 et ${classCoding16.join()} arrive en classe`);

classCoding16.push('Benedicte'); 

console.log(`08h44 ${ classCoding16[classCoding16.length-1] } entre en classe`);

classCoding16.push('Louise', 'Jamila'); 

console.log(`08h45 ${ classCoding16[classCoding16.length-1] }, ${ classCoding16[classCoding16.length-2] } entrent en classe`);

let sebAd = ['Sebastien', 'Adame']; 
sebAd = sebAd.join(' et ');
console.log(`08h51 ${sebAd} voyent ${classCoding16[0]} passer devant... et decident de le rejoindre`);  

classCoding16.push(sebAd.split(" et ")); 
classCoding16 = classCoding16.flat();

classCoding16.push("Malo", "Dawid"); 

console.log(`08h55 ${ classCoding16[classCoding16.length-1] } et ${ classCoding16[classCoding16.length-2] } entrent en classe avec max de bruit `);

classCoding16.push("Alex"); 
console.log(`08h56 ${classCoding16[classCoding16.length-1]} entre en classe et ressors `);
classCoding16.pop();  

classCoding16.push("Maxence","Mohamed"); 

console.log(`08h59 ${classCoding16.splice(8,2)} entrent en classe.... `);

classCoding16.push("Saliou"); 

console.log(`09h00 ${classCoding16[classCoding16.length-1]} entre en classe.... `);

classCoding16.push("Zulma", "Maximilien"); 

console.log(`09h03 ${ classCoding16[classCoding16.length-1] } et ${ classCoding16[classCoding16.length-2] } entrent en classe et observent ${classCoding16[3]} `);

classCoding16.push("Natchez"); 

console.log(`09h04 ${classCoding16[classCoding16.length-1]} entre en classe cafe.... `);

classCoding16.push("Zakaria", "Ayoub"); 

console.log(`09h05 ${ classCoding16[classCoding16.length-1] } et ${ classCoding16[classCoding16.length-2] } entrent en classe et ressortent `);

let prenom1rem = "Ayoub", prenom2rem = "Zakaria"; 
classCoding16 = classCoding16.filter(item => item != prenom1rem && item != prenom2rem);  

classCoding16.push("Achraf"); 
console.log(`09h10 ${ classCoding16[classCoding16.length-1] } entre en classe cafe... \n09h20Les coatchs commencent le cours`);

classCoding16.push("Abdellah"); 
console.log(`09h30 ${ classCoding16[classCoding16.length-1] } entre en classe en retard..`);


console.log(classCoding16);



/*
classCoding16.push('Ayhan'); 
console.log(classCoding16);


classCoding16.push('Benedicte'); 
console.log(classCoding16);

classCoding16.push('Louise', 'Jamila'); 
console.log(classCoding16);

let groupe2 = ['Sebastien', 'Adame'], nico = "Nicolas";
console.log(groupe2, nico);


classCoding16.push('Dawid', 'Malo');
console.log(classCoding16);


classCoding16.push('Alex'); 
console.log(classCoding16);

classCoding16.pop(); 
console.log(classCoding16);

classCoding16.push('Maxence','Mohamed'); 
console.log(classCoding16); 

classCoding16.push('Saliou'); 
console.log(classCoding16); 

classCoding16.push('Zulma','Maxence'); 
console.log(classCoding16); 

classCoding16.push('Natchez'); 
console.log(classCoding16); 
*/
