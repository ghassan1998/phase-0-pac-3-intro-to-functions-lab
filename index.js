function shout(string){
    return string.toUpperCase()
}
console.log(shout("azzam"))

function whisper(string){
    return string.toLowerCase()
}
console.log(whisper("azzam"))

function logShout(string){
    
    const spy= string.toUpperCase()
    console.log(spy)
}
logShout("ghassan")

function logWhisper(string){
    
    const spy= string.toLowerCase()
    console.log(spy)
}
logWhisper("ghassan")

function sayHiToHeadphonedRoommate(string){
    const spy = string.toLowerCase()
    const spo = string.toUpperCase()
    if(string==="Let's have dinner together!"){
        return "I would love to!"
    }
    else if (string === spy){
        return "I can't hear you!"
    }else if (string===spo){
        return "YES INDEED!"
    }
    
}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
