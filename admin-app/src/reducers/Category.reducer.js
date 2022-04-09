import { categoryConstant } from "../actions/Constants";

const initState={
    categories:[],
    loading:false,
    error:null
};

const showCategory=(categories,category )=>{
    let myCategories=[];

    for(let cat of categories){
        myCategories.push({
            ...cat,
        })
    }
    myCategories.push({
        ...category
    })
    return myCategories
}
  

const CategoryReducer=(state=initState,action)=>{
    switch(action.type){
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
            console.log(initState.loading);
            state={
                ...state,
                categories:action.payload.categories
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_SUCCESS:
            state={
                ...state,
                categories:showCategory(state.categories,action.payload.category),
                loading:false   // changed
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_FAILURE:
            state={
                ...initState
            }
            break;
    }
    return state;
}

export default CategoryReducer