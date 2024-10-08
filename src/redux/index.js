import authSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";
import goalSlice from "./slices/goalSlice";

export default {
  profileSlice: profileSlice.reducer,
  authSlice: authSlice.reducer,
  goalSlice: goalSlice.reducer,
};
