const sudokusgrid =[]
//recuperation de la grille
const grille = async() => {
   const grids = await fetch("grid.json").then(reponse =>{
        if (reponse.ok===true) {
            return reponse.json()
        }else{
            return Promise.reject("fiche not trouve")
        }
      })
      var grill = grids[0].grid
      //affiche le grille dans le tableau
      for (let ligne = 0; ligne < 9; ligne++) {
        const sudokus = []
        for (let col = 0; col < 9; col++) {
            const valeur = grill[ligne][col]
            sudokus.push(valeur);
            if (valeur != null) {
                const identifiant = 'case' + ligne+ '-' +col
                const input = document.getElementById(identifiant)
                input.readOnly = true
                input.value = valeur

                
            }
        }
        sudokusgrid.push(sudokus)
    }
    // remplace null par 0
    for (let ligne = 0; ligne < 9; ligne++) {
        for (let col = 0; col < 9; col++) {
            const valeur = sudokusgrid[ligne][col]
            if (valeur == null) {
                sudokusgrid[ligne][col] = 0
            }
        }
    }
}
// gere les erreurs
const ajouterErreurChamp = (ligne,col) =>{
    const input = document.getElementById("case"+ligne+"-"+col)
    input.classList.add('invalid')
    input.addEventListener('input',()=>{
       input.classList.remove("invalid")
      },{once:true})
}

//verification des case
const verifier = ()=>{
const listeInput = document.querySelectorAll("input")
for (const input of listeInput) {
   
    const validiteInput = input.checkValidity()

    if (validiteInput == false) {
        
        return
    }
}
    const sudoku = []
    for (let ligne = 0; ligne < 9; ligne++) {
        const sudokuligne = []
        for (let col = 0; col < 9; col++) {
            const identifiant = 'case' + ligne+ '-' +col
            const input = document.getElementById(identifiant)
            let valeur
            if (input != null) {
                valeur = input.value
            }
            else {
                 valeur  = null;
            }
            
            const number = valeur === ''
            ? ''
            : parseInt(valeur,10)
            sudokuligne.push(number)
            
        }
        sudoku.push(sudokuligne)
    } 
    // verifier ya pas de doublons dans les lignes
   for (let ligne = 0; ligne < 9; ligne++) {
       const liste = new Set();

       for (let col = 0; col < 9 ; col++) {
           const valeur = sudoku[ligne][col]
           if (valeur === "") {
               
           } else {
               const valeurExiste = liste.has(valeur)
               if (valeurExiste) {
                   console.log("erreur doublon " + ligne+ "-" +col)
                   ajouterErreurChamp(ligne,col)
               } else {
                   liste.add(valeur)
               }
           }
       }
    }
   // verifier ya pas de doublons dans les colonne
   for (let col = 0; col < 9; col++) {
    const liste = new Set();

    for (let ligne = 0; ligne < 9 ; ligne++) {
        const valeur = sudoku[ligne][col]
        if (valeur === "") {
            
        } else {
            const valeurExiste = liste.has(valeur)
            if (valeurExiste) {
                console.log("erreur doublon " + ligne+ "-" +col)
                ajouterErreurChamp(ligne,col)
            } else {
                liste.add(valeur)
            }
        }
    }
   }
 // indices des carres
 const carres = [ 
    [
         [0,0],[0,1],[0,2],
         [1,0],[1,1],[1,2],
         [2,0],[2,1],[2,2],
    ],
    [
        [0,3],[0,4],[0,5],
        [1,3],[1,4],[1,5],
        [2,3],[2,4],[2,5],
   ],
    [
        [0,6],[0,7],[0,8],
        [1,6],[1,7],[1,8],
        [2,6],[2,7],[2,8],
    ],
    [
        [3,0],[3,1],[3,2],
        [4,0],[4,1],[4,2],
        [5,0],[5,1],[5,2],
    ],
    [
        [3,3],[3,4],[3,5],
        [4,3],[4,4],[4,5],
        [5,3],[5,4],[5,5],
   ],
   [
        [3,6],[3,7],[3,8],
        [4,6],[4,7],[4,8],
        [5,6],[5,7],[5,8],
   ],
   [
        [6,0],[6,1],[6,2],
        [7,0],[7,1],[7,2],
        [8,0],[8,1],[8,2],
    ],
    [
        [6,3],[6,4],[6,5],
        [7,3],[7,4],[7,5],
        [8,3],[8,4],[8,5],
    ],
    [
        [6,6],[6,7],[6,8],
        [7,6],[7,7],[7,8],
        [8,6],[8,7],[8,8],
    ],
]
// parcourir les carres 
   for (const carre of carres) {
       const liste = new Set()
       for (const element of carre) {
         const ligne = element[0]
         const col = element[1]
         const valeur = sudoku[ligne][col]
        if (valeur === "") {
             
         } else {
             const valeurExiste = liste.has(valeur)
             if (valeurExiste) {
                 console.log("erreur doublon " + ligne+ "-" +col)
                 ajouterErreurChamp(ligne,col)
             } else {
                 liste.add(valeur)
             }
         }
       }
       
   }
}

 grille()
 // affiche la solution
 function solutionsudoku(){
    Debut = new Date();

    solution(sudokusgrid)
    Fin = new Date();
   solution = document.getElementById("solution")
   solution.innerHTML = (Fin-Debut)+ " ms d'execution javascript"
    
    
   for (let ligne = 0; ligne < 9; ligne++) {
    for (let col = 0; col < 9; col++) {
        const valeur = restalt[ligne][col]
        if (valeur != null) {
            const identifiant = 'case' + ligne+ '-' +col
            const input = document.getElementById(identifiant)
            
            input.value = valeur
            
        }
    }}
 }
window.onload=function(){
    const button = document.getElementById('button-verifier')
   const button_solution = document.getElementById('button-solution')
    //Assigne l'evenement Click 
    button.addEventListener('click',verifier)
    button_solution.addEventListener('click',solutionsudoku)
}


// partit traitement de la solution 

function possible(grid, y, x, n){
for(let i = 0 ; i < 9 ; i++){
  if(grid[y][i] == n){
    return false
  }
}
for(let i = 0 ; i < 9 ; i++){
  if(grid[i][x] == n){
    return false
  }
}
x0 = Math.floor(x/3) * 3
y0 = Math.floor(y/3) * 3
for(let i = 0 ; i < 3 ; i++){
  for(let j = 0 ; j < 3 ; j++){
    if(grid[y0 + i][x0 + j] == n){
      return false
    }
  }
}

return true
}

const restalt = [] //table pour stocke la solution
function solution(grid){
for(let y = 0 ; y < 9 ; y++){
    
  for(let x = 0 ; x < 9 ; x++){
    if(grid[y][x] == 0){
      for(let n = 1 ; n < 10 ; n++){
        if(possible(grid, y, x, n)){
          grid[y][x] = n
          solution(grid)
          grid[y][x] = 0
        }
      }
      return
    }
  }
}
for (let ligne = 0; ligne < 9; ligne++) {
    const rest = []
    for (let col = 0; col < 9; col++) {
        if (grid[ligne][col] != 0) {
            rest.push(grid[ligne][col])
        }
        
    }
    restalt.push(rest)
    
}
}


//dificile
// [
         
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, 3, null, 8, 5],
//     [null, null, 1, null, 2, null, null, null, null],
//     [null, null, null, 5, null, 7, null, null, null],
//     [null, null, 4, null, null, null, 1, null, null],
//     [null, 9, null, null, null, null, null, null, null],
//     [5, null, null, null, null, null, null, 7, 3],
//     [null, null, 2, null, 1, null, null, null, null],
//     [null, null, null, null, 4, null, null, null, 9]
//     ]
//22586 ms


// facile 
    // [8, null, null, null, null, null, null, null, null],
    // [null, null, 3, 6, null, null, null, null, null],
    // [null, 7, null, null, 9, null, 2, null, null],
    // [null, 5, null, null, null, 7, null, null, null],
    // [null, null, null, null, 4, 5, 7, null, null],
    // [null, null, null, 1, null, null, null, 3, null],
    // [null, null, 1, null, null, null, null, 6, 8],
    // [null, null, 8, 5, null, null, null, 1, null],
    // [null, 9, null, null, null, null, 4, null, null]
    //715 ms
    