// redux/reducers/countReducer.js

const initialState = {
 Data:[ ]  ,cartlength:0 ,cartiteams:[]    // Data:[    {text:null,image:null}]
}
   
  const dataReducer = (state= initialState, action) => {// 
    switch (action.type) {            // 
      case 'book1':
        {  
          if(state.cartiteams.includes(1)){ return{...state}}
        else{
          state.cartiteams.push(1)
        state.Data.push({text:"The load of the rings by J.R.R Tolkin",image:require('../../assets/book5.jpeg'),id:"one"})
         state.cartlength=state.cartlength+1
         
        return{...state}
        }};
        
      case 'book2':
       {
        if(state.cartiteams.includes(2)){ return{...state}}
        else{
          state.cartiteams.push(2)
        state.Data.push({text:"A brief history of time by Stephen Hawking",image:require('../../assets/book6.jpeg'),id:"two"})
       state.cartlength=state.cartlength+1
    //      { console.log(state.Data)
    //        state.cartlength=state.cartlength+1
    //     state.Data[state.cartlength]="A brief history of time by Stephen Hawking"
     //    state.Image[state.cartlength]='../assets/book2.jpeg'
    //      console.log(state)
         return{...state}
          }};
    case 'book3':
      {   if(state.cartiteams.includes(3)){ return{...state}}
      else{
        state.cartiteams.push(3)
        state.Data.push({text:"The fellowship of the rings by J.R.R Tolkien",image:require('../../assets/book1.jpeg'),id:"three"})
               state.cartlength=state.cartlength+1
  //      { console.log(state.Data)
  //        state.cartlength=state.cartlength+1
  //     state.Data[state.cartlength]="A brief history of time by Stephen Hawking"
   //    state.Image[state.cartlength]='../assets/book2.jpeg'
  //      console.log(state)
       return{...state}
        }};
  case 'book4':
   { if(state.cartiteams.includes(4)){ return{...state}}
   else{
     state.cartiteams.push(4)
    state.Data.push({text:"Thing and grow by Napolean Hill",image:require('../../assets/book7.jpeg'),id:"four"})
   state.cartlength=state.cartlength+1
//      { console.log(state.Data)
//        state.cartlength=state.cartlength+1
//     state.Data[state.cartlength]="A brief history of time by Stephen Hawking"
 //    state.Image[state.cartlength]='../assets/book2.jpeg'
//      console.log(state)
    return{...state}
     }};
case 'book5':
  {  if(state.cartiteams.includes(5)){ return{...state}}
  else{
    state.cartiteams.push(5)
    state.Data.push({text:"Girl made of Gold by Githanjali Kolanad",image:require('../../assets/book8.jpg'),id:"five"})  
  state.cartlength=state.cartlength+1
//      { console.log(state.Data)
//        state.cartlength=state.cartlength+1
//     state.Data[state.cartlength]="A brief history of time by Stephen Hawking"
//    state.Image[state.cartlength]='../assets/book2.jpeg'
//      console.log(state)
      return{...state}
      }};
case 'book6':
 { if(state.cartiteams.includes(6)){ return{...state}}
 else{
   state.cartiteams.push(6)
   state.Data.push({text:"Return of The king by J.R.R Tolkien",image:require('../../assets/book4.jpeg'),id:"six"}) 
 state.cartlength=state.cartlength+1  
//      { console.log(state.Data)
//        state.cartlength=state.cartlength+1
//     state.Data[state.cartlength]="A brief history of time by Stephen Hawking"
//    state.Image[state.cartlength]='../assets/book2.jpeg'
//      console.log(state)
      return{...state}
      }};
      case 'remove-one':{
  const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "one");
  console.log("object of index"+objWithIdIndex)

  if (objWithIdIndex > -1) {
    state.Data.splice(objWithIdIndex, 1);
    console.log(state.Data)
  }
  state.cartiteams.pop(1)
  state.cartlength=state.cartlength-1
      return{...state}
      };
      case 'remove-two':{
        const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "two");
        console.log("object of index"+objWithIdIndex)
      
        if (objWithIdIndex > -1) {
          state.Data.splice(objWithIdIndex, 1);
          console.log(state.Data)
        }
        state.cartiteams.pop(2)
        state.cartlength=state.cartlength-1
            return{...state}
            };
            case 'remove-three':{
              const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "three");
              console.log("object of index"+objWithIdIndex)
            
              if (objWithIdIndex > -1) {
                state.Data.splice(objWithIdIndex, 1);
                console.log(state.Data)
              }
              state.cartiteams.pop(3)
              state.cartlength=state.cartlength-1
                  return{...state}
                  };
                  case 'remove-four':{
                    const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "four");
                    console.log("object of index"+objWithIdIndex)
                  
                    if (objWithIdIndex > -1) {
                      state.Data.splice(objWithIdIndex, 1);
                      console.log(state.Data)
                    }
                    state.cartiteams.pop(4)
                    state.cartlength=state.cartlength-1
                        return{...state}
                        };
                        case 'remove-five':{
                          const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "five");
                          console.log("object of index"+objWithIdIndex)
                        
                          if (objWithIdIndex > -1) {
                            state.Data.splice(objWithIdIndex, 1);
                            console.log(state.Data)
                          }
                          state.cartiteams.pop(5)
                          state.cartlength=state.cartlength-1
                              return{...state}
                              };
                              case 'remove-six':{
                                const objWithIdIndex = state.Data.findIndex((obj) => obj.id === "six");
                                console.log("object of index"+objWithIdIndex)
                              
                                if (objWithIdIndex > -1) {
                                  state.Data.splice(objWithIdIndex, 1);
                                  console.log(state.Data)
                                }
                                state.cartiteams.pop(6)
                                state.cartlength=state.cartlength-1
                                    return{...state}
                                    };

    
      default:
        return state;
    }
  };
  export default dataReducer;