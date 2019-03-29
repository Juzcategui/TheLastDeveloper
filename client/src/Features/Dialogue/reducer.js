const initialState = {
    dialogue: "",
    npcPos: [],
    isShown: false
};

const dialogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TALK_NPC":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default dialogueReducer;
