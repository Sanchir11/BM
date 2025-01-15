var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Зарим утгыг оруулна уу";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Таны биеийн жингийн индекс " + bmi + " гэсэн үг " + "та тураалтай байна";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Таны биеийн жингийн индекс" + bmi + " гэсэн үг " + "Та энгийн хэмжээнд байна";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Таны биеийн жингийн индекс " + bmi + " гэсэн үг " + "Та илүүдэл жинтэй байна";
	} else if (bmi >= 30) {
		measure = "Таны биеийн жингийн индекс " + bmi + " гэсэн үг " + "Та тарган байна";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
