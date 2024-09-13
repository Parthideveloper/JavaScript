const users = [ "ram", "sam", "ram", "jamesbond"];

console.log(users);

const uniqueUserSet = new Set(users);
console.log(uniqueUserSet);

// Using Spread covert set to array
// Const uniqueUsersArray = [...]


const uniqueUsersArray = [...new Set(users)];

console.log(uniqueUsersArray);


const myset = new Set([1,2,3]);
myset.add(4).add(49)
myset.delete(49);
myset.add(4);

console.log(myset);
console.log(myset.size);
console.log(myset.has(4)); // true
console.log(myset.has(84)); // false





myset.forEach((value)=> console.log(value)); // 1234



const set = new Set(["apple", "Banna", "Cherry"]);

console.log(set);


const iterator = set.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


const iteratorkey = set.keys();

console.log(iteratorkey.next().value);
console.log(iteratorkey.next().value);
console.log(iteratorkey.next().value);




/* 1. subset 
     A = 1,2,3
     B = 5,6,7,1,2,4,3
     C = 1,3,4,5

     2. Union

     3. InterSection
     
     4. Difference

 */



     //SubSet

     Set.prototype.subset = function(otherset){
          if(this.size > otherset.size){
                    return false;

          }else{
                    for(var element of this){
                              if(!otherset.has(element)) return false;

                              
                    }
                    return true;
          }
     };

 

const setA = new Set([1,2,3]);
const setB = new Set([5,6,1,2,3,4]);
const setC = new Set([1,3,4,5]);


console.log(setA.subset(setB));
console.log(setB.subset(setC));
console.log(setC.subset(setB));




// Union


Set.prototype.union = function(otherset){
          const unionSet = new Set();
          for(let element of this){
                    unionSet.add(element);
          }
          for(let element of otherset){
                    unionSet.add(element);
          }
          return unionSet;
};


console.log(setA.union(setB));
console.log(setB.union(setC));



//interSection



Set.prototype.interSection = function(otherset){
          const interSectionSet = new Set();
          for (let element of otherset){
                    if(this.has(element)){
                              interSectionSet.add(element);
                    }
          }
      

        
          return interSectionSet;
}

console.log(setA.interSection(setC));




// Difference



Set.prototype.difference = function(otherset){
          const differenceSet = new Set();
          for (let element of otherset){
                    if(!this.has(element)){
                              differenceSet.add(element);
                    }
          }
      

        
          return differenceSet;
}

console.log(setA.difference(setB));




//Tag Widget



class TagInput{
          constructor(){
                    this.tags = new Set();

          }
        addTag(newTag){
          this.tags.add(newTag);
          console.log(this.tags);       
        }
}

const input = new TagInput();
input.addTag("ram")
input.addTag("yun")
input.addTag("ram")
