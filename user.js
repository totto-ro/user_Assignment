let users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(u){
    for (let i = 0; i < u.length; i++){
        let language = "";
        for (let j = 0; j < u[i].languages.length; j++){
            if (j < u[i].languages.length-1){
                language += u[i].languages[i] + ", "
            }
            else{
                language += "and " + u[i].languages[i] + ".";
            }
        }
        console.log( u[i].fname + " " + u[i].lname + " knows " + language);
    }
    
}


console.log(userLanguages(users));