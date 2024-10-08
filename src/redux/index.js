import authSlice from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";

export default {
  profileSlice: profileSlice.reducer,
  authSlice: authSlice.reducer,
};
