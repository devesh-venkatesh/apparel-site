const TYPES = ["user/updateUser", "user/logoutUser"]

const refreshLocalStorage =
  ({ getState }) =>
  (next) =>
  (action) => {
    next(action)
    if (TYPES.includes(action.type)) {
      return sessionStorage.setItem("user", JSON.stringify(getState().user))
    }
  }

export default refreshLocalStorage
