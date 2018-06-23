var katzDeli = []

function takeANumber (katzDeliLine, name) {
  
  katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing (katzDeliLine) {
  var firstPerson = katzDeliLine[0]
  
  if (katzDeliLine.length === 0) {
  return ("There is nobody waiting to be served!")
  } else {
   katzDeliLine.shift()
   return "Currently serving " + firstPerson + "."
  }
}

function currentLine (katzDeliLine) {
  var greeting = "The line is currently " 
  var greeting2 = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return greeting + "empty."
  } else {
    (": ")
    for (var i = 0; i < katzDeliLine.length - 1; i++){
      return greeting2 + (i + 1) + ". " + katzDeliLine[i] + ", "
    }
  }
}