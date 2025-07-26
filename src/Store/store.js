import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./formslice";
const store = configureStore({
  reducer: {
    form: formreducer,
  },
});
export default store;
