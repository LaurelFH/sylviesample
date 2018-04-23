//Warm-up List 
Sortable.create(warmupList, {
    group: {
        name: "sharedWarm",
        put: "sharedWarm",
        revertClone: true,
        sort: true
    },
    animation: 150,
});
console.log(warmupList);


//Warmup Planner Space
Sortable.create(displayWarmupArea, {
    group: {
        name: "sharedWarm",
        put: "sharedWarm",
        revertClone: true,
        sort: true
    },
    animation: 150,
    // draggable: "list-group-item"
});
console.log(displayWarmupArea);


//Activity list
Sortable.create(activityList, {
    group: {
        name: "sharedActs",
        revertClone: true,
        put: "sharedActs",
        sort: true
    },
    animation: 150,
});
console.log(activityList);

//Activity display space
Sortable.create(displayActivityArea, {
    group: {
        name: "sharedActs",
        sort: true,
        revertClone: true,
        put: "sharedActs"
    },
    animation: 150,

});
console.log(displayActivityArea);