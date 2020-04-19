function compareToTen(num){
	p = new Promise(function (resolve, reject){
		if (num > 50){
			resolve(num + " is greater than 50, success!")
		} else {
			reject(num + " is less than 50, error!")
		}
	})
	return p
}

compareToTen(55)
	.then(result => console.log(result))
	.catch(error => console.log(error))

compareToTen(8)
	.then(result => console.log(result))
	.catch(error => console.log(error))