var arrayOfWords = ['cucumber', 'tomatos', 'avocado']
var complicatedArray = ['cucumber', 44, true]

function makeAllCaps(array){
	return new Promise (function(resolve,reject){
		let capsArray = array.map(function(word){
			if(typeof word === 'string'){
				return word.toUpperCase()
			} else {
				reject('Error: Not all items in the arrayare strings!')
			}
		})
		resolve(capsArray)
	})
}

function sortWords(array){
	return new Promise(function (resolve, reject){
		if (array){
			array.forEach(function(el){
				if (typeof el !== 'string'){
					reject('Error: not all items in the array are strings!')
				}
			})
			resolve(array.sort());
		} else {
			reject ('Error: something went wrong with sorting wors!')
		}
	})
}

makeAllCaps(arrayOfWords)
	.then(sortWords)
	.then((result) => console.log(result))
	.catch(error => console.log(error))

makeAllCaps(complicatedArray)
	.then(sortWords)
	.then((result) => console.log(result))
	.catch(error => console.log(error))