export const initialState = {
    basket: [],
    user: null
}


const reducer = (state, action) => {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case 'added':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

            case 'removed':
                const index = state.basket.findIndex((basket) => basket.id === action.id);
                let newBasket = [...state.basket];
                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(`cant remove product (id:${action.id}) as its not in basket!`);
                }
            return {
                ...state,
                basket: newBasket,
            }

            case 'user':
            return {
                ...state,
                user: action.user,
            }
            
            case 'EMPTY':
                return {
                    ...state,
                    basket: [],
                }

        default:
            return state;     
    }
}


export default reducer;