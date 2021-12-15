function setup() {
    classifier = ml5.imageClassifier('MobileNet',modelLoaded)
  }

  function modelLoaded(){
    console.log("Model is loaded")
  }

function draw(){
  classifier.classify(gotResult)
  }
  
  function gotResult(error,results){
  if (error){
    console.error(error);
  }
  else {
  console.log(results)
  document.getElementById("GLR").innerHTML = results[0].label
  document.getElementById("MNMR").innerHTML = results[0].confidence.toFixed(3)
  }
  }