import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
import * as $ from 'axios';


//calculates the 'forward' or next position if you were to take one step forward in your current direction.
function getNewPosition(oldPos, direction) {
  switch (direction) {
    case "WEST":
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];

    case "EAST":
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];

    case "NORTH":
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];

    case "SOUTH":
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return;
  }
}
//calculates where the sprite ANIMATION is at in its cycle through the walk index animation. AKA, what index
//of the background image is it at.
function getSpriteLocation(direction, walkIndex) {
  switch (direction) {
    case "SOUTH":
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    case "NORTH":
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    case "EAST":
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
    case "WEST":
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;

    default:
      return;
  }
}
//returns what the walkIndex is and what it will be at the next move.
function getWalkIndex() {
  const walkIndex = store.getState().player.walkIndex;
  return walkIndex >= 3 ? 0 : walkIndex + 1;
}
//X and Y axis checks to make sure you're not at edge of map//
function observeBoundaries(oldPos, newPos) {
  return (
    newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
  );
}
//determines what tiles can and cannot be walked through.
function observeGeometry(oldPos, newPos) {
  const tiles = store.getState().map.tiles;
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = tiles[y][x];
  return nextTile < 1;
}

function observeTile(oldPos, newPos) {
  const tiles = store.getState().map.tiles;
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = tiles[y][x];
  if (nextTile === 10) {
    return nextTile === 10
  }
  else if (nextTile === 11) {
    return 11
  }
  else if (nextTile === 12) {
    return 12
  }
  else if (nextTile === 13) {
    return 13
  }
  else if (nextTile === 14) {
    return 14
  }
  else if (nextTile === 15) {
    return 15
  }
  else if (nextTile === 16) {
    return 16
  }
  else if (nextTile === 17) {
    return 17
  }
  else if (nextTile === 18) {
    return 18
  }
  else if (nextTile === 19) {
    return 19
  }
  else if (nextTile === 20) {
    return 20
  }
}


function dispatchMove(direction, newPos) {
  const walkIndex = getWalkIndex();
  store.dispatch({
    type: "MOVE_PLAYER",
    payload: {
      position: newPos,
      direction,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    }
  });

  store.dispatch({
    type: "TALK_NPC",
    payload: {
      dialogue: "",
      npcPos: [],
      isShown: false,
      isTravel: false
    }
  });

}


//get's the position of the actionable tile in front of you.
function getTilePosition() {
  const currentPos = store.getState().player.position;
  const heading = store.getState().player.direction;
  // const map = store.getState().map.name;

  const NPCPos = getNewPosition(currentPos, heading)
  // console.log(`I'm an actionable tile at position ${NPCPos}`)
  // console.log(`im on ${map} map`)

  $.get(`/api/npc/${NPCPos.toString()}`).then(data => {
    store.dispatch({
      type: "TALK_NPC",
      payload: {
        dialogue: data.data.dialogue,
        name: data.data.npcName,
        npcPos: NPCPos,
        isShown: true,
        isTravel: false
      }
    });
  })

}

function getTravelDialogue() {
  const currentPos = store.getState().player.position;
  const heading = store.getState().player.direction;
  // const map = store.getState().map.name;

  const NPCPos = getNewPosition(currentPos, heading)
  // console.log(`I'm an actionable tile at position ${NPCPos}`)
  // console.log(`im on ${map} map`)

  $.get(`/api/npc/${NPCPos.toString()}`).then(data => {
    console.log(data)
    store.dispatch({
      type: "TALK_NPC",
      payload: {
        dialogue: data.data.travelDialogue,
        name: data.data.npcName,
        npcPos: NPCPos,
        mapName: data.data.map,
        isShown: true,
        isTravel: true
      }
    });
  })

}

function changeDirection(direction, newPos) {
  const walkIndex = (getWalkIndex() - 1);
  store.dispatch({
    type: "MOVE_PLAYER",
    payload: {
      position: newPos,
      direction,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    }
  });
}
//checks to see if you can move. If you're not moving off edge of map and the tile is 'passable'(<1)
//you can move (run dispatchMove)
function attemptMove(direction) {
  const oldPos = store.getState().player.position;
  const newPos = getNewPosition(oldPos, direction);
  changeDirection(direction, oldPos);

  if (observeBoundaries(oldPos, newPos) && observeGeometry(oldPos, newPos))
    dispatchMove(direction, newPos)
}

//checks to see if the tile in front of you is an actionable tile. If it is, it queries for it's 
//exact position.
function attemptAction(history) {
  const { position: oldPos, direction } = store.getState().player;
  const newPos = getNewPosition(oldPos, direction);

  console.log(observeTile(oldPos, newPos), oldPos, newPos);
  console.log(direction)

  if (observeTile(oldPos, newPos) === true) {
    getTilePosition();
  }
  else if (observeTile(oldPos, newPos) === 11 || observeTile(oldPos, newPos) === 12 || observeTile(oldPos, newPos) === 13 ||
    observeTile(oldPos, newPos) === 14 || observeTile(oldPos, newPos) === 15) {
    getTravelDialogue()
  }
  else if (observeTile(oldPos, newPos) === 16) {
    history.push("/Island");
  }
  else if (observeTile(oldPos, newPos) === 17) {
    history.push("/HTMLTown");
  }
  else if (observeTile(oldPos, newPos) === 18) {
    window.open("https://super-trivia-bros.herokuapp.com/");
  }
  else if (observeTile(oldPos, newPos) === 19) {
    history.push("/Cave");
  }
  else if (observeTile(oldPos, newPos) === 20) {
    history.push("/CSSTown");
  }
}
//determines what happens depending on which key press.
export function handleKeyDown(e, history) {
  e.preventDefault();

  switch (e.keyCode) {
    case 37:
    case 65:
      return attemptMove("WEST");

    case 38:
    case 87:
      return attemptMove("NORTH");

    case 39:
    case 68:
      return attemptMove("EAST");

    case 40:
    case 83:
      return attemptMove("SOUTH");

    case 32:
      return attemptAction(history);

    default:
      console.log(e.keyCode);
  }
}
