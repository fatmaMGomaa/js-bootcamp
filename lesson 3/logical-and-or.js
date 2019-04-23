let isGuestOneVegan=true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('offer only vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('offer vegan and nonvegan food')
}else{
    console.log('offer any food')
}