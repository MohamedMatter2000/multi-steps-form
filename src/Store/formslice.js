import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  phone: "",
  activeStep: 1,
  Selectedplans: [
    {
      id: "arcade",
      name: "Arcade",
      price: 9,
      duration: "Monthly",
      selected: true,
    },
    {
      id: "advanced",
      name: "Advanced",
      price: 12,
      duration: "Monthly",
      selected: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: 15,
      duration: "Monthly",
      selected: false,
    },
  ],
  isYearly: false,
  addOns: [
    {
      id: 1515,
      name: "Online Service",
      description: "Access to multiplayer games",
      costs: 1,
      selected: false,
    },
    {
      id: 2525,
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      costs: 2,
      selected: false,
    },
    {
      id: 3535,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      costs: 3,
      selected: false,
    },
  ],
  isSubmitted: false,
};
const formslice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.activeStep = state.activeStep + 1;
    },
    selectPlan: (state, action) => {
      const planId = action.payload;
      state.Selectedplans = state.Selectedplans.map((plan) => ({
        ...plan,
        selected: false,
      }));
      const planIndex = state.Selectedplans.findIndex(
        (plan) => plan.id === planId,
      );
      if (planIndex !== -1) {
        state.Selectedplans[planIndex].selected = true;
      }
    },
    nextstep: (state) => {
      state.activeStep += 1;
    },
    prevstep: (state) => {
      state.activeStep -= 1;
    },
    toggleBillingCycle: (state) => {
      state.isYearly = !state.isYearly;
      state.Selectedplans = state.Selectedplans.map((plan) => ({
        ...plan,
        price: state.isYearly ? plan.price * 10 : plan.price / 10,
        duration: state.isYearly ? "Yearly" : "Monthly",
      }));
      state.addOns = state.addOns.map((addon, index) => {
        const originalCost = state.addOns[index].costs;
        return {
          ...addon,
          costs: state.isYearly ? originalCost * 10 : originalCost / 10,
        };
      });
    },
    toggleAddon: (state, action) => {
      const addonId = action.payload;
      const addonIndex = state.addOns.findIndex(
        (addon) => addon.id === addonId,
      );
      if (addonIndex !== -1) {
        state.addOns[addonIndex].selected = !state.addOns[addonIndex].selected;
      }
      // const addOn = action.payload;
      // const isAddOnSelected = state.addOns.some((item) => item.id === addOn.id);
      // if (!isAddOnSelected) {
      //   state.addOns.push({
      //     ...addOn,
      //     costs: state.isYearly ? addOn.costs * 10 : addOn.costs,
      //   });
      // } else {
      //   state.addOns = state.addOns.filter((item) => item.id !== addOn.id);
      // }
    },
    submitForm: (state) => {
      state.isSubmitted = true;
      state.addOns = state.addOns.filter((add) => add.selected);
      state.Selectedplans = state.Selectedplans.filter((plan) => plan.selected);
    },
  },
});
export const {
  updatePersonalInfo,
  nextstep,
  prevstep,
  selectPlan,
  toggleBillingCycle,
  toggleAddon,
  submitForm,
} = formslice.actions;
export default formslice.reducer;
export const seletedactiveplan = (state) => {
  const activeplan = state.form.Selectedplans.filter(
    (plan) => plan.selected,
  )[0];
  return activeplan;
};
export const selectTotalCost = (state) => {
  const planPrice = state.form.Selectedplans.filter((plan) => plan.selected)[0]
    .price;
  const addOnsCost = state.form.addOns
    .filter((addon) => addon.selected)
    .reduce((total, addon) => total + addon.costs, 0);
  return planPrice + addOnsCost;
};
