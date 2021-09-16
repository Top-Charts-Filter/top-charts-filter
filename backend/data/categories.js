/* This file contains all the categories in the system */
import { isValidOperatingSystem, OperatingSystems } from "../constants/appConstants.js";
import { FAILURE } from "../constants/globalConstants.js";

export const categories = [
    {
        os: OperatingSystems.IOS,
        categoryName: "Books",
        categoryId: "6018",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Business",
        categoryId: "6000",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Developer Tools",
        categoryId: "6026",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Education",
        categoryId: "6017",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Entertainment",
        categoryId: "6016",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Finance",
        categoryId: "6015",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Food & Drink",
        categoryId: "6023",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Games",
        categoryId: "6014",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Action",
        categoryId: "7001",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Adventure",
        categoryId: "7002",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Board",
        categoryId: "7004",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Card",
        categoryId: "7005",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Casino",
        categoryId: "7006",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Casual",
        categoryId: "7003",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Family",
        categoryId: "7009",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Music",
        categoryId: "7011",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Puzzle",
        categoryId: "7012",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Racing",
        categoryId: "7013",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Role Playing",
        categoryId: "7014",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Simulation",
        categoryId: "7015",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Sports",
        categoryId: "7016",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Strategy",
        categoryId: "7017",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Trivia",
        categoryId: "7018",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Word",
        categoryId: "7019",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Hyper-Casual",
        categoryId: "9099",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: false
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Graphics & Design",
        categoryId: "6027",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Health & Fitness",
        categoryId: "6013",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Kids",
        categoryId: "9007",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Ages 5 & Under",
        categoryId: "10000",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Ages 6-8",
        categoryId: "10001",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Ages 9-11",
        categoryId: "10002",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Lifestyle",
        categoryId: "6012",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Medical",
        categoryId: "6020",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Music",
        categoryId: "6011",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Navigation",
        categoryId: "6010",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "News",
        categoryId: "6009",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Photo & Video",
        categoryId: "6008",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Productivity",
        categoryId: "6007",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Reference",
        categoryId: "6006",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Social Networking",
        categoryId: "6005",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Shopping",
        categoryId: "6024",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Sports",
        categoryId: "6004",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Travel",
        categoryId: "6003",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.IOS,
        categoryName: "Utilities",
        categoryId: "6002",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Art & Design",
        categoryId: "art_and_design",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Auto & Vehicles",
        categoryId: "auto_and_vehicles",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Beauty",
        categoryId: "beauty",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Books & Reference",
        categoryId: "books_and_reference",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Business",
        categoryId: "business",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Comics",
        categoryId: "comics",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Communication",
        categoryId: "communication",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Dating",
        categoryId: "dating",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Education",
        categoryId: "education",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Entertainment",
        categoryId: "entertainment",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Events",
        categoryId: "events",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Family",
        categoryId: "family",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Action & Adventure",
        categoryId: "family_action",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Brain Games",
        categoryId: "family_braingames",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Creativity",
        categoryId: "family_create",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Education",
        categoryId: "family_education",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Music & Video",
        categoryId: "family_musicvideo",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Pretend Play",
        categoryId: "family_pretend",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Finance",
        categoryId: "finance",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Food & Drink",
        categoryId: "food_and_drink",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Game",
        categoryId: "game",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Action",
        categoryId: "game_action",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Adventure",
        categoryId: "game_adventure",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Arcade",
        categoryId: "game_arcade",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Board",
        categoryId: "game_board",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Card",
        categoryId: "game_card",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Casino",
        categoryId: "game_casino",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Casual",
        categoryId: "game_casual",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Hyper-Casual",
        categoryId: "game_hyper_casual",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: false
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Educational",
        categoryId: "game_educational",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Music",
        categoryId: "game_music",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Puzzle",
        categoryId: "game_puzzle",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Racing",
        categoryId: "game_racing",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Role Playing",
        categoryId: "game_role_playing",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Simulation",
        categoryId: "game_simulation",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Sports",
        categoryId: "game_sports",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Strategy",
        categoryId: "game_strategy",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Trivia",
        categoryId: "game_trivia",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Word",
        categoryId: "game_word",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Health & Fitness",
        categoryId: "health_and_fitness",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "House & Home",
        categoryId: "house_and_home",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Libraries & Demo",
        categoryId: "libraries_and_demo",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Lifestyle",
        categoryId: "lifestyle",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Maps & Navigation",
        categoryId: "maps_and_navigation",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Medical",
        categoryId: "medical",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Music & Audio",
        categoryId: "music_and_audio",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "News & Magazines",
        categoryId: "news_and_magazines",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Parenting",
        categoryId: "parenting",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Personalization",
        categoryId: "personalization",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Photography",
        categoryId: "photography",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Productivity",
        categoryId: "productivity",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Shopping",
        categoryId: "shopping",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Social",
        categoryId: "social",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Sports",
        categoryId: "sports",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Tools",
        categoryId: "tools",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Travel & Local",
        categoryId: "travel_and_local",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Weather",
        categoryId: "weather",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    },
    {
        os: OperatingSystems.ANDROID,
        categoryName: "Video Players & Editors",
        categoryId: "video_players",
        apps: [],
        subCategories: [],
        parent: null,
        fetchable: true
    }

];

/* These are subcategory information that has be inserted to the database */
export const categoriesAndSubcategoriesData =
[
    {
        "os": OperatingSystems.IOS,
        "categoryId": "6014",
        "subcategories": [
            "7001", "7002", "7004", "7005", "7006", "7003", "7009", "7011", "7012",
            "7013", "7014", "7015", "7016", "7017", "7018", "7019", "9099"]
    },
    {
        os: OperatingSystems.IOS,
        categoryId: "9007",
        subcategories: ["10000", "10001","10002"]
    },
    {
        os: OperatingSystems.ANDROID,
        categoryId: "family",
        subcategories: ["family_action","family_braingames","family_create",
                        "family_education","family_musicvideo","family_pretend"]
    },
    {
        os: OperatingSystems.ANDROID,
        categoryId: "game",
        subcategories: ["game_action", "game_adventure","game_arcade", "game_board",
                        "game_card", "game_casino","game_casual", "game_hyper_casual",
                        "game_educational", "game_music","game_puzzle", "game_racing",
                        "game_role_playing", "game_simulation","game_sports", "game_strategy",
                        "game_trivia", "game_word"]
    }
]

export function isValidCategory(testOS, testCategory){
    /* this function validates whether a given category is in the database
       or not with its given operating systems */
    
    if(!testOS || !testCategory){
        // if not provided, they are not valid
        return false; 
    }

    try {
        /* first make sure that the os is valid */
        isValidOperatingSystem(testOS);

        let categoriesOfThisOS = categories.filter( category => category.os === testOS ).map( category => (category.categoryId));

        let result = categoriesOfThisOS.includes(testCategory);

        return result;

    } catch (error) {

        console.error(error.message);

        process.exit(FAILURE);
    }

}