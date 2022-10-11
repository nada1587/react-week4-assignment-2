// Action Creator
export function setRestaurants() {
  return {
    type: 'setRestaurants',
  };
}

export function updateName(shopName) {
  return {
    type: 'updateName',
    payload: {
      shopName,
    },
  };
}

export function updateType(shopType) {
  return {
    type: 'updateType',
    payload: {
      shopType,
    },
  };
}

export function updateAddress(shopAddress) {
  return {
    type: 'updateAddress',
    payload: {
      shopAddress,
    },
  };
}
