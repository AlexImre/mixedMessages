// Function which generates random team name from 3 separate components
function generateTeamName(){

    //Object which stores arrays of possible words to form team name
    nameComponents = {
        firstComponent: ["big", "small", "fat", "lazy", "angry"],
        secondComponent: ["smelly", "horny", "grumpy", "special", "deranged"],
        thirdComponent: ["dog", "cat", "monkey", "mother", "gnome"]
    };

    //Randomly choose components from Object
    const getComponent1 = nameComponents.firstComponent[Math.floor(Math.random() * 5)];
    const getComponent2 = nameComponents.secondComponent[Math.floor(Math.random() * 5)];
    const getComponent3 = nameComponents.thirdComponent[Math.floor(Math.random() * 5)]; 
    
    //Join components into team name
    const teamName = getComponent1.concat(" ", getComponent2, " ", getComponent3);
    return teamName;
}

console.log("Team name is: " + generateTeamName());