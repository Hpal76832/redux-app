let initial= {
    'count':0
}
const reducer=(state=initial,action)=>{
    switch(action.type){
        case 'increment':return {...state,count:state.count+1}
        case 'decrement':return state-1
        default:return state
    }

}

export default reducer;