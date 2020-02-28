const user = { 
    name: 'Jonas',
    lastName: 'Gomes'
 };

 function getUserWithFullName(user){
     return{
         ...user,// pega os atributos da função user
         fullName: `${user.name} ${user.lastName}` // adiciona novo atributo fullname para o obj userWithFullName
     }     
 }

 const userWithFullName = getUserWithFullName(user);// novo objeto para não alterar o antigo (imutabilidade)

 console.log(userWithFullName, user);