export const appInfoEN = [
    {
        title: "APP INFO",
        paragrahs: [],
    },
    {
        title: "RESUME",
        paragrahs: [
            "An application created to display food menus and a shopping cart.",
            "You can add items from a food list.",
            "You can also modify quantities with buttons within the cart itself.",
            "You can then go to a data form to complete the purchase.",
        ]
    },
    {
        title: "STORAGE",
        paragrahs: [
            "A fetch was implemented to extract the list of meals from Firebase.",
            "Once the meals are added to the cart, they are stored in the computer's localStore.",
            "This way, the user can have their own backup and retrieve what they had if they close the window.",
            "When the order is completed, a success message is displayed and the request is sent to Firebase.",
            "Orders placed are not accumulated due to database space issues.",
        ]
    }
]